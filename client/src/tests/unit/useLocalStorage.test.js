import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '../../hooks/useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => localStorage.clear());

  it('should initialize with default value', () => {
    const { result } = renderHook(() => useLocalStorage('theme', 'light'));
    expect(result.current[0]).toBe('light');
  });

  it('should update and persist value', () => {
    const { result } = renderHook(() => useLocalStorage('theme', 'light'));

    act(() => result.current[1]('dark'));
    expect(result.current[0]).toBe('dark');
    expect(JSON.parse(localStorage.getItem('theme'))).toBe('dark');
  });
});