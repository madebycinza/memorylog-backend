export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            process.env.CLOUDFRONT_URL,
            process.env.AWS_URL
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            process.env.CLOUDFRONT_URL,
            process.env.AWS_URL
          ],
        },
      },
    },
  },
];
