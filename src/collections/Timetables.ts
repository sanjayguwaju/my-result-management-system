const Timetables = {
    slug: 'timetables',
    fields: [
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
        name: 'day',
        type: 'select',
        options: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
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
        name: 'teacher',
        type: 'relationship',
        relationTo: 'teachers',
        required: true,
      },
    ],
  };
  
  export default Timetables;
  