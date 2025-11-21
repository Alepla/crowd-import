export default {
  '*.{ts,tsx}': [
    'eslint --fix --max-warnings 0',
    () => 'tsc --noEmit',
  ],
};
