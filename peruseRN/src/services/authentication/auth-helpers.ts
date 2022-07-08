import { FirebaseError } from 'firebase/app';

export const isFirebaseError = (err: any): err is FirebaseError =>
  'code' in err;
