"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast, Toaster } from "sonner";
import api from '@/lib/api';

import { auth } from "@/lib/firebase";
import {
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import { getFirebaseErrorMessage } from '@/lib/firebase-errors';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useClient } from '@/hooks/useClient';
import { useBusiness } from '@/hooks/useBusiness';
import PhoneInput, { countryCodes, getFullPhone, isValidPhone } from '@/components/ReUsableComponents/PhoneInput';

const googleProvider = new GoogleAuthProvider();

function getLoginErrorMessage(error) {
  const status = error?.response?.status;
  const data = error?.response?.data;
  if (status === 404) return 'No encontramos una cuenta vinculada a este Google. Crea una cuenta primero.';
  if (status === 403) return 'Esta cuenta está desactivada para este negocio.';
  if (status === 400 && data?.errors?.length) return data.errors[0].msg;
  if (status === 401) return 'No se pudo verificar tu cuenta de Google. Inténtalo de nuevo.';
  if (status >= 500) return 'Ocurrió un problema en el servidor. Inténtalo de nuevo más tarde.';
  if (error?.request && !error?.response) return 'No se pudo conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.';
  return data?.msg || data?.message || getFirebaseErrorMessage(error);
}

export function LoginForm() {
  const [ phone, setPhone ] = useState('');
  const [ countryName, setCountryName ] = useState(countryCodes[0].country);
  const [ validating, setValidating ] = useState(false);
  
  const { confirmationResult, setConfirmationResult, setIsLogin, login } = useClient();
  const { business } = useBusiness();

  const router = useRouter();

  const fullPhone = getFullPhone(phone, countryName);

  const handleGoogleSignIn = async () => {
    if (!business?.id) return toast.error('No se pudo identificar el negocio. Recarga la página e inténtalo de nuevo.');
    setValidating(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();
      const { data } = await api.post('/client/login', {
        idToken,
        businessId: business?.id,
      });

      if (!data?.token) {
        throw new Error('El servidor no devolvió una sesión válida.');
      }

      login(data.client || {}, data.token);
      toast.success('Sesión iniciada. Redirigiendo...');
      router.push('/');
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      toast.error(getLoginErrorMessage(error));
    } finally {
      setValidating(false);
    }
  };

  // useEffect(() => {
  //   const initializeRecaptcha = async () => {
  //     if (window.recaptchaVerifier) return;

  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       auth,
  //       "recaptcha-container",
  //       {
  //         size: "normal",
  //       }
  //     );

  //     await window.recaptchaVerifier.render();
  //   };

  //   initializeRecaptcha();
  // }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if(!phone) return toast.error('El teléfono es obligatorio');
  //   if(!isValidPhone(phone, countryName)) return toast.error('Ingresa un telefono valido para el pais seleccionado');

  //   setValidating(true);
  //   try {
  //     await sendOTP();
  //     toast.success('Código de verificación enviado. Revisa tu teléfono.');
  //     setIsLogin(true);
  //     setTimeout(() => {
  //       router.push(`/verificar-telefono?phone=${encodeURIComponent(fullPhone)}`);
  //     }, 1000);
  //     setPhone('');
  //   } catch (error) {
  //     setValidating(false);
  //     toast.error(getFirebaseErrorMessage(error));
  //   }
  // }

  // async function sendOTP() {
  //   try {
  //     const confirmationResult = await signInWithPhoneNumber(
  //       auth,
  //       fullPhone,
  //       window.recaptchaVerifier
  //     );

      
  //     setConfirmationResult(confirmationResult);

  //   } catch (error) {
  //     console.error("Error sending OTP:", error);
  //     throw error;
  //   }
  // }

  return (
    <section className="flex flex-1 items-center py-8 md:py-10">
      <Toaster position="top-center" richColors />
      <div className="container max-w-xl">
        <Card className="bg-white shadow-glow">
          <CardHeader>
            <CardTitle>Iniciar sesión</CardTitle>
            <CardDescription>
              Ingresa usando tu cuenta de Google.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* <form className="space-y-5"> */}
              {/* <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <PhoneInput
                  phone={phone}
                  onPhoneChange={setPhone}
                  countryName={countryName}
                  onCountryChange={setCountryName}
                />
              </div> */}
              {/* <Button disabled={validating} type="submit" size="lg" className="w-full">Iniciar sesión</Button> */}
              <Button
                disabled={validating}
                type="button"
                variant="outline"
                size="lg"
                className="relative h-11 w-full rounded-md border-[#747775] bg-white px-3 text-sm font-medium text-[#1f1f1f] shadow-none hover:bg-[#f8fafd] hover:text-[#1f1f1f]"
                onClick={handleGoogleSignIn}
              >
                <svg
                  aria-hidden="true"
                  className="absolute left-3 h-5 w-5"
                  viewBox="0 0 48 48"
                >
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 37.99 46.98 31.9 46.98 24.55Z" />
                  <path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.54 2.56 10.78l7.97-6.19Z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.45-4.89 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
                </svg>
                Continuar con Google
              </Button>
            {/* </form> */}
            {/* <div className="my-5 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="h-px flex-1 bg-border" />
              <span>O continúa con</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <Button
              disabled={validating}
              type="button"
              variant="outline"
              size="lg"
              className="w-full"
              onClick={handleGoogleSignIn}
            >
              Continuar con Google
            </Button> */}
            <p className="mt-6 text-center text-sm text-muted-foreground">
              ¿Primera vez en agendando?
              <Link href={'/crear-cuenta'} className="font-bold text-primary ml-2 hover:underline">
                Crea tu cuenta
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
