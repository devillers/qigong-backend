// ./config/server.ts

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL'),                // ← required for correct public URL
  proxy: env.bool('IS_PROXIED', true),   // ← important for correct HTTPS headers on Render
  app: {
    keys: env.array('APP_KEYS'),
  },
});
