<template>
  <v-layout column justify-center align-center>
    <section>
      <v-layout column align-center justify-space-around>
        <h1 class="display-2 text-uppercase my-5">{{lang === 'ru' ? 'Связаться': 'Get in touch'}}</h1>
        <v-layout align-center justify-space-around wrap>
          <app-card :info="contacts"></app-card>
          <app-card :info="social"></app-card>
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
  data() {
    return {};
  },
  computed: {
    lang() {
      return this.$store.getters["shared/lang"];
    },
    contacts() {
      return this.$store.getters[`info/contacts_${this.lang}`];
    },
    social() {
      return this.$store.getters[`info/social`];
    }
  }
};
</script>

<style scoped lang="sass">
</style>