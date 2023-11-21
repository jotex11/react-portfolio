import { defineConfig } from 'vite'
import react from '@vite/plugin-react'

export default {
    root: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: 'index.html',
        },
    },
    server: {
        port: 3002,
        open: true,
    },
};