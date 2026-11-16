// Datos del restaurante: edítalos aquí.
export const site = {
  // URL final del sitio (cámbiala si usas otro subdominio o un dominio propio)
  url: 'https://huayucachino.netlify.app',
  name: 'Rinconcito Huayucachino',
  tagline: 'Cocina huanca, música en vivo',
  whatsapp: '51999999999', // número con código de país, sin + ni espacios
  phoneLabel: '999 999 999',
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
    { days: 'Martes a jueves', time: '12:00 – 17:00' },
    { days: 'Viernes y sábado', time: '12:00 – 23:00' },
    { days: 'Domingo', time: '11:00 – 18:00' },
  ],
  facebook: 'https://www.facebook.com/RinconcitoHuayucachinoOficial/',
  instagram: 'https://instagram.com/',
  tiktok: 'https://tiktok.com/',
};
