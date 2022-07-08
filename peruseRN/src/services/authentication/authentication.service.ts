import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const loginRequest = (auth: Auth, email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (auth: Auth, email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);
