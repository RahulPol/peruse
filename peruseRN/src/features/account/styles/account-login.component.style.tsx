import { Text, TextProps, View, ViewProps } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

export const AccountLoginView = styled((props: ViewProps) => (
  <View {...props} />
))`
  flex: 1;
  align-items: center;
  border-radius: ${(props) => props.theme.space.lg};
`;

export const AuthInput = styled((props) => <TextInput {...props} />)`
  width: 250px;
  background-color: ${(props) => props.theme.colors.text.primary};
`;

export const SignInButton = styled((props) => <Button {...props} />)`
  width: 250px;
  padding: ${(props) => props.theme.space.xs};
`;

export const GoogleButton = styled((props) => <Button {...props} />)`
  width: 250px;
  padding: ${(props) => props.theme.space.xs};
`;

export const ErrorText = styled((props: TextProps) => <Text {...props} />)`
  align-self: flex-start;
  color: ${(props) => props.theme.colors.text.error};
`;
