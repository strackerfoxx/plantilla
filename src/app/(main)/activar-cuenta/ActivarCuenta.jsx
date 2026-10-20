"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast, Toaster } from 'sonner';
import { auth } from '@/lib/firebase';
import { getFirebaseErrorMessage } from '@/lib/firebase-errors';
import api from '@/lib/api';
import { useClient } from '@/hooks/useClient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const googleProvider = new GoogleAuthProvider();

const errorMessages = {
  'Invalid activation link': 'Este enlace de activación no es válido.',
  'Activation link has already been used': 'Este enlace ya se utilizó.',
  'Activation link has expired': 'Este enlace venció. Solicita uno nuevo al negocio.',
  'Business client relationship is unavailable': 'La cuenta asociada a este enlace ya no está disponible.',
  'Client account is already activated': 'Esta cuenta ya fue activada.',
  'Sign in with Google to activate this account': 'Debes continuar con una cuenta de Google.',
  'A verified email is required': 'Tu cuenta de Google debe tener un correo verificado.',
  'This Google account is already linked to another client': 'Esta cuenta de Google ya está vinculada a otro cliente.',
  'This email is already linked to another client': 'Este correo ya está vinculado a otro cliente.',
  'Activation link has expired or has already been used': 'El enlace venció o ya fue utilizado. Solicita uno nuevo al negocio.',
  'Client account has already been activated': 'Esta cuenta ya fue activada.',
  'This Google account or email is already linked to another client': 'Esta cuenta de Google o correo ya está vinculada a otro cliente.',
  'Failed to activate client account': 'No se pudo activar la cuenta. Inténtalo de nuevo.'
};

export default function ActivarCuenta({ activationToken }) {
  const [loading, setLoading] = useState(false);
  const { login } = useClient();
  const router = useRouter();

  const handleActivate = async () => {
    if (!activationToken) return;

    setLoading(true);
    try {
      const credential = await signInWithPopup(auth, googleProvider);
      const idToken = await credential.user.getIdToken();
      const { data } = await api.post('/client/activation', {
        activationToken,
        idToken,
      });

      if (!data?.token || !data?.client) {
        throw new Error('El servidor no devolvió una sesión válida.');
      }

      login(data.client, data.token);
      toast.success('Cuenta activada. Redirigiendo...');
      router.replace('/');
    } catch (error) {
      console.error('Error al activar la cuenta:', error);
      const message = error?.response?.data?.msg || error?.response?.data?.message;
      toast.error(errorMessages[message] || message || getFirebaseErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-1 items-center justify-center px-4 py-12 md:py-16">
      <Toaster position="top-center" richColors />
      <Card className="w-full max-w-lg overflow-hidden border-0 bg-white shadow-glow">
        <div className="h-1.5 bg-primary" />
        <CardHeader className="space-y-3 px-6 pt-8 text-center sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl" aria-hidden="true">
            ✦
          </div>
          <CardTitle className="text-2xl sm:text-3xl">Activa tu cuenta</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            Confirma tu identidad con Google para vincular tu cuenta y acceder a tus servicios.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5 px-6 pb-8 sm:px-10">
          {activationToken ? (
            <>
              <Button
                disabled={loading}
                type="button"
                variant="outline"
                size="lg"
                className="relative h-12 w-full rounded-lg border-[#747775] bg-white px-3 text-sm font-medium text-[#1f1f1f] shadow-none hover:bg-[#f8fafd] hover:text-[#1f1f1f]"
                onClick={handleActivate}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
                    Activando cuenta...
                  </span>
                ) : (
                  <>
                    <GoogleIcon />
                    Continuar con Google
                  </>
                )}
              </Button>
              <p className="text-center text-xs leading-relaxed text-muted-foreground">
                Usa la cuenta de Google cuyo correo quieres asociar a tu perfil. El enlace es personal y de un solo uso.
              </p>
            </>
          ) : (
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-center text-sm leading-relaxed text-amber-900">
              Abre el enlace completo de activación que te compartió el negocio. Si ya venció, solicita uno nuevo.
            </div>
          )}
          <p className="text-center text-sm text-muted-foreground">
            ¿Necesitas ayuda? <Link href="/iniciar-sesion" className="font-semibold text-primary hover:underline">Ve a iniciar sesión</Link>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

function GoogleIcon() {
  return (
    <svg aria-hidden="true" className="absolute left-3 h-5 w-5" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 37.9 46.98 31.9 46.98 24.55Z" />
      <path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.54 2.56 10.78l7.97-6.19Z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.45-4.89 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
    </svg>
  );
}
