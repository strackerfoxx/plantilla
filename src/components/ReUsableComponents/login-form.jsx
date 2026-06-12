"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast, Toaster } from "sonner";
import axios from 'axios';

import { auth } from "@/lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useClient } from '@/hooks/useClient';
import { useBusiness } from '@/hooks/useBusiness';
import PhoneInput, { countryCodes, getFullPhone, isValidPhone } from '@/components/ReUsableComponents/PhoneInput';

export function LoginForm() {
  const [ phone, setPhone ] = useState('');
  const [ countryName, setCountryName ] = useState(countryCodes[0].country);
  const [ validating, setValidating ] = useState(false);
  
  const { confirmationResult, setConfirmationResult, setIsLogin } = useClient();

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

    setValidating(true);
    try {
      await sendOTP();
      toast.success('Código de verificación enviado. Revisa tu teléfono.');
      setIsLogin(true);
      setTimeout(() => {
        router.push(`/verificar-telefono?phone=${encodeURIComponent(fullPhone)}`);
      }, 1000);
    } catch (error) {
      toast.error('Error al procesar la solicitud');
    } finally {
      setPhone('');
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
              <div id="recaptcha-container" />
              <Button disabled={validating} type="submit" size="lg" className="w-full">Iniciar sesión</Button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              ¿Primera vez en AMM-arte Spa?
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
