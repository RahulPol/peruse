import { render, screen } from '@testing-library/react-native';

import StyledView from './StyledView';

jest.mock('react-native-paper', () => ({
  ...jest.requireActual('react-native-paper'),
  useTheme: jest
    .fn()
    .mockImplementation(() => ({ colors: { background: '#000000' } })),
}));

describe('<StyledView>', () => {
  it('should render default element', () => {
    render(<StyledView />);
    const element = screen.getByTestId('test-styled-view');

    expect(element).toBeDefined();
  });
  it('should be called with props passed', () => {
    render(<StyledView focusable />);
    const element = screen.getByTestId('test-styled-view');

    expect(element.props.focusable).toBeTruthy();
  });
  it('should be called with background color', () => {
    render(<StyledView />);
    const element = screen.getByTestId('test-styled-view');

    expect(element.props.style.backgroundColor).toBe('#000000');
  });
});
