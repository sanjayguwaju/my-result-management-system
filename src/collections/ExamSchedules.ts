const ExamSchedules = {
    slug: 'exam-schedules',
    access: {
      create: ({ req: { user } }) => user && user.role === 'admin',
      read: () => true,
      update: ({ req: { user } }) => user && user.role === 'admin',
      delete: ({ req: { user } }) => user && user.role === 'admin',
    },
    fields: [
      {
        name: 'exam',
        type: 'relationship',
        relationTo: 'examinations',
        required: true,
      },
      {
        name: 'class',
        type: 'relationship',
        relationTo: 'classes',
        required: true,
      },
      {
        name: 'subject',
        type: 'relationship',
        relationTo: 'subjects',
        required: true,
      },
      {
        name: 'date',
        type: 'date',
        required: true,
      },
      {
        name: 'startTime',
        type: 'text',
        required: true,
      },
      {
        name: 'endTime',
        type: 'text',
        required: true,
      },
      {
        name: 'venue',
        type: 'text',
        required: true,
      },
      {
        name: 'invigilators',
        type: 'array',
        fields: [
          {
            name: 'invigilator',
            type: 'relationship',
            relationTo: 'teachers',
            required: true,
          },
        ],
        required: true,
      },
      {
        name: 'seatingArrangement',
        type: 'richText',
        required: true,
      },
    ],
  };
  
  export default ExamSchedules;
  