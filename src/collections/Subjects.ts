const Subjects = {
    slug: 'subjects',
    fields: [
      {
        name: 'name',
        type: 'text',
        required: true,
      },
      {
        name: 'fullMarks',
        type: 'number',
        required: true,
      },
      {
        name: 'passMarks',
        type: 'number',
        required: true,
      },
    ],
  };
  
  export default Subjects;
  