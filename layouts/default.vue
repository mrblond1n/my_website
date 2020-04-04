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
</style>
