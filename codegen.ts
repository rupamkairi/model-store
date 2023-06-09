import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://model-store.saleor.cloud/graphql',
  documents: 'src/**/*.tsx',
  generates: {
    'src/graphql': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
