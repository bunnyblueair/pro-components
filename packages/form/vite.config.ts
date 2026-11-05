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
        /^@antdv-next\/icons/,
        '@antdv-vue/pro-provider',
        '@antdv-vue/pro-utils',
        '@antdv-vue/pro-field',
        /^@v-c\/util/,
        /^antdv-next/,
        /^@antdv-next\/cssinjs/,
        '@v-c/resize-observer',
      ],
    },
    emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',
      name: 'ProForm',
      fileName: () => 'pro-form.esm.js',
      formats: ['es'],
    },
  },
})
