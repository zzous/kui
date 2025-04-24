import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { fileURLToPath, URL } from 'node:url';
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const _buildOptions = (mode === 'prod') ? {
      sourcemap: true,
      minify: 'terser',
      terserOptions: {
          compress: {
              drop_console: true,
              drop_debugger: true
          }
      }
  } : {};
return{
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') })
  ],
  resolve: {
      alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
      }
  },
  server: {
      proxy: {
          '^/api': {
              target: 'http://localhost:8080',
              changeOrigin: true,
              secure: false,
              rewrite: path => path.replace(/^\/api/, '')
          }
      }
  },
}
build: _buildOptions
})
