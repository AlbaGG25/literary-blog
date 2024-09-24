/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true, // Habilita SWC para la minificación
  experimental: {
    // Elimina swcLoader ya que no es una opción válida
  },
  };
  
  export default nextConfig;
