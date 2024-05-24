const Notifications = {
    slug: 'notifications',
    fields: [
      {
        name: 'message',
        type: 'text',
        required: true,
      },
      {
        name: 'recipient',
        type: 'relationship',
        relationTo: ['students', 'teachers'],
        required: true,
      },
      {
        name: 'date',
        type: 'date',
        required: true,
      },
    ],
  };
  
  export default Notifications;
  