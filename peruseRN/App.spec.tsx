import { render } from '@testing-library/react-native';

import App from './App';

describe('<App>', () => {
  it('has one child', () => {
    const welcomeText = 'Welcome to Expo';

    const { getByText, toJSON } = render(<App />);

    const textElement = getByText(welcomeText);
    expect(textElement.props.children).toBe(welcomeText);
    expect(toJSON()).toMatchSnapshot();
  });
});
