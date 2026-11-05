# @antdv-vue/pro-listy

Advanced list component for Pro Components, providing flexible list rendering with item and meta support.

## Installation

```bash
npm install @antdv-vue/pro-listy
# or
pnpm add @antdv-vue/pro-listy
```

## Peer Dependencies

- `vue` >= 3.5.30
- `antdv-next` >= 1.3.6

## Components

| Component | Description |
|-----------|-------------|
| `ProListy` | Main list component with advanced features |
| `ProListyItem` | Individual list item component |
| `ProListyItemMeta` | Item meta information (title, description, avatar, etc.) |

## Usage

```vue
<script setup lang="ts">
import { ProListy, ProListyItem, ProListyItemMeta } from '@antdv-vue/pro-listy'
</script>

<template>
  <ProListy>
    <ProListyItem>
      <ProListyItemMeta title="Item Title" description="Item description" />
    </ProListyItem>
  </ProListy>
</template>
```

## Dependencies

- `@antdv-vue/pro-provider` — Theme and configuration context

## License

[MIT](../../LICENSE)
