import { render, screen } from '@testing-library/react-native';

import StyledView from './StyledView';

jest.mock('react-native-paper', () => ({
  useTheme: jest
    .fn()
    .mockImplementation(() => ({ colors: { background: '#000000' } })),
}));

describe('<StyledView>', () => {
  it('should be called with background color', () => {
    render(<StyledView />);
    const element = screen.getByTestId('test-styled-view');

    expect(element.props.style.backgroundColor).toBe('#000000');
  });
});
