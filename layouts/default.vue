<template>
  <v-app dark ref="app">
    <app-nav :drawer="drawer" @show_drawer="show_drawer" :nav_list="nav_list" :lang="lang" />
    <app-header @show_drawer="show_drawer" :nav_list="nav_list" :lang="lang" />
    <div class="background"></div>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <welcome-screen v-if="welcome_screen" @hide_screen="hide_screen" />
    <app-keyboard class="keyboard__icons d-none d-sm-flex" />
    <app-footer />
    <client-only>
      <cursor-fx color="#fff" color-hover="#fff" />
    </client-only>
    <app-modal />
  </v-app>
</template>

<script>
import appFooter from "~/components/_footer";
import appNav from "~/components/_navigation";
import appHeader from "~/components/_header";
import welcomeScreen from "~/components/welcome_screen";
import appModal from "~/components/modal";
import appKeyboard from "~/components/keyboard";

import detect_user_lang from "~/library/detect_user_lang";
import nav_arrow_keys from "~/library/navigation_arrow_keys";

import { mapState } from "vuex";
export default {
  components: {
    appFooter,
    appNav,
    appHeader,
    welcomeScreen,
    appModal,
    appKeyboard
  },
  head() {
    return {
      bodyAttrs: {
        class: this.welcome_screen ? "stop-scrolling" : ""
      },
      htmlAttrs: {
        class: this.$store.getters["shared/welcome_screen"]
          ? "stop-scrolling"
          : ""
      }
    };
  },
  data() {
    return {
      list_en: [
        { name: "home", path: "/", icon: "mdi-home" },
        { name: "about", path: "/about", icon: "mdi-information" },
        { name: "contacts", path: "/contacts", icon: "mdi-account" }
      ],
      list_ru: [
        { name: "главная", path: "/", icon: "mdi-home" },
        { name: "информация", path: "/about", icon: "mdi-information" },
        { name: "контакты", path: "/contacts", icon: "mdi-account" }
      ],
      welcome_screen: false,
      drawer: false
    };
  },
  methods: {
    show_drawer(val) {
      this.drawer = val;
    },
    hide_screen() {
      this.welcome_screen = false;
    }
  },
  computed: {
    ...mapState("shared", ["lang"]),
    nav_list() {
      return this.lang === "ru" ? this.list_ru : this.list_en;
    }
  },
  mounted() {
    this.$store.dispatch("shared/lang", detect_user_lang());
    nav_arrow_keys(this.nav_list, this.$router);
  }
};
</script>

<style lang="sass">
*
  cursor: none !important
body
  cursor: none
.card
  color: black
section
  width: 100%
.stop-scrolling
  height: 100%
  overflow: hidden

.keyboard__icons
  position: fixed
  right: 20px
  bottom: 50px

#cursor-fx
  z-index: 9999
  .cursor-fx__inner__outside
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ffdd1b,0 0 35px #ffdd1b, 0 0 40px #ffdd1b, 0 0 50px #ffdd1b, 0 0 75px #ffdd1b
    width: 84px
    height: 84px
  .cursor-fx__inner__inside
    border: 1px solid #1A237E

.background
  min-height: 100%
  min-width: 100%
  overflow: hidden
  background-image: url("~assets/background.jpeg")
  background-repeat: no-repeat
  background-position: center center
  background-size: cover
  position: fixed
</style>
