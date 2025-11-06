const validateBugInput = require('../../src/utils/validateBugInput');

describe('validateBugInput', () => {
  it('should return false if title is missing', () => {
    const result = validateBugInput({ description: 'Bug desc' });
    expect(result).toBe(false);
  });

  it('should return false if description is missing', () => {
    const result = validateBugInput({ title: 'Bug title' });
    expect(result).toBe(false);
  });

  it('should return false if title is not a string', () => {
    const result = validateBugInput({ title: 123, description: 'Bug desc' });
    expect(result).toBe(false);
  });

  it('should return false if description is not a string', () => {
    const result = validateBugInput({ title: 'Bug title', description: {} });
    expect(result).toBe(false);
  });

  it('should return true if both title and description are valid strings', () => {
    const result = validateBugInput({ title: 'Bug title', description: 'Bug desc' });
    expect(result).toBe(true);
  });
});