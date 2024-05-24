const Teachers = {
    slug: 'teachers',
    fields: [
      {
        name: 'firstName',
        type: 'text',
        required: true,
      },
      {
        name: 'lastName',
        type: 'text',
        required: true,
      },
      {
        name: 'email',
        type: 'email',
        required: true,
      },
      {
        name: 'subjects',
        type: 'array',
        fields: [
          {
            name: 'subject',
            type: 'relationship',
            relationTo: 'subjects',
            required: true,
          },
        ],
      },
    ],
  };
  
  export default Teachers;
  