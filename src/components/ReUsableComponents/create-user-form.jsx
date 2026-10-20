"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast, Toaster } from "sonner";
import api from '@/lib/api';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useClient } from '@/hooks/useClient';
import { useBusiness } from '@/hooks/useBusiness';
import PhoneInput, { countryCodes, getFullPhone, isValidPhone } from '@/components/ReUsableComponents/PhoneInput';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirebaseErrorMessage } from '@/lib/firebase-errors';
import { auth } from "@/lib/firebase";

const googleProvider = new GoogleAuthProvider();

function getAuthErrorMessage(error, action) {
  const status = error?.response?.status;
  const data = error?.response?.data;
  if (status === 409) return 'Ya existe una cuenta asociada a este usuario.';
  if (status === 400 && data?.errors?.length) return data.errors[0].msg;
  if (status === 401) return 'No se pudo verificar tu cuenta de Google. Asegúrate de usar un correo verificado.';
  if (status >= 500) return 'Ocurrió un problema en el servidor. Inténtalo de nuevo más tarde.';
  if (error?.request && !error?.response) return 'No se pudo conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.';
  return data?.msg || data?.message || getFirebaseErrorMessage(error) || `No se pudo ${action}. Inténtalo de nuevo.`;
}

export function AuthForm() {
  const [loading, setLoading] = useState(false);
  const [ phone, setPhone ] = useState('');
  const [ countryName, setCountryName ] = useState(countryCodes[0].country);
  
  const { business } = useBusiness();
  const { login } = useClient();
  const router = useRouter();

  const fullPhone = getFullPhone(phone, countryName);

  const handleGoogleSignUp = async () => {
    if (!business?.id) return toast.error('No se pudo identificar el negocio. Recarga la página e inténtalo de nuevo.');
    if (!phone) return toast.error('El teléfono es obligatorio');
    if (!isValidPhone(phone, countryName)) {
      return toast.error('Ingresa un telefono valido para el pais seleccionado');
    }

    setLoading(true);
    let googleIdToken;
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userName = user.displayName?.trim();
      googleIdToken = await user.getIdToken();

      if (!userName) {
        toast.error('Tu cuenta de Google no tiene un nombre. Actualiza tu perfil e inténtalo de nuevo.');
        return;
      }
      const {data} = await api.post('/client/self-create', {
        name: userName,
        phone: fullPhone,
        businessId: business?.id,
        email: user.email,
        idToken: googleIdToken,
      });

      if (!data?.token) throw new Error('El servidor no devolvió una sesión válida.');
      login(data.client || {}, data.token);
      toast.success(data.msg === 'Client account created successfully'
        ? 'Cuenta creada exitosamente.'
        : 'Sesión iniciada. Redirigiendo...');
      router.push('/');
      
    } catch (error) {
      if (error?.response?.status === 409) {
        try {
          const { data } = await api.post('/client/login', {
            idToken: googleIdToken,
            businessId: business.id,
          });

          if (!data?.token) throw new Error('El servidor no devolvió una sesión válida.');
          login(data.client || {}, data.token);
          toast.success('Sesión iniciada. Redirigiendo...');
          router.push('/');
          return;
        } catch (loginError) {
          console.error('Error al iniciar sesión con la cuenta existente:', loginError);
        }
      }
      console.error('Error al crear cuenta con Google:', error);
      toast.error(getAuthErrorMessage(error, 'crear la cuenta'));
    } finally {
      setLoading(false);
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
              Ingresa tu teléfono y continúa con Google para crear tu cuenta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <PhoneInput
                  phone={phone}
                  onPhoneChange={setPhone}
                  countryName={countryName}
                  onCountryChange={setCountryName}
                />
              </div>
              <Button
                disabled={loading}
                type="button"
                variant="outline"
                size="lg"
                className="relative h-11 w-full rounded-md border-[#747775] bg-white px-3 text-sm font-medium text-[#1f1f1f] shadow-none hover:bg-[#f8fafd] hover:text-[#1f1f1f]"
                onClick={handleGoogleSignUp}
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
            </div>
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
