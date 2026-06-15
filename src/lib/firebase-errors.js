export const getFirebaseErrorMessage = (error) => {
  if (!error) return "Ocurrió un error inesperado.";

  // Si el error tiene un código (típico de Firebase)
  const code = error.code || error.message;

  switch (code) {
    case "auth/invalid-phone-number":
      return "El número de teléfono no es válido.";
    case "auth/too-many-requests":
      return "Demasiados intentos. Por favor, inténtalo más tarde.";
    case "auth/invalid-verification-code":
      return "El código de verificación es incorrecto.";
    case "auth/code-expired":
      return "El código de verificación ha expirado.";
    case "auth/invalid-app-credential":
      return "Hubo un problema de seguridad en la aplicación.";
    case "auth/network-request-failed":
      return "Error de red. Revisa tu conexión a internet.";
    case "auth/quota-exceeded":
      return "Se ha excedido el límite de solicitudes de SMS. Intenta de nuevo más tarde.";
    case "auth/user-disabled":
      return "Esta cuenta ha sido deshabilitada.";
    case "auth/captcha-check-failed":
      return "La validación del reCAPTCHA ha fallado. Intenta de nuevo.";
    case "auth/missing-phone-number":
      return "Falta el número de teléfono.";
    default:
      // Devolver un mensaje genérico si el error no coincide o no es de firebase
      return `Error al procesar la solicitud: ${error.message || "Error desconocido."}`;
  }
};
