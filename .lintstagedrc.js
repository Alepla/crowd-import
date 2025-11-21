export default {
  '*.{ts,tsx}': [
    'npx eslint --fix --max-warnings 0',
    () => 'npx tsc --noEmit',
  ],
};
