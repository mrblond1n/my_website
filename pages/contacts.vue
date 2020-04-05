<template>
  <v-layout column justify-center align-center>
    <section>
      <v-layout class="h-100" column align-center justify-space-around>
        <h1 class="display-2 text-uppercase my-5">{{lang === 'ru' ? 'Связаться': 'Get in touch'}}</h1>
        <!-- <v-card
          class="my-5 pa-3"
          v-for="(item, index) in info"
          :key="index"
          elevation="24"
          :class="index % 2 === 0 ? 'align-self-start' : 'align-self-end'"
        >
          <v-card-title class="display-1 text-uppercase">{{item.title}}</v-card-title>
          <ul>
            <li v-for="(item, index) in item.list" :key="index">{{item}}</li>
          </ul>
          <v-card-subtitle>{{info.position}}</v-card-subtitle>
        </v-card>-->
      </v-layout>
    </section>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    lang() {
      return this.$store.getters["shared/lang"];
    }
  }
};
</script>

<style scoped lang="sass">
</style>