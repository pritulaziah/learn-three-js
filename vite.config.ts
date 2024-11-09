import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@constants': path.resolve(__dirname, './src/constants'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@classes': path.resolve(__dirname, './src/classes'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@components': path.resolve(__dirname, './src/components'),
      '@shaders': path.resolve(__dirname, './src/shaders'),
    },
  },
  plugins: [react(), glsl()],
  assetsInclude: ['**/*.gltf', '**/*.glb'],
})
