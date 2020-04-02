<template>
  <v-app dark>
    <app-nav />
    <app-header />

    <v-content class="main__content">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <app-footer />
  </v-app>
</template>

<script>
import appFooter from "~/components/_footer";
import appNav from "~/components/_navigation";
import appHeader from "~/components/_header";
export default {
  components: {
    appFooter,
    appNav,
    appHeader
  },
  data() {
    return {
      //
    };
  },
  computed: {
    drawer() {
      return this.$store.getters["shared/drawer"];
    }
  }
};
</script>

<style>
.main__content {
  background: url("~assets/background.jpeg") center center / cover no-repeat;
}
</style>
