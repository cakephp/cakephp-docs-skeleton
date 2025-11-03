import { defineConfig } from 'vitepress'
import { versionReplacer } from './plugins/version-replacer.js'
import { deepMerge, loadConfigOverrides } from './utils.js'

const defaultConfig = {
  srcDir: 'docs',
  title: 'CakePHP',
  description: 'CakePHP Documentation - The rapid development PHP framework',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'CakePHP' }],
    ['link', { rel: 'manifest', href: '/favicon/site.webmanifest' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap', rel: 'stylesheet' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap', rel: 'stylesheet'}],
  ],
  themeConfig: {
    logo: '/logo.svg',
    outline: {
      level: [2, 3],
    },
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © Cake Software Foundation, Inc. All rights reserved.'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framework': ['vue']
        }
      }
    }
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(versionReplacer)
    }
  },
  locales: {}
}

const overrides = await loadConfigOverrides(import.meta.url)
export default defineConfig(deepMerge(defaultConfig, overrides))
