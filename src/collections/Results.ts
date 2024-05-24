import { isTeacher } from '../accessControl';

const Results = {
  slug: 'results',
  fields: [
    {
      name: 'student',
      type: 'relationship',
      relationTo: 'students',
      required: true,
    },
    {
      name: 'subject',
      type: 'relationship',
      relationTo: 'subjects',
      required: true,
    },
    {
      name: 'marksObtained',
      type: 'number',
      required: true,
    },
    {
      name: 'examination',
      type: 'relationship',
      relationTo: 'examinations',
      required: true,
    },
  ],
  admin: {
    components: {
      BeforeListTable: [], // Ensure this is an array
    },
  },
  access: {
    create: isTeacher,
    update: isTeacher,
    delete: isTeacher,
  },
};

export default Results;
