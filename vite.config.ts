import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import markdown from 'vite-plugin-md'
import prism from 'markdown-it-prism'
import anchor from 'markdown-it-anchor'
import container from "markdown-it-container";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    markdown({
      markdownItUses: [
        prism, 
        [anchor, { permalink: anchor.permalink.headerLink() }],
        [container, 'full-width'],
      ]
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
