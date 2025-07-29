import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import config from '@repo/eslint-config/react';

export default tseslint.config([
  ...config,
  {
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactRefresh.configs.vite.rules,
    },
  },
]);
