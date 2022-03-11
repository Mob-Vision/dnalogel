import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from "path";
// import alias from '@rollup/plugin-alias'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svelte()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'dnalogel',
      // formats: ['es'],
      fileName: (format) => `dnalogel.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'three', '@realsee/five', '@realsee/five/line', 'three/examples/jsm/renderers/CSS3DRenderer'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          // five: 'FiveSDK',
          '@realsee/five': 'five',
          '@realsee/five/line': 'FiveSDK_Line',
          three: 'THREE',
          'three/examples/jsm/renderers/CSS3DRenderer': 'CSS3DRenderer'
        }
      }
    },
    minify: 'terser',
    outDir: 'dist',
    // watch: {}
  }
})


