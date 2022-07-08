import { FirebaseError } from 'firebase/app';
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { isFirebaseError } from './auth-helpers';
import { loginRequest, registerRequest } from './authentication.service';

jest.mock('firebase/auth');

const mockUser = {
  email: 'test@example.com',
  password: 'test_password',
  displayName: 'test',
};

describe('AuthenticationService', () => {
  it('should login a user with valid  email and password', async () => {
    (signInWithEmailAndPassword as jest.Mock).mockResolvedValueOnce({
      user: {
        providerData: [
          { email: mockUser.email, displayName: mockUser.displayName },
        ],
      },
    } as UserCredential);

    const response = await loginRequest(
      {} as Auth,
      mockUser.email,
      mockUser.password
    );
    expect(response.user.providerData.length).toBe(1);
    expect(response.user.providerData[0].displayName).toBe('test');
  });

  it('should not login a user with invalid  email and password', async () => {
    (signInWithEmailAndPassword as jest.Mock).mockRejectedValueOnce({
      code: 'auth/invalidEmail',
      message: 'Invalid email',
    } as FirebaseError);

    try {
      await loginRequest({} as Auth, mockUser.email, mockUser.password);
    } catch (err) {
      if (err instanceof Error) {
        expect(isFirebaseError(err)).toBeTruthy();
        expect(err.message).toBe('Invalid email');
      }
    }
  });

  it('should create a user with  email and password', async () => {
    (createUserWithEmailAndPassword as jest.Mock).mockResolvedValueOnce({
      user: {
        providerData: [
          { email: mockUser.email, displayName: mockUser.displayName },
        ],
      },
    } as UserCredential);

    const user = await registerRequest(
      {} as Auth,
      mockUser.email,
      mockUser.password
    );
    expect(user.user.providerData.length).toBe(1);
    expect(user.user.providerData[0].displayName).toBe('test');
  });
});
