# @antdv-vue/pro-components

Meta package that bundles all Pro Components into a single import for convenience.

## Installation

```bash
npm install @antdv-vue/pro-components
# or
pnpm add @antdv-vue/pro-components
```

## Peer Dependencies

- `vue` >= 3.5.30
- `antdv-next` >= 1.3.6

## Included Packages

This package re-exports everything from the following packages:

| Package | Description |
|---------|-------------|
| `@antdv-vue/pro-layout` | Advanced page layout components |
| `@antdv-vue/pro-table` | Enhanced table with search and toolbar |
| `@antdv-vue/pro-form` | Advanced form components |
| `@antdv-vue/pro-card` | Card and statistic components |
| `@antdv-vue/pro-field` | Rich field rendering components |
| `@antdv-vue/pro-listy` | Advanced list component |
| `@antdv-vue/pro-provider` | Global config provider and i18n |
| `@antdv-vue/pro-utils` | Shared utilities and composables |

## Usage

Instead of importing from individual packages:

```ts
// Import from individual packages
import { ProLayout } from '@antdv-vue/pro-layout'
import { ProTable } from '@antdv-vue/pro-table'
import { ProForm, ProFormText } from '@antdv-vue/pro-form'
```

Import everything from this meta package:

```ts
import { ProLayout, ProTable, ProForm, ProFormText } from '@antdv-vue/pro-components'
```

### Quick Start

```vue
<script setup lang="ts">
import {
  ProLayout,
  PageContainer,
  ProTable,
  ProConfigProvider,
} from '@antdv-vue/pro-components'
</script>

<template>
  <ProConfigProvider>
    <ProLayout :route="route" title="Admin">
      <PageContainer title="Dashboard">
        <ProTable :columns="columns" :request="fetchData" />
      </PageContainer>
    </ProLayout>
  </ProConfigProvider>
</template>
```

## When to Use This Package

- **Use this meta package** when you need multiple Pro Components and want a single import source.
- **Use individual packages** when you only need one or two components and want to minimize bundle size (with tree-shaking, this meta package also works well).

## License

[MIT](../../LICENSE)
