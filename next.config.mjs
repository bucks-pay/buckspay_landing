/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'es'], // Add the locales you want to support
        defaultLocale: 'es', // Set the default locale
        localeDetection: false, // Disable locale detection
    },
    reactStrictMode: false,
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
}

export default nextConfig;
