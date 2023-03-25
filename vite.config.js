import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'SvgPathCommand',
      fileName: (format) => `svg-path-command.${format}.js`,
    },
  },
})
