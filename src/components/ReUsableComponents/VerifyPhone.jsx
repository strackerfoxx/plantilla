"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { InputOTPControlled } from '@/components/ReUsableComponents/otp-input';
import { toast, Toaster } from "sonner";
import api from '@/lib/api';

import { useRouter } from 'next/navigation';
import { useClient } from '@/hooks/useClient';
import { useBusiness } from '@/hooks/useBusiness';

import { useState } from 'react';
import { getFirebaseErrorMessage } from '@/lib/firebase-errors';


export default function VerifyPhone({ phone, mode = "create" }) {
    const [code, setCode] = useState("")
    const [ validating, setValidating ] = useState(false);
    const { login, confirmationResult, isLogin, setIsLogin } = useClient();
    const { business } = useBusiness();

    const router = useRouter();

    async function handleSubmit(e) {
      e.preventDefault();
      if(!phone) return toast.error('El teléfono es obligatorio');

      const endpoint = isLogin
        ? `/client/login`
        : `/client/confirm-client`;

      setValidating(true);

      try {
        const result = await confirmationResult.confirm(code);
        const user = result.user;
        const idToken = await user.getIdToken();

        const payload = isLogin
          ? { idToken, businessId: business?.id }
          : { phone, idToken, businessId: business?.id };

        const {data} = await api.post(endpoint, payload);

        if (data.token) {
          login(data.client || {}, data.token);
        }

        toast.success("Número verificado con éxito. Redirigiendo...");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } catch (error) {
        setValidating(false);
        console.error(error);
        toast.error(getFirebaseErrorMessage(error));
      }
    }
  return (
    <section className="section-padding">
      <Toaster position="top-center" richColors />
      <div className="container max-w-xl">
        <Card className="bg-white shadow-glow">
          <CardHeader>
            <CardTitle>Verifica tu teléfono</CardTitle>
            <CardDescription>Escribe el código de 6 dígitos que enviaremos por SMS para proteger tu cuenta.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="code">Código de verificación</Label>
                <InputOTPControlled id="code" name="code" required code={code} setCode={setCode} />
              </div>
              <Button disabled={validating} type="submit" size="lg" className="w-full">Verificar y continuar</Button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">¿No recibiste el código? <button className="font-bold text-primary">Reenviar código</button></p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
