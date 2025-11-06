function validateBugInput({ title, description }) {
  if (!title || typeof title !== 'string') return false;
  if (!description || typeof description !== 'string') return false;
  return true;
}

module.exports = validateBugInput;