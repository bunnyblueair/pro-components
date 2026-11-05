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
        /^antdv-next/,
        /^@v-c\/util/,
        '@antdv-next/icons',
        /^@antdv-next\/cssinjs/,
        '@antdv-vue/pro-listy',
        '@antdv-vue/pro-provider',
        '@antdv-vue/pro-utils',
        '@antdv-vue/route-utils',
      ],
    },
    emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',
      name: 'ProLayout',
      fileName: () => 'pro-layout.esm.js',
      formats: ['es'],
    },
  },
})
