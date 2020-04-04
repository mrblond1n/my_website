<template>
  <v-app-bar clipped-left fixed app color="rgba(0, 0, 0, .5)">
    <v-app-bar-nav-icon @click.stop="show_drawer" />
    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/about">About</v-tab>
      </v-tabs>
    </template>
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