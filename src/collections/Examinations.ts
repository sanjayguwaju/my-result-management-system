const Examinations = {
    slug: 'examinations',
    fields: [
      {
        name: 'name',
        type: 'text',
        required: true,
      },
      {
        name: 'term',
        type: 'text',
        required: true,
      },
      {
        name: 'year',
        type: 'number',
        required: true,
      },
      {
        name: 'courses',
        type: 'array',
        fields: [
          {
            name: 'course',
            type: 'relationship',
            relationTo: 'courses',
            required: true,
          },
        ],
      },
    ],
  };
  
  export default Examinations;
  