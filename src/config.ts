// Datos del restaurante: edítalos aquí.
export const site = {
  // URL final del sitio (cámbiala si usas otro subdominio o un dominio propio)
  url: 'https://rinconcitohuayucachino.netlify.app',
  // Código de verificación de Google Search Console (solo el valor de content="...")
  googleVerification: '',
  name: 'Rinconcito Huayucachino',
  tagline: 'Cocina huanca, música en vivo',
  whatsapp: '51934350826', // número con código de país, sin + ni espacios
  phoneLabel: '+51 934 350 826',
  address: 'Av. Carapongo, Carapongo, Lurigancho - Chosica, Lima',
  locality: 'Lurigancho - Chosica',
  postalCode: '15487',
  region: 'Lima',
  // Coordenadas opcionales del local (Google Maps > clic derecho > copiar coordenadas)
  geo: { lat: -12.0071279, lng: -76.8862862 } as null | { lat: number; lng: number },
  cuisine: ['Peruana', 'Andina', 'Huanca'],
  priceRange: 'S/ 20 – 60',
  mapsQuery: 'Rinconcito Huayucachino, Av. Carapongo, Lurigancho, Lima',
  mapsUrl: 'https://maps.app.goo.gl/fKhHVq2WXjEDUt4QA',
  hours: [
    {
      days: 'Lunes a viernes', time: '10:00 a. m. – 6:00 p. m.',
      schema: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '18:00',
    },
    {
      days: 'Sábados y domingos', time: '8:00 a. m. – 10:00 p. m.',
      schema: ['Saturday', 'Sunday'], opens: '08:00', closes: '22:00',
    },
  ],
  facebook: 'https://www.facebook.com/RinconcitoHuayucachinoOficial/',
  instagram: 'https://instagram.com/',
  tiktok: 'https://tiktok.com/',
};
