# CakePHP Documentation Skeleton

A [VitePress](https://vitepress.dev/) based documentation skeleton for creating CakePHP branded documentation sites.

## Features

- 🎨 CakePHP branded theme and styling
- ⚙️ Easy configuration overrides

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run docs:dev
```

The documentation will be available at `http://localhost:5173`

### Building for Production

Build the static site:

```bash
npm run docs:build
```

Preview the production build:

```bash
npm run docs:preview
```

## Configuration

### Default Configuration

The default VitePress configuration is located in `.vitepress/config.js`. This file contains all the base settings for your documentation site.

For detailed information about VitePress configuration options, please refer to the [VitePress Configuration Reference](https://vitepress.dev/reference/site-config).

### Custom Overrides

To customize the configuration without modifying the core files:

1. Copy `config.default.js` to `config.js` in the project root
2. Add your configuration overrides to the exported object
3. Your overrides will be deep merged with the default configuration

**Example** (`config.js`):

```javascript
export default {
  title: 'My Plugin Documentation',
  themeConfig: {
    sidebar: {
      '/': [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide' }
      ]
    }
  }
}
```

## Writing Documentation

### Content Location

All markdown documentation files should be placed in the `docs/` directory.

## Project Structure

```
.
├── .vitepress/           # VitePress configuration
│   ├── config.js         # Main VitePress config (defaults)
│   ├── utils.js          # Utility functions
│   ├── theme/            # Custom theme components
│   └── plugins/          # Markdown-it plugins
├── docs/                 # Documentation content (markdown files)
├── config.js             # Your configuration overrides (create from config.default.js)
└── config.default.js     # Template for configuration overrides
```

## Linting

Lint your configuration and scripts:

```bash
npm run lint
```

Auto-fix linting issues:

```bash
npm run lint:fix
```

## License

Licensed under The MIT License. For full copyright and license information, please see the [LICENSE](LICENSE) file.

## About CakePHP

CakePHP is a rapid development framework for PHP which uses commonly known design patterns like Associative Data Mapping, Front Controller, and MVC. Learn more at [https://cakephp.org](https://cakephp.org)
