module.exports = ({ env }) => ({
  "import-export-entries": {
    enabled: true,
  },

  upload: {
    config: {
      provider: env("NODE_ENV") === "production" ? "cloudinary" : "local",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          folder:
            env("NODE_ENV") === "production"
              ? env("CLOUDINARY_DEFAULT_FOLDER")
              : undefined,
        },
        delete: {},
      },
    },
  },
});
