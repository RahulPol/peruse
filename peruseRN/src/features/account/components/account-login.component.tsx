import { SetStateAction, useState } from 'react';
import { Text, TextInput } from 'react-native-paper';
import { useTheme } from 'styled-components/native';
import * as yup from 'yup';

import { Spacer } from '../../../components/spacer/spacer.component';
import { useAuth } from '../../../services/authentication/authentication.context';
import yupErrorUtils, { YupError } from '../../../utils/yupErrorUtils';
import {
  AccountLoginView,
  AuthInput,
  ErrorText,
  GoogleButton,
  SignInButton,
} from '../styles/account-login.component.style';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, ({ min }) => `Password must be at least ${min} characters`),
});

// const buildErrorMessage =

export const AccountLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [validationErrors, setValidationErrors] = useState<YupError[]>();
  const { isLoading, error, resetError, login, loginWithGoogle } = useAuth();

  const { colors } = useTheme();

  const handleSubmit = async () => {
    try {
      resetError();
      setValidationErrors([]);
      await schema.validate({ email, password }, { abortEarly: false });
      await login(email, password);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors = yupErrorUtils.buildError(err);
        setValidationErrors(errors);
      }
    }
  };

  const handleGoogleLogin = async () => {
    resetError();
    setValidationErrors([]);
    await loginWithGoogle();
  };

  return (
    <AccountLoginView>
      <AuthInput
        activeOutlineColor={colors.ui.primary}
        left={<TextInput.Icon name="email" />}
        mode="outlined"
        outlineColor={colors.ui.secondary}
        placeholder="Email"
        value={email}
        onChangeText={(u: SetStateAction<string>) => setEmail(u)}
      />
      {yupErrorUtils.returnFieldErrors('email', validationErrors) && (
        <ErrorText>
          {yupErrorUtils.returnFieldErrors('email', validationErrors)}
        </ErrorText>
      )}
      <Spacer variant="top.medium" />
      <AuthInput
        activeOutlineColor={colors.ui.primary}
        left={<TextInput.Icon name="lock" />}
        mode="outlined"
        outlineColor={colors.ui.secondary}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        value={password}
        onChangeText={(u: SetStateAction<string>) => setPassword(u)}
      />
      {yupErrorUtils.returnFieldErrors('password', validationErrors) && (
        <ErrorText>
          {yupErrorUtils.returnFieldErrors('password', validationErrors)}
        </ErrorText>
      )}
      <Spacer variant="top.large" />
      {error && (
        <>
          <Spacer variant="top.large" />
          <Text variant="bodySmall">{error}</Text>
        </>
      )}
      <SignInButton
        buttonColor={colors.ui.primary}
        loading={isLoading}
        mode="contained"
        textColor={colors.text.primary}
        onPress={() => handleSubmit()}>
        Sign In
      </SignInButton>
      <Spacer variant="top.large" />
      <Text variant="labelLarge"> OR </Text>
      <Spacer variant="top.small" />
      <GoogleButton
        activeOutlineColor={colors.ui.primary}
        buttonColor={colors.text.primary}
        icon="google"
        textColor={colors.ui.primary}
        onPress={() => handleGoogleLogin()}>
        Sign in with Google
      </GoogleButton>
    </AccountLoginView>
  );
};
