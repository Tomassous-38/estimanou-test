/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Désactive l'ESlint au build (pas de config eslint dans le projet)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Désactive les checks TypeScript stricts au build
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
