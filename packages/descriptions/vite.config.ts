import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import { tsxResolveTypes } from 'vite-plugin-tsx-resolve-types'

export default defineConfig({
  plugins: [
    tsxResolveTypes({
      defaultPropsToUndefined: ['Boolean'],
    }),
    vueJsx({
      mergeProps: true,
    }),
  ],
  build: {
    rolldownOptions: {
      external: [
        'vue',
        /^dayjs/,
        /^antdv-next/,
        /^@v-c\/util/,
        '@antdv-next/icons',
        /^@antdv-next\/cssinjs/,
        '@antdv-vue/pro-field',
        '@antdv-vue/pro-provider',
        '@antdv-vue/pro-utils',
        '@antdv-vue/pro-form',
        '@antdv-vue/pro-skeleton',
      ],
    },
    emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',
      name: 'ProDescriptions',
      fileName: () => 'pro-descriptions.esm.js',
      formats: ['es'],
    },
  },
})
