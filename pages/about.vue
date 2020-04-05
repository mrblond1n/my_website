<template>
  <v-layout column justify-center align-center>
    <section>
      <v-layout column align-center justify-space-around>
        <h1 class="display-2 text-uppercase my-5">{{lang === 'ru' ? 'Резюме': 'Resume'}}</h1>
        <v-layout align-center justify-center wrap>
          <app-card disabled dense v-for="(item, i) in info" :key="i" :info="item" data-aos="fade" :class="i % 2 === 0 ? 'align-self-start' : 'align-self-end'"/>
        </v-layout>
      </v-layout>
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