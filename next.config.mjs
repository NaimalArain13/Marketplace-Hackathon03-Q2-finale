import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from 'next/constants.js';

/** @type {(phase: string, defaultConfig: import("next").NextConfig) => Promise<import("next").NextConfig>} */
const config = async (phase) => {
  /** @type {import("next").NextConfig} */
  const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io'
        },
        {
          protocol: 'https',
          hostname: 'i.pinimg.com'
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com'
        }
      ]
    },
    reactStrictMode: false
  };

  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withSerwist = (await import('@serwist/next')).default({
      // Note: This is only an example. If you use Pages Router,
      // use something else that works, such as "service-worker/index.ts".
      swSrc: 'app/sw.ts',
      swDest: 'public/sw.js'
    });
    return withSerwist(nextConfig);
  }

  return nextConfig;
};

export default config;
