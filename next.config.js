/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  devIndicators: {
    appIsrStatus: false, // Isso desativa o indicador de rota estática
  },
  experimental: {
    externalDir: true,
  },
}
