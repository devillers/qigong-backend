// ./config/plugins.ts

export default ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name:   env('CLOUDINARY_NAME'),
          api_key:      env('CLOUDINARY_KEY'),
          api_secret:   env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {
            folder: env('CLOUDINARY_FOLDER'),        // for direct file uploads
          },
          uploadStream: {
            folder: env('CLOUDINARY_FOLDER'),        // for internal streams (e.g. GraphQL, remote fetch)
          },
          delete: {},       // you can also scope deletes if needed
          deleteMany: {},
        },
      },
    },
  });
  