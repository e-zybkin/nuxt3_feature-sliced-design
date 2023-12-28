import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    devtools: { enabled: true },
    typescript: {
        strict: true,
    },
    runtimeConfig: {
        ssr: true,
        public: {
            apiBase: process.env['API_BASE'],
        },
    },
    vue: {
        defineModel: true,
        propsDestructure: true,
    },
    components: [
        {
            path: 'shared',
            extensions: ['.vue'],
            prefix: 'Shared',
        },
        {
            path: 'features',
            extensions: ['.vue'],
            prefix: 'Feature',
        },
        {
            path: 'widgets',
            extensions: ['.vue'],
            prefix: 'Widget',
        },
        {
            path: 'entities',
            extensions: ['.vue'],
            prefix: 'Entity',
        },
    ],
    modules: ['@pinia/nuxt'],
    alias: {
        '@styles': './assets/styles',
    },
    imports: {
        dirs: [
            'shared/**/*.ts',
            'features/**/*.ts',
            'widgets/**/*.ts',
            'entities/**/*.ts',
        ],
    },
    plugins: [{ src: 'node_modules/nuxtjs-phaser', mode: 'client' }],
})
