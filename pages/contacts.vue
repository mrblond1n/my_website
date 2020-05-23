<template>
  <v-layout column justify-center align-center>
    <h1 class="display-2 text-uppercase my-12">{{lang === 'ru' ? 'Связаться': 'Get in touch'}}</h1>
    <section>
      <v-layout justify-space-around wrap>
        <app-card width="300" :info="contacts"></app-card>
        <app-card width="300" :info="social"></app-card>
      </v-layout>
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
      contacts_ru: {
        title: "Контакты",
        list: [
          {
            title: "phone",
            icon: "mdi-phone",
            text: "+7 999 002-61-98",
            src: "tel:+79990026198"
          },
          {
            title: "email",
            icon: "mdi-email",
            text: "nikita.kirdiapin@gmail.com",
            src: "mailto:nikita.kirdiapin@gmail.com"
          },
          { title: "location", icon: "mdi-map-marker", text: "Россия, Москва" },
          {
            title: "position",
            icon: "mdi-check-circle-outline",
            text: "Открыт к предложениям"
          }
        ]
      },
      contacts_en: {
        title: "Contacts",
        list: [
          {
            title: "phone",
            icon: "mdi-phone",
            text: "+7 999 002-61-98",
            src: "tel:+79990026198"
          },
          {
            title: "email",
            icon: "mdi-email",
            text: "nikita.kirdiapin@gmail.com",
            src: "mailto:nikita.kirdiapin@gmail.com"
          },
          { title: "location", icon: "mdi-map-marker", text: "Russia, Moscow" },
          {
            title: "position",
            icon: "mdi-check-circle-outline",
            text: "Available for offer"
          }
        ]
      },
      social_ru: {
        title: "Соцсети",
        list: [
          {
            text: "Github",
            src: "https://github.com/mrblond1n",
            icon: "mdi-github"
          },
          {
            text: "LinkedIn",
            src: "https://www.linkedin.com/in/ipestilenz/",
            icon: "mdi-linkedin"
          },
          {
            text: "VKontakte",
            src: "https://vk.com/ipestilenz",
            icon: "mdi-vk"
          },
          {
            text: "Telegram",
            src: "tg://resolve?domain=rollyscrolly",
            icon: "mdi-telegram"
          }
        ]
      },
      social_en: {
        title: "Social",
        list: [
          {
            text: "Github",
            src: "https://github.com/mrblond1n",
            icon: "mdi-github"
          },
          {
            text: "LinkedIn",
            src: "https://www.linkedin.com/in/ipestilenz/",
            icon: "mdi-linkedin"
          },
          {
            text: "VKontakte",
            src: "https://vk.com/ipestilenz",
            icon: "mdi-vk"
          },
          {
            text: "Telegram",
            src: "https://teleg.run/rollyscrolly",
            icon: "mdi-telegram"
          }
        ]
      }
    };
  },
  computed: {
    ...mapState("shared", ["lang"]),
    contacts() {
      return this.lang === "ru" ? this.contacts_ru : this.contacts_en;
    },
    social() {
      return this.lang === "en" ? this.social_ru : this.social_en;
    }
  }
};
</script>

<style scoped lang="sass">
</style>