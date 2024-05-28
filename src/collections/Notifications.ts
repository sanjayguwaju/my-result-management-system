const Notifications = {
  slug: 'notifications',
  access: {
    create: ({ req: { user } }) => {
      return user && user.roles.includes('admin'); // Only admins can create
    },
    read: () => true, // Everyone can read
    update: ({ req: { user } }) => {
      return user && user.roles.includes('admin'); // Only admins can update
    },
    delete: ({ req: { user } }) => {
      return user && user.roles.includes('admin'); // Only admins can delete
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
    },
    {
      name: 'isActive',
      type: 'checkbox',
      required: true,
      defaultValue: true,
    },
    {
      name: 'pdf',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};

export default Notifications;
