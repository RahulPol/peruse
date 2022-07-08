import { View, ViewProps } from 'react-native';
import { useTheme } from 'styled-components';

const StyledView = (props: ViewProps) => {
  const { colors } = useTheme();

  return (
    <View
      testID="test-styled-view"
      style={{ backgroundColor: colors.bg.primary, flex: 1 }}
      {...props}
    />
  );
};

export default StyledView;
