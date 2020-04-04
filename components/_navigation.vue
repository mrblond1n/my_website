<template>
  <v-navigation-drawer v-model="drawer" temporary app @input="close_drawer">
    <v-list>
      <v-list-item router exact v-for="item in nav_list" :to="item.path" :key="item.name">
        <v-list-item-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.name" />
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
    },
    nav_list() {
      return this.$store.getters[`navigation/list_${this.lang}`];
    },
    lang() {
      return this.$store.getters["shared/lang"];
    }
  },
  methods: {
    close_drawer(val) {
      this.$store.dispatch("shared/drawer", val);
    }
  }
};
</script>