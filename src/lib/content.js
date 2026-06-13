export const services = [
  {
    name: 'Corte de Cabello (Haircuts)',
    description: 'Corte de cabello a la moda con máquina o tijera, incluyendo fades, taper, y estilos clásicos. Acabado profesional.',
    duration: '45 min',
    price: 250
  },
  {
    name: 'Arreglo de Barba (Beard Trims)',
    description: 'Delineado, rebaje y perfilado de barba con toalla caliente y productos de alta calidad para el cuidado facial.',
    duration: '30 min',
    price: 150
  },
  {
    name: 'Afeitado Clásico (Shaves)',
    description: 'Afeitado tradicional con navaja libre, espuma caliente y toallas calientes para una piel suave y sin irritación.',
    duration: '45 min',
    price: 200
  },
  {
    name: 'Delineado (Line Ups)',
    description: 'Marcado de contornos en frente, cuello y patillas para mantener un aspecto limpio y definido entre cortes.',
    duration: '15 min',
    price: 100
  },
  {
    name: 'Estilizado (Styling)',
    description: 'Lavado de cabello y peinado profesional utilizando ceras, pomadas o geles según tu estilo preferido.',
    duration: '20 min',
    price: 120
  },
  {
    name: 'Corte + Barba (Combo)',
    description: 'El servicio completo para un look impecable. Incluye corte de cabello y arreglo de barba con toalla caliente.',
    duration: '75 min',
    price: 350
  }
];

export const testimonials = [
  // Keeping this structure but not strictly used anymore if Reviews.jsx has them hardcoded.
  // It's better to update it anyway for consistency.
  {
    name: 'Bethany Lerey',
    text: 'Siempre que vamos nos atienden super bien. Mi hijo tiene el cabello super rebelde y Chino (uno de los barberos) es el único barbero que le deja su cabello increíble. Lo recomiendo muchísimo. Los costos no son exorbitantes Los chicos son buenísima onda y venden muchos productos especializados.',
    rating: 5,
    date: 'Hace 4 meses'
  },
  {
    name: 'Laloo Solis',
    text: 'Excelente atención, e instalaciónes de primera. Corte de cabello rápido y muy bien. Miguel es quien siempre me lo corta. Es amigo',
    rating: 5,
    date: 'Hace 3 meses'
  },
  {
    name: 'ゲリコシェイラ',
    text: 'Llevo yendo poco más de un año y la verdad es que estoy muy contenta. Había tenido malas experiencias en otros lugares y desde que voy allí con Juanito salgo encantada. 10/10',
    rating: 5,
    date: 'Hace 7 meses'
  }
];

export const appointments = [
  { service: 'Corte de Cabello (Haircuts)', date: 'Sábado 8 de junio', time: '12:30 p.m.', status: 'Confirmada' },
  { service: 'Arreglo de Barba (Beard Trims)', date: 'Miércoles 19 de junio', time: '5:00 p.m.', status: 'Pendiente de confirmar' }
];
