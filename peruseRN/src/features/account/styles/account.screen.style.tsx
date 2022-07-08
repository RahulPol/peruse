import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import { View, ViewProps } from 'react-native';
import { Text } from 'react-native-paper';
import styled from 'styled-components/native';

export const AccountView = styled((props: ViewProps) => <View {...props} />)`
  flex: 1;
`;

export const AccountCover = styled((props: LinearGradientProps) => (
  <LinearGradient {...props} />
))`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const HeaderContainer = styled((props: ViewProps) => (
  <View {...props} />
))`
  flex: 1.5;
  align-items: center;
  justify-content: flex-end;
`;

export const AppTitle = styled((props) => <Text {...props} />)`
  margin-bottom: ${(props) => props.theme.space.lg};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const BodyContainer = styled((props: ViewProps) => <View {...props} />)`
  flex: 3.5;
  border-radius: ${(props) => props.theme.space.sm}
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: ${(props) => props.theme.space.lg}
  elevation: ${(props) => props.theme.elevations.lg}
`;

export const FooterContainer = styled((props: ViewProps) => (
  <View {...props} />
))`
  flex: 0.5;
`;
