"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast, Toaster } from "sonner";
import axios from 'axios';

import { useState, useEffect } from 'react';
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
  
  const { confirmationResult, setConfirmationResult } = useClient();
  const { business } = useBusiness();

  const router = useRouter();

  const fullPhone = getFullPhone(phone, countryName);

  useEffect(() => {
    const initializeRecaptcha = async () => {
      if (window.recaptchaVerifier) return;

      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "normal",
        }
      );

      await window.recaptchaVerifier.render();

    };

    initializeRecaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!phone) return toast.error('El teléfono es obligatorio');
    if(!isValidPhone(phone, countryName)) return toast.error('Ingresa un telefono valido para el pais seleccionado');
    if(!name) return toast.error('El nombre es obligatorio para crear una cuenta');

    setLoading(true);
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/client/self-create`;
    const payload = { name, phone: fullPhone, businessId: business?.id };

    try {
      await axios.post(endpoint, payload);
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
              <div id="recaptcha-container" />
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
