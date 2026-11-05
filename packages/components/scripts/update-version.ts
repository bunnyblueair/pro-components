import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const currentDir = dirname(fileURLToPath(import.meta.url))
const packageDir = resolve(currentDir, '..')
const packagesDir = resolve(packageDir, '..')

const packageNames = [
  '@antdv-vue/pro-card',
  '@antdv-vue/pro-components',
  '@antdv-vue/pro-descriptions',
  '@antdv-vue/pro-field',
  '@antdv-vue/pro-form',
  '@antdv-vue/pro-layout',
  '@antdv-vue/pro-listy',
  '@antdv-vue/pro-provider',
  '@antdv-vue/pro-skeleton',
  '@antdv-vue/pro-table',
  '@antdv-vue/pro-utils',
  '@antdv-vue/route-utils',
] as const

const packageDirMap: Record<(typeof packageNames)[number], string> = {
  '@antdv-vue/pro-card': 'card',
  '@antdv-vue/pro-components': 'components',
  '@antdv-vue/pro-descriptions': 'descriptions',
  '@antdv-vue/pro-field': 'field',
  '@antdv-vue/pro-form': 'form',
  '@antdv-vue/pro-layout': 'layout',
  '@antdv-vue/pro-listy': 'listy',
  '@antdv-vue/pro-provider': 'provider',
  '@antdv-vue/pro-skeleton': 'skeleton',
  '@antdv-vue/pro-table': 'table',
  '@antdv-vue/pro-utils': 'utils',
  '@antdv-vue/route-utils': 'route-utils',
}

function readPackageVersion(packageName: (typeof packageNames)[number]) {
  const packageJsonPath = resolve(packagesDir, packageDirMap[packageName], 'package.json')
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8')) as {
    version?: string
  }

  if (!packageJson.version)
    throw new Error(`${packageJsonPath} missing version`)

  return packageJson.version
}

const content = `export const version = {
${packageNames.map(packageName => `  '${packageName}': '${readPackageVersion(packageName)}',`).join('\n')}
}
`

writeFileSync(resolve(packageDir, 'src/version.ts'), content)
