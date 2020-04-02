<template>
  <v-navigation-drawer v-model="drawer" temporary app @input="close_drawer">
    <v-list>
      <v-list-item router exact>
        <v-list-item-action>
          <v-icon>mdi-mail</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="'mail'" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.getters["shared/drawer"];
      },
      set: () => {}
    }
  },
  methods: {
    close_drawer(val) {
      this.$store.dispatch("shared/drawer", val);
    }
  }
};
</script>