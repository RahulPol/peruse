import { SetStateAction, useState } from 'react';
import { Text, TextInput } from 'react-native-paper';
import { useTheme } from 'styled-components/native';
import * as yup from 'yup';

import { Spacer } from '../../../components/spacer/spacer.component';
import { useAuth } from '../../../services/authentication/authentication.context';
import yupErrorUtils, { YupError } from '../../../utils/yupErrorUtils';
import {
  AccountRegisterView,
  AuthInput,
  ErrorText,
  SignUpButton,
} from '../styles/account-register.component.style';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, ({ min }) => `Password must be at least ${min} characters`),
  confirmedPassword: yup
    .string()
    .required('Confirmed Password is required')
    .min(6, ({ min }) => `Password must be at least ${min} characters`),
});

export const AccountRegister = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmedPassword, setConfirmedPassword] = useState<string>('');
  const [validationErrors, setValidationErrors] = useState<YupError[]>();
  const { isLoading, error, register } = useAuth();

  const { colors } = useTheme();

  const handleRegister = async () => {
    try {
      await schema.validate(
        { email, password, confirmedPassword },
        { abortEarly: false }
      );
      await register(email, password, confirmedPassword);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors = yupErrorUtils.buildError(err);
        setValidationErrors(errors);
      }
    }
  };

  return (
    <AccountRegisterView>
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
      <Spacer variant="top.medium" />
      <AuthInput
        activeOutlineColor={colors.ui.primary}
        left={<TextInput.Icon name="lock" />}
        mode="outlined"
        outlineColor={colors.ui.secondary}
        placeholder="Confirm Password"
        secureTextEntry
        textContentType="password"
        value={confirmedPassword}
        onChangeText={(u: SetStateAction<string>) => setConfirmedPassword(u)}
      />
      {yupErrorUtils.returnFieldErrors(
        'confirmedPassword',
        validationErrors
      ) && (
        <ErrorText>
          {yupErrorUtils.returnFieldErrors(
            'confirmedPassword',
            validationErrors
          )}
        </ErrorText>
      )}
      <Spacer variant="top.large" />
      {error && (
        <>
          <Spacer variant="top.large" />
          <Text variant="bodySmall" selectionColor={colors.text.error}>
            {error}
          </Text>
        </>
      )}
      <SignUpButton
        buttonColor={colors.ui.primary}
        loading={isLoading}
        mode="contained"
        textColor={colors.text.primary}
        onPress={() => handleRegister()}>
        Sign Up
      </SignUpButton>
    </AccountRegisterView>
  );
};
