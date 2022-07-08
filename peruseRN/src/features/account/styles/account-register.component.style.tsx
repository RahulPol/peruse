import { Text, TextProps, View, ViewProps } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

export const AccountRegisterView = styled((props: ViewProps) => (
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

export const SignUpButton = styled((props) => <Button {...props} />)`
  width: 250px;
  padding: ${(props) => props.theme.space.xs};
`;

export const ErrorText = styled((props: TextProps) => <Text {...props} />)`
  align-self: flex-start;
  color: ${(props) => props.theme.colors.text.error};
`;
