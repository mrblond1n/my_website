<template>
  <div class="welcome-screen" :class="{active: active_destroy}">
    <v-container style="height: 100%">
      <v-layout justify-space-between align-center style="height: 100%">
        <div
          class="neon-wrapper neon-wrapper--left d-none d-sm-flex"
          :class="{translate_left: active_destroy}"
        >
          <div class="neon neon--blue"></div>
        </div>
        <client-only>
          <vue-typed-js
            style="width: 100%"
            :strings="[message.toUpperCase()]"
            :showCursor="false"
            @onComplete="destroy_welcome_screen"
            :contentType="'html'"
            :smartBackspace="true"
          >
            <h1 class="typing text-center"></h1>
          </vue-typed-js>
        </client-only>
        <div
          class="neon-wrapper neon-wrapper--right d-none d-sm-flex"
          :class="{translate_right: active_destroy}"
        >
          <div class="neon neon--pink"></div>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import disabled_scroll from "~/library/disabled_scroll";

export default {
  data() {
    return {
      message: "Hello.^1000 Welcome to my website",
      active_destroy: false
    };
  },
  methods: {
    destroy_welcome_screen() {
      this.active_destroy = true;
      setTimeout(() => {
        console.log("asd");
        this.$emit("hide_screen");
      }, 4000);
    }
  }
};
</script>

<style lang="sass" scoped>
@import url(~/assets/neon.scss)

.welcome-screen
  height: 100%
  width: 100%
  position: fixed
  background: #000
  z-index: 9999

.typed-cursor
  font-size: 40px !important

.typed-element
  width: 80%
  justify-content: center

$blue: rgb(43, 100, 160)
$pink: rgb(196, 90, 232)

.neon-wrapper
  padding: 100px
  height: 100vh

  box-shadow: inset 0 0 30px 40px rgba(0, 0, 0, 0.9)
  background-image: url("~assets/background.jpeg")
  background-size: cover
  background-repeat: no-repeat

  background-position-y: center
  &--right
    background-position-x: 70%

  &--left
    background-position-x: 30%

.neon
  height: 90%
  width: 10px
  border-radius: 10px
  &--pink
    box-shadow: 0 0 100px 20px $pink, 0 0 50px 10px #f0f, 0 0 20px 10px #00f
    background: $pink

  &--blue
    background: $blue
    box-shadow: 0 0 100px 20px $blue, 0 0 50px 10px #f0f, 0 0 20px 10px #00f

.active
  animation: fade 4s forwards

.translate_left
  animation: translate_left 3s forwards

.translate_right
  animation: translate_right 3s forwards
</style>