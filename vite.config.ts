import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: true,
  },
  resolve: {
    alias: {
      // fix loading all icon chunks in dev mode
      // https://github.com/tabler/tabler-icons/issues/1233
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
    },
  }
});
