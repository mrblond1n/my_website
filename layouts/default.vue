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
    <!-- <app-cursor :option="{width: 40, height: 40, outsideCircle: true}" /> -->
    <app-cursor
      :targets="['img', 'a', 'button', 'your-hover-class']"
      :circleColor="'#fff'"
      :circleColorHover="'#2f2f2f'"
      :dotColor="'#fff'"
      :dotColorHover="'lightgray'"
      :hoverSize="1.8"
    />
  </v-app>
</template>

<script>
import appFooter from "~/components/_footer";
import appNav from "~/components/_navigation";
import appHeader from "~/components/_header";
import welcomeScreen from "~/components/welcome_screen";
import appCursor from "~/components/custom_cursor";
export default {
  components: {
    appFooter,
    appNav,
    appHeader,
    welcomeScreen,
    appCursor
  },
  data() {
    return { show_welcome_screen: true };
  },
  computed: {
    drawer() {
      return this.$store.getters["shared/drawer"];
    }
  },
  mounted() {
    this.$refs.app.$el.addEventListener("mousemove", e => {
      this.$store.dispatch("shared/cursor_option", {
        top: e.pageY,
        left: e.pageX
      });
    });
    this.$refs.app.$el.addEventListener("click", e => {
      this.$store.dispatch("shared/cursor_option", {
        clicked: true
      });
      setTimeout(() => {
        this.$store.dispatch("shared/cursor_option", {
          clicked: false
        });
      }, 500);
      this.$store.getters["shared/cursor_option"];
    });
  }
};
</script>

<style lang="sass">
body
  cursor: none
.main__content
  background: url("~assets/background.jpeg") center center / cover no-repeat
</style>
