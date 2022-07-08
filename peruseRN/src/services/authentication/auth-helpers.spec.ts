import { FirebaseError } from 'firebase/app';

import { isFirebaseError } from './auth-helpers';

describe('isFirebaseError', () => {
  it('should return true if error is firebase error', () => {
    const error = new FirebaseError('auth/invalid email', 'email is not valid');
    expect(isFirebaseError(error)).toBeTruthy();
  });

  it('should return false if error is not firebase error', () => {
    const error = new Error('email is not valid');
    expect(isFirebaseError(error)).toBeFalsy();
  });
});
