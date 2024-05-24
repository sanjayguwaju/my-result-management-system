const Attendance = {
    slug: 'attendance',
    fields: [
      {
        name: 'student',
        type: 'relationship',
        relationTo: 'students',
        required: true,
      },
      {
        name: 'class',
        type: 'relationship',
        relationTo: 'classes',
        required: true,
      },
      {
        name: 'date',
        type: 'date',
        required: true,
      },
      {
        name: 'status',
        type: 'radio',
        options: [
          {
            label: 'Present',
            value: 'present',
          },
          {
            label: 'Absent',
            value: 'absent',
          },
          {
            label: 'Late',
            value: 'late',
          },
        ],
        required: true,
      },
    ],
  };
  
  export default Attendance;
  