const Users = {
  slug: 'users',
  auth: true, // Enable authentication
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
      name: 'role',
      type: 'select',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Teacher',
          value: 'teacher',
        },
        {
          label: 'Student',
          value: 'student',
        },
        {
          label: 'Parent',
          value: 'parent',
        },
      ],
      required: true,
    },
  ],
};

export default Users;
