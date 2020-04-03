<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="wrapper">
        <div
          class="text"
          :class="{active: !$store.getters['shared/welcome_screen']}"
        >Made with NUXT JS</div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="sass">
@import url(~/assets/neon.scss)
</style>