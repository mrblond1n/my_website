<template>
  <v-app dark ref="app">
    <app-nav />
    <app-header />
    <v-content class="main__content">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <welcome-screen v-if="$store.getters['shared/welcome_screen']" />
    <app-footer />
    <client-only>
      <cursor-fx color="#fff" color-hover="#fff" />
    </client-only>
  </v-app>
</template>

<script>
import appFooter from "~/components/_footer";
import appNav from "~/components/_navigation";
import appHeader from "~/components/_header";
import welcomeScreen from "~/components/welcome_screen";

export default {
  components: {
    appFooter,
    appNav,
    appHeader,
    welcomeScreen
  },
  data() {
    return { show_welcome_screen: true };
  },
  computed: {
    drawer() {
      return this.$store.getters["shared/drawer"];
    }
  }
};
</script>

<style lang="sass">
*
  cursor: none !important
body
  cursor: none
.main__content
  background: url("~assets/background.jpeg") center center / cover no-repeat
  background-attachment: fixed
#cursor-fx
  z-index: 9999
  .cursor-fx__inner__outside
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ffdd1b,0 0 35px #ffdd1b, 0 0 40px #ffdd1b, 0 0 50px #ffdd1b, 0 0 75px #ffdd1b
    width: 84px
    height: 84px
</style>
