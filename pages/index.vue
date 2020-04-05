<template>
  <v-layout column justify-center align-center>
    <section>
      <v-layout column align-center justify-space-around>
        <div class="wrapper my-5">
          <div
            class="text text-center"
            :class="{active: !$store.getters['shared/welcome_screen']}"
          >Made with NUXT JS</div>
        </div>
        <v-card max-width="500px" elevation="12" class="my-5">
          <v-img
            :src="require(`~/assets/${info.src}`)"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
            width="100%"
          ></v-img>
          <v-card-title class="display-1 text-uppercase">{{info.name}}</v-card-title>
          <v-card-subtitle>{{info.position}}</v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon color="warning" @click="show_modal">
              <v-icon>mdi-file-account</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </section>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      card: {
        title: "Pre-fab homes",
        src: "photo.jpg"
      }
    };
  },
  computed: {
    lang() {
      return this.$store.getters["shared/lang"];
    },
    info() {
      return this.$store.getters[`info/home_${this.lang}`];
    }
  },
  methods: {
    show_modal() {
      this.$store.dispatch("shared/modal", true);
    }
  }
};
</script>

<style lang="sass">
@import url(~/assets/neon.scss)
.text
  -moz-user-select: none
  -khtml-user-select: none
  user-select: none
</style>