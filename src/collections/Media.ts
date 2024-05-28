const Media = {
    slug: 'media',
    upload: {
      staticDir: 'media',
      mimeTypes: ['image/*', 'application/pdf'],
    },
    fields: [
      {
        name: 'title',
        type: 'text',
      },
    ],
  };
  
  export default Media;
  