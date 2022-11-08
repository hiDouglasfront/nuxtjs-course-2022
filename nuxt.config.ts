// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            "meta": [
                {
                    "name": "viewport",
                    "content": "width=device-width, initial-scale=1"
                },
                {
                    "charset": "utf-8"
                }
            ],
            title: "Nuxt 3 - Start",
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },

    modules: [
        '@nuxtjs/tailwindcss'
    ]
})
