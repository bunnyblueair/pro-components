import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import { AntdvNextResolver } from '@antdv-next/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import dayjsPlugin from 'vite-plugin-dayjs'
import inspect from 'vite-plugin-inspect'
import { tsxResolveTypes } from 'vite-plugin-tsx-resolve-types'
import { mdPlugin } from './plugins/markdown/index.ts'

import { postcssIsolateStyles } from './plugins/markdown/isolateStyles.ts'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))
const docsBuildTarget = ['chrome111', 'edge111', 'firefox114', 'safari16.4', 'ios16.4'] as const

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      dayjsPlugin(),
      mdPlugin(),
      tsxResolveTypes({
        defaultPropsToUndefined: ['Boolean'],
      }),
      vueJsx({ mergeProps: true }),
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      inspect(),
      autoImport({
        dirs: ['./src/stores'],
        dts: 'types/auto-imports.d.ts',
        imports: ['vue', 'vue-router', '@vueuse/core', 'pinia', 'vue-i18n'],
      }),
      components({
        dirs: [],
        dts: 'types/components.d.ts',
        resolvers: [AntdvNextResolver()],
      }),
      Unocss(),
    // prefetch(),
    ],
    optimizeDeps: {
      exclude: [
        '@v-c/segmented',
        '@v-c/trigger',
        '@v-c/tooltip',
        '@v-c/util',
        '@v-c/menu',
        '@v-c/tour',
        '@v-c/input',
        '@v-c/listy',
        '@v-c/input-number',
        '@v-c/textarea',
        '@v-c/select',
        '@v-c/picker',
        '@v-c/drawer',
        '@v-c/dialog',
      ],
      include: ['@antdv-next/icons', '@antdv-next/icons/all', '@ant-design/icons-svg/es/asn/*'],
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./types', import.meta.url)),
        '@antdv-vue/pro-layout': path.resolve(baseUrl, '../packages/layout/src'),
        '@antdv-vue/pro-card': path.resolve(baseUrl, '../packages/card/src'),
        '@antdv-vue/pro-field': path.resolve(baseUrl, '../packages/field/src'),
        '@antdv-vue/pro-form': path.resolve(baseUrl, '../packages/form/src'),
        '@antdv-vue/pro-list': path.resolve(baseUrl, '../packages/list/src'),
        '@antdv-vue/pro-table': path.resolve(baseUrl, '../packages/table/src'),
        '@antdv-vue/pro-listy': path.resolve(baseUrl, '../packages/listy/src'),
        '@antdv-vue/pro-provider': path.resolve(baseUrl, '../packages/provider/src'),
        '@antdv-vue/pro-components': path.resolve(baseUrl, '../packages/components/src'),
        '@antdv-vue/pro-utils': path.resolve(baseUrl, '../packages/utils/src'),
        '@antdv-vue/route-utils': path.resolve(baseUrl, '../packages/route-utils/src'),
        '@antdv-vue/pro-skeleton': path.resolve(baseUrl, '../packages/skeleton/src'),
        '@antdv-vue/pro-descriptions': path.resolve(baseUrl, '../packages/descriptions/src'),
      },
    },
    css: {
      postcss: {
        plugins: [postcssIsolateStyles()],
      },
    },
    build: {
    // Lock the docs site target to Vite's current baseline so future browser
    // version bumps do not leak unsupported targets like `chrome142` into the build.
      target: [...docsBuildTarget],
      cssTarget: [...docsBuildTarget],
      sourcemap: false,
    },
  }
})
