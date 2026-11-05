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
        /^@antdv-next\/icons/,
        '@antdv-vue/pro-provider',
        '@antdv-vue/pro-utils',
        /^@v-c\/util/,
        /^antdv-next/,
        /^@antdv-next\/cssinjs/,
        '@ant-design/fast-color',
        '@antdv-vue/pro-card',
        '@antdv-vue/pro-table',
      ],
    },
    emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',
      name: 'ProListy',
      fileName: () => 'pro-listy.esm.js',
      formats: ['es'],
    },
  },
})
