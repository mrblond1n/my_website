<template>
  <div>
    <v-text-field v-model="search_input" outlined @keydown.enter="search" />
    <!-- <ul>
      <li v-for="item in list" :key="item.title">
        <div>{{item.title}}</div>
        <div>{{item.desc}}</div>
      </li>
    </ul>-->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      search_input: "",
      list: [
        { title: "film_1", desc: "qwerty" },
        { title: "film_2", desc: "qwerty" },
        { title: "film_3", desc: "qwerty" },
        { title: "film_4", desc: "qwerty" },
        { title: "film_5", desc: "qwerty" }
      ]
    };
  },
  methods: {
    ...mapActions({ get_movie: "request/get_movie" }),
    search() {
      try {
        let result = this.search_input.split(" ").join("+");
        this.get_movie(result);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>