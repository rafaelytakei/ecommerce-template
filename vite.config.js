import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Pages(),
    Layouts(),
    Components({
      dts: true,
      resolvers: [IconsResolver()],
      directoryAsNamespace: true,
    }),
    AutoImport({
      include: [
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true,
      },
    }),
    Icons(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '~', replacement: path.resolve(__dirname, './src') },
    ],
  },
  server: {
    fs: {
      allow: ['.'],
    },
  },
})
