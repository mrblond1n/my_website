<template>
  <v-layout column justify-center align-center style="width: 100%">
    <h1 class="display-2 text-uppercase my-5">{{lang === 'ru' ? 'Резюме': 'Resume'}}</h1>
    <section v-for="(item, i) in info" :key="i">
      <app-card disabled dense :info="item" data-aos="fade" />
    </section>
  </v-layout>
</template>



<script>
import appCard from "~/components/card";

export default {
  components: {
    appCard
  },
  computed: {
    info() {
      return this.$store.getters[`info/about_${this.lang}`];
    },
    lang() {
      return this.$store.getters["shared/lang"];
    }
  }
};
</script>

<style scoped lang="sass">
</style>