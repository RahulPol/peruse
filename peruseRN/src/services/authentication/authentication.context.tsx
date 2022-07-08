import { User, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
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

const firebaseAuth = getAuth(app);

export interface Auth {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | undefined;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
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
      setError(undefined);
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

  const logout = () => signOut(firebaseAuth);

  const register = async (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    try {
      setError(undefined);
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

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        error,
        user,
        isLoading,
        login,
        logout,
        register,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
