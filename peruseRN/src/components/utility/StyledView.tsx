import { View, ViewProps } from 'react-native';
import { useTheme } from 'react-native-paper';

const StyledView = (props: ViewProps) => {
  const { colors } = useTheme();

  return (
    <View
      testID="test-styled-view"
      style={{ backgroundColor: colors.background, flex: 1 }}
      {...props}
    />
  );
};

export default StyledView;
