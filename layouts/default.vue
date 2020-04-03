<template>
  <v-app dark>
    <app-nav />
    <app-header />

    <v-content class="main__content">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <welcome-screen v-if="$store.getters['shared/welcome_screen']" />
    <app-footer />
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

<style lang="scss">
.main__content {
  background: url("~assets/background.jpeg") center center / cover no-repeat;
}

// @font-face {
//   font-family: "BlenderPro-Book";
//   src: local("BlenderPro-Book"),
//     url("https://nomail.com.ua/files/woff/335787aa6f57d71cabe8eb5dc89c6d6b.woff")
//       format("woff");
// }
</style>
