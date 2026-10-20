import ActivarCuenta from '../ActivarCuenta';

export default async function ActivarCuentaTokenPage({ params }) {
  const { activationToken } = await params;
  return <ActivarCuenta activationToken={activationToken} />;
}
