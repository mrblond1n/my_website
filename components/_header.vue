<template>
  <v-app-bar clipped-left fixed app color="rgba(0, 0, 0, .5)">
    <v-app-bar-nav-icon @click.stop="show_drawer" />
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    show_drawer() {
      this.$store.dispatch("shared/drawer", true);
    }
  }
};
</script>