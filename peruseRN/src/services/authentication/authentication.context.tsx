import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import {
  GoogleAuthProvider,
  User,
  getAuth,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from 'firebase/auth';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import app from '../../infrastructure/firebase/firebase-app';
import { isFirebaseError } from './auth-helpers';
import { loginRequest, registerRequest } from './authentication.service';

WebBrowser.maybeCompleteAuthSession();

const firebaseAuth = getAuth(app);

export interface Auth {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | undefined;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
  register: (
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  resetError: () => void;
}

const AuthenticationContext = createContext<Auth>({} as Auth);

export const useAuth = (): Auth => useContext(AuthenticationContext);

export const AuthenticationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  // TODO: add clientId to .env
  const [_, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      '591688991483-au1qmqnr6pfrpv7be7dal6sbdcl3ka3o.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      const googleAuth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(googleAuth, credential);
    }
  }, [response]);

  useEffect(() => {
    const subscribe = onAuthStateChanged(firebaseAuth, (usr) => {
      if (usr) {
        setUser(usr);
      } else {
        setUser(null);
      }
    });

    return subscribe;
  }, []);

  const login = async (email: string, password: string) => {
    try {
      resetError();
      setIsLoading(true);
      await loginRequest(firebaseAuth, email, password);
      setIsLoading(false);
    } catch (e) {
      if (isFirebaseError(e)) {
        setError(e.code);
      } else {
        setError('Unexpected error occurred');
      }
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    try {
      resetError();
      setIsLoading(true);

      await promptAsync();
      setIsLoading(false);
    } catch (e) {
      if (isFirebaseError(e)) {
        setError(e.code);
      } else {
        setError('Unexpected error occurred');
      }
      setIsLoading(false);
    }
  };

  const logout = () => signOut(firebaseAuth);

  const register = async (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    try {
      resetError();
      if (password !== confirmPassword) {
        setError('Password does not match');
        return;
      }
      setIsLoading(true);
      await registerRequest(firebaseAuth, email, password);
      setIsLoading(false);
    } catch (e) {
      if (isFirebaseError(e)) {
        setError(e.code);
      } else {
        setError('Unexpected error occurred');
      }
      setIsLoading(false);
    }
  };

  const resetError = () => setError(undefined);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        error,
        user,
        isLoading,
        login,
        loginWithGoogle,
        logout,
        register,
        resetError,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
