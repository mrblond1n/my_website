<template>
  <v-app-bar clipped-left fixed app color="rgba(0, 0, 0, .5)">
    <v-app-bar-nav-icon @click="show_drawer" class="d-inline-flex d-sm-none" />
    <v-tab class="d-inline-flex d-sm-none" to="/">{{lang === 'ru' ? 'Главная': 'Home'}}</v-tab>
    <v-tabs align-with-title color="warning" class="d-none d-sm-flex">
      <v-tab v-for="item in nav_list" :to="item.path" :key="item.name">{{item.name}}</v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">{{lang}}</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in languages" :key="index" @click="changed_lang">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn disabled class="ml-5 d-none">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    nav_list: {
      type: Array,
      default: () => {}
    },
    drawer: {
      type: Boolean,
      default: false
    },
    lang: {
      type: String,
      default: "ru"
    },
    change_lang: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      languages: [{ title: "en" }, { title: "ru" }]
    };
  },
  methods: {
    show_drawer() {
      this.$emit("show_drawer", true);
    },
    changed_lang({ target }) {
      this.change_lang(target.textContent);
    }
  }
};
</script>