<template>
  <v-app-bar clipped-left fixed app color="rgba(0, 0, 0, .5)">
    <v-app-bar-nav-icon @click.stop="show_drawer" />
    <v-tabs align-with-title color="warning" class="d-none d-sm-flex">
      <v-tab v-for="item in nav_list" :to="item.path" :key="item.name">{{item.name}}</v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">{{lang}}</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in languages" :key="index" @click="change_lang">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn disabled class="ml-5">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      languages: [{ title: "en" }, { title: "ru" }]
    };
  },
  methods: {
    show_drawer() {
      this.$store.dispatch("shared/drawer", true);
    },
    change_lang(e) {
      this.$store.dispatch("shared/lang", e.target.textContent);
    }
  },
  computed: {
    nav_list() {
      return this.$store.getters[`navigation/list_${this.lang}`];
    },
    lang() {
      return this.$store.getters["shared/lang"];
    }
  }
};
</script>