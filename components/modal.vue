<template>
  <v-dialog
    v-if="modal"
    v-model="dialog"
    @click:outside="close"
    @keydown.esc="close"
    max-width="600"
  >
    <v-card>
      <v-card-title>
        <span class="headline">{{lang === 'ru' ? 'Резюме': 'Resume'}}</span>
      </v-card-title>
      <client-only>
        <pdf :src="require(`@/static/files/resume_${lang}.pdf`)" />
      </client-only>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="close" v-text="lang === 'ru' ? 'Закрыть': 'Close'"></v-btn>
        <v-btn
          light
          color="#ffc107"
          @click="close"
          tag="a"
          :href="require(`@/static/files/resume_${lang}.pdf`)"
          download="resume"
          v-text="lang === 'ru' ? 'Скачать': 'Save'"
        >Скачать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: true
    };
  },
  computed: {
    modal() {
      return this.$store.getters["shared/modal"];
    },
    lang() {
      return this.$store.getters["shared/lang"];
    }
  },
  methods: {
    close() {
      this.$store.dispatch("shared/modal", false);
    }
  }
};
</script>