import { URL, fileURLToPath} from 'node:url'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
    plugins: [vue(), svgLoader()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@ICONS": fileURLToPath(new URL("./src/07-shared/assets/icons", import.meta.url)),
        }
    }
})