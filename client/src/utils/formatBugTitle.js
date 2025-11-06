export function formatBugTitle(title) {
  if (!title || typeof title !== 'string') return '';
  return title.trim().replace(/\s+/g, ' ').toUpperCase();
}