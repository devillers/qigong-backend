// ./config/plugins.ts
console.log('👉 Loading Cloudinary upload plugin…');
export default ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        // === providerOptions ===
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key:    env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
          secure:     true,                    // ← force HTTPS URLs for all assets
          folder:     env('CLOUDINARY_FOLDER'),// ← tell Cloudinary which folder at the provider level
          resource_type: 'auto',               // ← handle png/jpg/webp/etc
        },
        // === actionOptions (optional overrides) ===
        actionOptions: {
          upload: {
            folder: env('CLOUDINARY_FOLDER'), // for direct file uploads
          },
          uploadStream: {
            folder: env('CLOUDINARY_FOLDER'), // for internal streams
          },
          delete: {},
          deleteMany: {},
        },
      },
    },
  });
  


  