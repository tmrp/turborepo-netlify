import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';
import node from '@astrojs/node';

const modeEnv = import.meta.env.ASTRO_ADAPTER ?? process.env.ASTRO_ADAPTER;

const mode = {
  NETLIFY: {
    adapter: netlify({
      edgeMiddleware: true,
      functionPerRoute: true,
      dist: new URL('./netlify/dist/', import.meta.url),
    }),
  },
  NODE: {
    adapter: node({
      mode: 'standalone',
    }),
  },
};

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
  ...mode[modeEnv],
  vite: {
    optimizeDeps: ['@trpc/server', 'api', 'ui', 'react', 'react-dom'],
  },

  adapter: netlify(),
});
