<template>
  <v-app-bar clipped-left fixed app color="rgba(0, 0, 0, .5)">
    <v-app-bar-nav-icon @click.stop="show_drawer" />
    <v-tabs align-with-title color="warning">
      <v-tab v-for="item in nav_list" :to="item.path" :key="item.name">{{item.name}}</v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <v-btn disabled>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    show_drawer() {
      this.$store.dispatch("shared/drawer", true);
    }
  },
  computed: {
    nav_list() {
      return this.$store.getters["navigation/list_en"];
    }
  }
};
</script>