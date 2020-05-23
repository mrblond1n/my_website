<template>
  <v-layout column justify-center align-center style="width: 100%">
    <h1 class="display-2 text-uppercase my-12">{{lang === 'ru' ? 'Резюме': 'Resume'}}</h1>
    <section v-for="(item, i) in info" :key="i">
      <app-card disabled dense :info="item" data-aos="fade" />
    </section>
  </v-layout>
</template>



<script>
import appCard from "~/components/card";
import { mapState } from "vuex";
export default {
  components: {
    appCard
  },
  data() {
    return {
      about_ru: [
        {
          title: "Основные навыки",
          list: [
            "HTML, CSS. Опыт кросс-браузерной, адаптивной и др. видах верстки",
            "Более года опыта работы на языке JavaScript",
            "Стандарты ES6, ES7, ES8, ES9",
            "Опыт отладки и использование инструментов разработчика браузера",
            "Опыт разработки на фреймворках Vue/Nuxt",
            "Опыт работы с webpack, gulp",
            "Опыт работы с VCS (git)",
            "Знания в AJAX, WebSocket, понимание принципов функционирования сети Интернет и протокола HTTP",
            "Работа со сторонними API",
            "Препроцессоры Sass/Scss и графические библиотеки 'Bootstrap', 'Vuetify'"
          ]
        },
        {
          title: "Что я ищу",
          list: [
            "Интересные и нетривиальные задачи",
            "Возможности роста и самосовершенствования",
            "Хороший и адекватный коллектив",
            "Возможность удаленной работы",
            "В идеале - удаленная работа"
          ]
        },
        {
          title: "Что я могу предложить",
          list: [
            "Решение задач различных уровней сложности",
            "Пунктуальность в закрытии проектов и поставленных задач",
            "Ответственность за свою работу",
            "Адекватное отношение к замечаниям и критике",
            "Быстрое включение в работу",
            "Любовь к чистому и понятному кодингу (kiss, dry)"
          ]
        }
      ],
      about_en: [
        {
          title: "Skills",
          list: [
            "HTML, CSS. Experience in cross-browser, adaptive, response HTML coding",
            "More than one year work with JavaScript",
            "Standarts ES6, ES7, ES8, ES9",
            "Опыт отладки и использование инструментов разработчика браузера",
            "Experience debugging and using browser developer tools",
            "Development experience with Vue/Nuxt",
            "Experience with webpack, gulp",
            "Experience with VCS (git)",
            "AJAX, WebSocket, understanding of the principles of the Internet and the HTTP protocol",
            "Work with API`s",
            "Preprocessors Sass/Scss and graphic libraries 'Bootstrap', 'Vuetify'"
          ]
        },
        {
          title: "Looking for...",
          list: [
            "Interesting and non-trivial tasks",
            "Opportunities for growth and self-improvement",
            "Good and adequate staff",
            "The possibility of remote work",
            "Ideally, remote work"
          ]
        },
        {
          title: "What can i offer",
          list: [
            "Solving problems of various difficulty levels",
            "Punctuality in closing projects and tasks",
            "Responsibility for their work",
            "Adequate attitude to comments and criticism",
            "Quick start to work",
            "Love for clean and clear coding (kiss, dry)"
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState("shared", ["lang"]),
    info() {
      return this.lang === "ru" ? this.about_ru : this.about_en;
    }
  }
};
</script>

<style scoped lang="sass">
</style>