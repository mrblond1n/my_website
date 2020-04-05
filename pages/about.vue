<template>
  <v-layout column justify-center align-center>
    <section>
      <v-layout class="h-100" column align-center justify-space-around>
        <h1 class="display-2 text-uppercase">Обо мне</h1>
        <v-card
          v-for="(item, index) in info"
          :key="index"
          elevation="12"
          :class="index % 2 === 0 ? 'align-self-end' : 'align-self-start'"
        >
          <v-card-title class="display-1 text-uppercase">{{item.title}}</v-card-title>
          <ul>
            <li v-for="(item, index) in item.list" :key="index">{{item}}</li>
          </ul>
          <v-card-subtitle>{{info.position}}</v-card-subtitle>
        </v-card>
      </v-layout>
    </section>
  </v-layout>
</template>

<script>
export default {
  computed: {
    info() {
      return this.$store.getters["info/about_ru"];
    }
  }
};
</script>

<style scoped lang="sass">
section
  height: 100vh
</style>