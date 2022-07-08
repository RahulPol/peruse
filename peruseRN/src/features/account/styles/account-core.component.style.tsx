import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';
import styled from 'styled-components/native';

export const AccountCoreView = styled((props: ViewProps) => (
  <View {...props} />
))`
  flex: 1;
`;

export const ButtonContainerView = styled((props: ViewProps) => (
  <View {...props} />
))`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
`;

export const ActionButton = styled((props: TouchableOpacityProps) => (
  <TouchableOpacity {...props} />
))`
  margin-top: ${(props) => props.theme.space.lg};
`;

export const ActionText = styled((props: TextProps) => <Text {...props} />)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

export const FormContainerView = styled((props: ViewProps) => (
  <View {...props} />
))`
  flex: 4;
  align-items: center;
  justify-content: center;
`;
