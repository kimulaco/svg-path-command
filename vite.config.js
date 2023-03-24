const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'SvgPathCommandParser',
      fileName: (format) => `svg-path-command-parser.${format}.js`,
    },
  },
})
