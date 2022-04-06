import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
const {resolve} = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, 'src')
      },
      {
        find: "types",
        replacement: resolve(__dirname, 'src/types')
      },
      {
        find: "components",
        replacement: resolve(__dirname, 'src/components')
      },
      {
        find: "utils",
        replacement: resolve(__dirname, 'src/utils')
      },
      {
        find: "assets",
        replacement: resolve(__dirname, 'src/assets')
      }
    ]
  },
  base: './', // 打包路径
  server: {
    port: 4000, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true // 允许跨域
  }
})
