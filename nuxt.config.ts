// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css", "assets/styles/main.scss"],
  build: {
    transpile: ['gsap'],
  },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
   
          link: [
            {
              rel: 'preconnect',
              href: 'https://fonts.googleapis.com'
            },
            { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" },
            {
              rel: 'preconnect',
              href: 'https://fonts.gstatic.com" crossorigin'
            },
            {
              rel:'stylesheet',
              href:'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500&family=Plus+Jakarta+Sans:wght@800&family=Roboto:wght@100;300;400;500;700;900&display=swap'
            }
          ]
        },
    }
})
