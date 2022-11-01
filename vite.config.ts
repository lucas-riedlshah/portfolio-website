import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import markdown from 'vite-plugin-vue-markdown'
import prism from 'markdown-it-prism'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    markdown({
      markdownItUses: [prism]
    }),
    pages({
      dirs: ['src/views'],
      extensions: ['vue', 'md'],
    }), 
    layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'Default',
    }),
  ]
})
