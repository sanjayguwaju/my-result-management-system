import path from 'path';

import { payloadCloud } from '@payloadcms/plugin-cloud';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';

import Users from './collections/Users';
import Students from './collections/Students';
import Teachers from './collections/Teachers';
import Classes from './collections/Classes';
import Courses from './collections/Courses';
import Subjects from './collections/Subjects';
import Examinations from './collections/Examination';
import Results from './collections/Results';
import Notifications from './collections/Notifications';
import Attendance from './collections/Attendance';

export default buildConfig({
  admin: {
    user: Users.slug, // Correctly set Users as the admin user collection
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Users, // Ensure Users is included in the collections array
    Students,
    Teachers,
    Classes,
    Courses,
    Subjects,
    Examinations,
    Results,
    Notifications,
    Attendance,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
