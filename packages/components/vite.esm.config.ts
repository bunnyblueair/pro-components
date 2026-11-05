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
        /^dayjs/,
        'swrv',
        'es-toolkit',
        /^@antdv-next\/cssinjs/,
        '@antdv-next/icons',
        '@v-c/resize-observer',
        '@antdv-vue/pro-card',
        '@antdv-vue/pro-field',
        '@antdv-vue/pro-form',
        '@antdv-vue/pro-layout',
        '@antdv-vue/pro-listy',
        '@antdv-vue/pro-provider',
        '@antdv-vue/pro-table',
        '@antdv-vue/pro-utils',
        '@antdv-vue/pro-descriptions',
        '@antdv-vue/pro-skeleton',
        '@antdv-vue/route-utils',
        '@v-c/virtual-list',
        '@dnd-kit/dom',
        '@dnd-kit/helpers',
        '@dnd-kit/collision',
        /^@dnd-kit\/vue/,
        /^@dnd-kit\/abstract/,
        '@ant-design/colors',
      ],
    },
    emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',
      name: 'ProComponents',
      fileName: () => 'pro-components.esm.js',
      formats: ['es'],
    },
  },
})
