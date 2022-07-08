import 'jest-styled-components';
import { render } from '@testing-library/react-native';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';

import { Spacer } from './spacer.component';

describe('<Spacer>', () => {
  const theme = {
    space: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '32px',
      xl: '64px',
    },
  };

  it('should have margin-top 8px when invalid variant passed', () => {
    const { toJSON } = render(
      <ThemeProvider theme={theme as DefaultTheme}>
        <Spacer variant="invalid.variant" />
      </ThemeProvider>
    );

    expect(toJSON()).toEqual(
      expect.objectContaining({
        type: 'View',
        props: { style: [{ marginTop: 8 }] },
        children: null,
      })
    );
  });

  it('should have margin-top 8px for TopSmall variant', () => {
    const { toJSON } = render(
      <ThemeProvider theme={theme as DefaultTheme}>
        <Spacer variant="top.small" />
      </ThemeProvider>
    );

    expect(toJSON()).toEqual(
      expect.objectContaining({
        type: 'View',
        props: { style: [{ marginTop: 8 }] },
        children: null,
      })
    );
  });

  it('should have margin-top 16px for TopMedium variant', () => {
    const { toJSON } = render(
      <ThemeProvider theme={theme as DefaultTheme}>
        <Spacer variant="top.medium" />
      </ThemeProvider>
    );

    expect(toJSON()).toEqual(
      expect.objectContaining({
        type: 'View',
        props: { style: [{ marginTop: 16 }] },
        children: null,
      })
    );
  });

  it('should have margin-top 32px for TopLarge variant', () => {
    const { toJSON } = render(
      <ThemeProvider theme={theme as DefaultTheme}>
        <Spacer variant="top.large" />
      </ThemeProvider>
    );

    expect(toJSON()).toEqual(
      expect.objectContaining({
        type: 'View',
        props: { style: [{ marginTop: 32 }] },
        children: null,
      })
    );
  });

  it('should have margin-left 8px for LeftSmall variant', () => {
    const { toJSON } = render(
      <ThemeProvider theme={theme as DefaultTheme}>
        <Spacer variant="left.small" />
      </ThemeProvider>
    );

    expect(toJSON()).toEqual(
      expect.objectContaining({
        type: 'View',
        props: { style: [{ marginLeft: 8 }] },
        children: null,
      })
    );
  });

  it('should have margin-left 16px for LeftMedium variant', () => {
    const { toJSON } = render(
      <ThemeProvider theme={theme as DefaultTheme}>
        <Spacer variant="left.medium" />
      </ThemeProvider>
    );

    expect(toJSON()).toEqual(
      expect.objectContaining({
        type: 'View',
        props: { style: [{ marginLeft: 16 }] },
        children: null,
      })
    );
  });

  it('should have margin-left 32px for LeftLarge variant', () => {
    const { toJSON } = render(
      <ThemeProvider theme={theme as DefaultTheme}>
        <Spacer variant="left.large" />
      </ThemeProvider>
    );

    expect(toJSON()).toEqual(
      expect.objectContaining({
        type: 'View',
        props: { style: [{ marginLeft: 32 }] },
        children: null,
      })
    );
  });

  it('should have margin-left 8px for BottomSmall variant', () => {
    const { toJSON } = render(
      <ThemeProvider theme={theme as DefaultTheme}>
        <Spacer variant="bottom.small" />
      </ThemeProvider>
    );

    expect(toJSON()).toEqual(
      expect.objectContaining({
        type: 'View',
        props: { style: [{ marginBottom: 8 }] },
        children: null,
      })
    );
  });
});
