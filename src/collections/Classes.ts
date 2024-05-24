const Classes = {
    slug: 'classes',
    fields: [
      {
        name: 'className',
        type: 'text',
        required: true,
      },
      {
        name: 'classCode',
        type: 'text',
        required: true,
        unique: true,
      },
    ],
  };
  
  export default Classes;
  