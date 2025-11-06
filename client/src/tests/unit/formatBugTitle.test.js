import { formatBugTitle } from '../../utils/formatBugTitle';

describe('formatBugTitle', () => {
  it('formats a normal title correctly', () => {
    expect(formatBugTitle('  login bug  ')).toBe('LOGIN BUG');
  });

  it('handles multiple spaces', () => {
    expect(formatBugTitle('bug     with    spacing')).toBe('BUG WITH SPACING');
  });

  it('returns empty string for invalid input', () => {
    expect(formatBugTitle(null)).toBe('');
  });
});