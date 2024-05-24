const Students = {
    slug: 'students',
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
        name: 'studentId',
        type: 'text',
        required: true,
        unique: true,
      },
      {
        name: 'email',
        type: 'email',
        required: true,
      },
      {
        name: 'class',
        type: 'relationship',
        relationTo: 'classes',
        required: true,
      },
    ],
  };
  
  export default Students;
  