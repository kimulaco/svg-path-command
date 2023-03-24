import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'SvgPathCommandParser',
      fileName: (format) => `svg-path-command-parser.${format}.js`,
    },
  },
})
