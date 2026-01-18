export const calculateReadingTime = (text) => {
  if (!text) return 1;
  const stripped = text.replace(/<[^>]+>/g, ''); // strip HTML tags, if any.
  const words = stripped.trim().split(/\s+/).length; // split by whitespaces.
  return Math.max(1, Math.ceil(words / 200));
};
