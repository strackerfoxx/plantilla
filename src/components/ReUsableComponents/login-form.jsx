"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast, Toaster } from "sonner";
import api from '@/lib/api';

import { auth } from "@/lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { getFirebaseErrorMessage } from '@/lib/firebase-errors';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useClient } from '@/hooks/useClient';
import { useBusiness } from '@/hooks/useBusiness';
import PhoneInput, { countryCodes, getFullPhone, isValidPhone } from '@/components/ReUsableComponents/PhoneInput';

export function LoginForm() {
  const [ phone, setPhone ] = useState('');
  const [ countryName, setCountryName ] = useState(countryCodes[0].country);
  const [ validating, setValidating ] = useState(false);
  const recaptchaVerifier = useRef(null);
  const recaptchaContainer = useRef(null);
  
  const { confirmationResult, setConfirmationResult, setIsLogin } = useClient();

  const router = useRouter();

  const fullPhone = getFullPhone(phone, countryName);

  useEffect(() => {
    const activeContainer = document.getElementById('login-recaptcha-container');
    if (!activeContainer) return;
    if (window.recaptchaVerifier && window.recaptchaOwner === 'login' && window.recaptchaContainer === activeContainer) return;
    if (window.recaptchaVerifier && !window.recaptchaVerifier.destroyed) window.recaptchaVerifier.clear();
    window.recaptchaVerifier = new RecaptchaVerifier(auth, activeContainer, { size: 'normal' });
    window.recaptchaOwner = 'login';
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

    setValidating(true);
    try {
      await sendOTP();
      toast.success('Código de verificación enviado. Revisa tu teléfono.');
      setIsLogin(true);
      setTimeout(() => {
        router.push(`/verificar-telefono?phone=${encodeURIComponent(fullPhone)}`);
      }, 1000);
      setPhone('');
    } catch (error) {
      setValidating(false);
      toast.error(getFirebaseErrorMessage(error));
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
            <CardTitle>Iniciar sesión</CardTitle>
            <CardDescription>
              Ingresa solo tu teléfono para recibir un código de verificación.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <PhoneInput
                  phone={phone}
                  onPhoneChange={setPhone}
                  countryName={countryName}
                  onCountryChange={setCountryName}
                />
              </div>
              <div id="login-recaptcha-container" ref={recaptchaContainer} />
              <Button disabled={validating} type="submit" size="lg" className="w-full">Iniciar sesión</Button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              ¿Primera vez en Barbería y salón Alex?
              <Link href={'/crear-cuenta'} className="font-bold text-primary hover:underline">
                Crea tu cuenta
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
