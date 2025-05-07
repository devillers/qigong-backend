

  // ./config/plugins.ts

export default ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name:   env('CLOUDINARY_NAME'),
          api_key:      env('CLOUDINARY_KEY'),
          api_secret:   env('CLOUDINARY_SECRET'),
          secure:       true,                  // ← force https URLs
          resource_type: 'auto',               // ← handle all file types
        },
        actionOptions: {
          upload: {
            folder: env('CLOUDINARY_FOLDER'), // ← for file uploads
          },
          uploadStream: {
            folder: env('CLOUDINARY_FOLDER'), // ← for internal streams
          },
          delete: {},
          deleteMany: {},
        },
      },
    },
  });
  
  