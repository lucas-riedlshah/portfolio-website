import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import markdown from 'vite-plugin-md'
import prism from 'markdown-it-prism'
import anchor from 'markdown-it-anchor'
import container from "markdown-it-container";
import mila from 'markdown-it-link-attributes'
import { RouteRecordRaw } from 'vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    markdown({
      markdownItOptions: {
        linkify: true,
      },
      markdownItUses: [
        prism, 
        [anchor, { permalink: anchor.permalink.headerLink() }],
        [container, 'full-width'],
        [mila, {
          pattern: /^https?:\/\//,
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        }]
      ],
      markdownItSetup(md) {
        md.linkify.set({ fuzzyLink: true });
        md.linkify.tlds(['nz', 'dev', 'au', 'tech', 'app'], true);
      },
      wrapperComponent: 'MarkdownWrapper'
    }),
    pages({
      dirs: ['src/views'],
      extensions: ['vue', 'md'],
      extendRoute(route: RouteRecordRaw, _parent) {
        if (route.path.startsWith("/projects/")) {
          if (!route.meta) route.meta = {}
          if (!route.meta.tags) route.meta.tags = new Array<string>();
          if (!(<string[]>route.meta.tags).includes("Projects")) (<string[]>route.meta.tags).unshift("Projects")
          route.meta.showInSearch = true
        }
        if (route.path.startsWith("/work/")) {
          if (!route.meta) route.meta = {}
          if (!route.meta.tags) route.meta.tags = new Array<string>();
          if (!(<string[]>route.meta.tags).includes("Work")) (<string[]>route.meta.tags).unshift("Work")
          route.meta.showInSearch = true
        }
      },
    }), 
    layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'Default',
    }),
  ]
})
