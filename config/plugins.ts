const localProviderConfig = {
  config: {
    provider: 'local',
    providerOptions: {
      sizeLimit: 5 * 1024 * 1024,
    }
  }
}

const cloudinaryProviderConfig = (env) => (
  {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        uploadStream: {
          folder: env('CLOUDINARY_DEFAULT_FOLDER'),
        },
        delete: {},
      },
    },
  }
)

function config({ env }) {
  return {
    upload: {
      ...(env('NODE_ENV') === 'production' ? cloudinaryProviderConfig(env) : localProviderConfig)
    },
    'import-export-entries': {
      enabled: true,
    }
  }
}


export default config

// export default ({ env }) => ({
//   upload: {
//     ...(env('NODE_ENV') === 'production' ? cloudinaryProviderConfig(env) : localProviderConfig)
//   },
//   'import-export-entries': {
//     enabled: true,
//   }
// });
