export const isAdmin = ({ req: { user } }) => {
  return user && user.role === 'admin';
};

export const isTeacher = ({ req: { user } }) => {
  return user && user.role === 'teacher';
};

export const isStudent = ({ req: { user } }) => {
  return user && user.role === 'student';
};
