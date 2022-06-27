import { act, renderHook } from '@testing-library/react-hooks';

import { useResourceLoader } from './useResourceLoader';

jest.mock('expo-font', () => ({
  loadAsync: jest
    .fn()
    .mockReturnValueOnce(Promise.resolve(true))
    .mockRejectedValueOnce(new Error('Failed to load'))
    .mockRejectedValueOnce('mock error'),
}));

jest.mock('expo-splash-screen', () => ({
  hideAsync: () => Promise.resolve(true),
  preventAutoHideAsync: () => Promise.resolve(true),
}));

describe('useResourceLoader', () => {
  it('should load fonts when mounted', async () => {
    const hook = renderHook(() => useResourceLoader());
    act(() => {
      hook.result.current.onLayoutRootView();
    });

    expect(hook.result.current.appIsReady).toBe(false);
    expect(hook.result.current.error).toBeFalsy();

    await hook.waitForNextUpdate();

    act(() => {
      hook.result.current.onLayoutRootView();
    });

    expect(hook.result.current.appIsReady).toBe(true);
    expect(hook.result.current.error).toBeFalsy();
  });

  it('should set error when fonts are not loaded', async () => {
    const hook = renderHook(() => useResourceLoader());

    expect(hook.result.current.appIsReady).toBe(false);
    expect(hook.result.current.error).toBeFalsy();

    await hook.waitForNextUpdate();

    expect(hook.result.current.appIsReady).toBe(true);
    expect(hook.result.current.error).toBeTruthy();
  });

  it('should set error to unexpected when fonts are not loaded with unknown error', async () => {
    const hook = renderHook(() => useResourceLoader());

    expect(hook.result.current.appIsReady).toBe(false);
    expect(hook.result.current.error).toBeFalsy();

    await hook.waitForNextUpdate();

    expect(hook.result.current.appIsReady).toBe(true);
    expect(hook.result.current.error).toBeTruthy();
    expect(hook.result.current.error).toBe('Unexpected error: mock error');
  });
});
