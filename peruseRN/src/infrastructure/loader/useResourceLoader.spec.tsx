import { renderHook } from '@testing-library/react-native';

import { useResourceLoader } from './useResourceLoader';

describe('useResourceLoader', () => {
  it('should load resources', () => {
    const { result } = renderHook(() => useResourceLoader());

    console.log(result);
  });
});
