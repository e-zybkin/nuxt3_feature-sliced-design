// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    ssr: true,
},
vue: {
    defineModel: true,
    propsDestructure: true,
},
components: [
    {
        path: '~/shared',
        extensions: ['.vue'],
        pathPrefix: true,
        prefix: 'Shared',
    },
    {
        path: '~/features',
        extensions: ['.vue'],
        pathPrefix: true,
        prefix: 'Feature',
    },
    {
        path: '~/widgets',
        extensions: ['.vue'],
        pathPrefix: true,
        prefix: 'Widget',
    },
    {
        path: '~/entities',
        extensions: ['.vue'],
        pathPrefix: true,
        prefix: 'Entity',
    },
],
imports: {
    dirs: ['shared/**', 'features/**', 'widgets/**', 'entities/**'],
},
modules: ['@pinia/nuxt'],
})
