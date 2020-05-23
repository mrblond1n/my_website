<template>
  <v-layout column justify-center align-center>
    <div class="wrapper my-12">
      <h1 class="text text-center" :class="{active: true}">Made with NUXT JS</h1>
    </div>
    <section>
      <v-layout column align-center justify-space-around>
        <v-card max-width="300px" elevation="12" class="my-5">
          <v-img
            :src="require(`~/assets/${info.src}`)"
            :lazy-src="require(`~/assets/${info.src}`)"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
            width="100%"
          >
            <v-btn v-if="false" icon color="warning" @click="show_modal">
              <v-icon>mdi-file-account</v-icon>
            </v-btn>
          </v-img>
          <v-card-title class="display-1 text-uppercase text-break" v-text="info.name" />
          <v-card-subtitle v-text="info.position" />
        </v-card>
      </v-layout>
    </section>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      card: {
        title: "Pre-fab homes",
        src: "photo.jpg"
      },
      home_ru: {
        name: "Никита Кирдяпин",
        position: "Frontend developer - VueJs",
        src: "photo.jpg"
      },
      home_en: {
        name: "Nikita Kirdiapin",
        position: "Frontend developer - VueJs",
        src: "photo.jpg"
      }
    };
  },
  computed: {
    ...mapState("shared", ["lang"]),
    info() {
      return this.lang === "ru" ? this.home_ru : this.home_en;
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