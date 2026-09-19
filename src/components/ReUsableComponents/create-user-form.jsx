"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast, Toaster } from "sonner";
import api from '@/lib/api';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useClient } from '@/hooks/useClient';
import { useBusiness } from '@/hooks/useBusiness';
import PhoneInput, { countryCodes, getFullPhone, isValidPhone } from '@/components/ReUsableComponents/PhoneInput';
import { auth } from '@/lib/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { getFirebaseErrorMessage } from '@/lib/firebase-errors';

export function AuthForm() {
  const [loading, setLoading] = useState(false);
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ countryName, setCountryName ] = useState(countryCodes[0].country);
  const [ email, setEmail ] = useState('');
  const recaptchaVerifier = useRef(null);
  const recaptchaContainer = useRef(null);
  
  const { confirmationResult, setConfirmationResult } = useClient();
  const { business } = useBusiness();

  const router = useRouter();

  const fullPhone = getFullPhone(phone, countryName);

  useEffect(() => {
    const activeContainer = document.getElementById('register-recaptcha-container');
    if (!activeContainer) return;
    if (window.recaptchaVerifier && window.recaptchaOwner === 'register' && window.recaptchaContainer === activeContainer) return;
    if (window.recaptchaVerifier && !window.recaptchaVerifier.destroyed) window.recaptchaVerifier.clear();
    window.recaptchaVerifier = new RecaptchaVerifier(auth, activeContainer, { size: 'normal' });
    window.recaptchaOwner = 'register';
    window.recaptchaContainer = activeContainer;
    window.recaptchaVerifier.render();
    return;

    const host = recaptchaContainer.current;
    if (!host) return;

    // Firebase puede terminar un render cancelado después del desmontaje. Al
    // usar un nodo interno nuevo, ese render tardío queda fuera del DOM visible.
    const container = document.createElement('div');
    host.replaceChildren(container);
    const verifier = new RecaptchaVerifier(
        auth,
        container,
        {
          size: "normal",
        }
      );
    recaptchaVerifier.current = verifier;
    verifier.render().catch((error) => {
      if (!verifier.destroyed) console.error('Error al renderizar reCAPTCHA:', error);
    });

    return () => {
      if (verifier && !verifier.destroyed) verifier.clear();
      if (host.contains(container)) host.replaceChildren();
      if (recaptchaVerifier.current === verifier) recaptchaVerifier.current = null;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!phone) return toast.error('El teléfono es obligatorio');
    if(!isValidPhone(phone, countryName)) return toast.error('Ingresa un telefono valido para el pais seleccionado');
    if(!name) return toast.error('El nombre es obligatorio para crear una cuenta');

    setLoading(true);
    const endpoint = `/client/self-create`;
    const payload = { name, phone: fullPhone, businessId: business?.id };

    try {
      await api.post(endpoint, payload);
      toast.success('Cuenta creada. Revisa tu teléfono para el código de verificación.');
      await sendOTP();

      setTimeout(() => {
        router.push(`/verificar-telefono?phone=${encodeURIComponent(fullPhone)}`);
      }, 2000);

    } catch (error) {
      setLoading(false);
      if (error?.response?.status === 409) {
        toast.error("El usuario ya existe");
      } else {
        toast.error(getFirebaseErrorMessage(error));
      }
    }
  }

  async function sendOTP() {
    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        fullPhone,
        window.recaptchaVerifier
      );
      
      setConfirmationResult(confirmationResult);
    } catch (error) {
      console.error("Error sending OTP:", error);
      throw error;
    }
  }

  return (
    <section className="flex flex-1 items-center py-8 md:py-10">
      <Toaster position="top-center" richColors />
      <div className="container max-w-xl">
        <Card className="bg-white shadow-glow">
          <CardHeader>
            <CardTitle>Crear cuenta</CardTitle>
            <CardDescription>
              Regístrate con tu nombre y teléfono. El email es opcional para enviarte recordatorios.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Ej. María López"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <PhoneInput
                  phone={phone}
                  onPhoneChange={setPhone}
                  countryName={countryName}
                  onCountryChange={setCountryName}
                />
              </div>
              <div id="register-recaptcha-container" ref={recaptchaContainer} />
              <Button disabled={loading} type="submit" size="lg" className="w-full">Continuar</Button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              ¿Ya tienes cuenta?
              <Link href={'/iniciar-sesion'} className="font-bold text-primary hover:underline">
                Inicia sesión
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
