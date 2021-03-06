import colors from "vuetify/es5/util/colors";
require('dotenv').config();

export default {
  mode: "universal",
  pageTransition: {
    name: "page",
    mode: "out-in",
    enterActiveClass: "animated fadeIn",
    leaveActiveClass: "animated fadeOut",
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + 'website',
    title: 'Nikita Kirdiapin',
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href: "https://fonts.googleapis.com/css2?family=Raleway&display=swap",
        rel: "stylesheet",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["aos/dist/aos.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/vue-typed", ssr: false },
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/cursor-fx", ssr: false },
    { src: "~/plugins/vue-pdf.js", ssr: false },
    { src: "~/plugins/vuetify", ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    "@neneos/nuxt-animate.css",
    // Doc axios.nuxtjs.org/
    '@nuxtjs/axios',
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.output.globalObject = "this";
      config.module.rules.push({
        test: /\.pdf$/,
        loader: "url-loader",
      });
    },
  },
};
