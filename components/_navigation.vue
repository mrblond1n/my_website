<template>
  <v-navigation-drawer v-model="show_drawer" temporary app>
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
import { mapState } from "vuex";
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
    }
  },
  computed: {
    show_drawer: {
      get() {
        return this.drawer;
      },
      set(val) {
        this.$emit("show_drawer", val);
      }
    }
  }
};
</script>