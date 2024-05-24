const Courses = {
    slug: 'courses',
    fields: [
      {
        name: 'courseName',
        type: 'text',
        required: true,
      },
      {
        name: 'courseCode',
        type: 'text',
        required: true,
        unique: true,
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
      {
        name: 'teachers',
        type: 'array',
        fields: [
          {
            name: 'teacher',
            type: 'relationship',
            relationTo: 'teachers',
            required: true,
          },
        ],
      },
      {
        name: 'class',
        type: 'relationship',
        relationTo: 'classes',
        required: true,
      },
    ],
  };
  
  export default Courses;
  