<template>
  <div class="welcome-screen" :class="{active: active_destroy}">
    <v-container style="height: 100%">
      <v-layout justify-space-between align-center style="height: 100%">
        <div :class="{translate_left: active_destroy}" class="neon neon--blue"></div>

        <client-only>
          <vue-typed-js
            :strings="[message.toUpperCase()]"
            :showCursor="true"
            @onComplete="destroy_welcome_screen"
            :contentType="'html'"
            :smartBackspace="true"
          >
            <h1 class="typing text-center"></h1>
          </vue-typed-js>
        </client-only>
        <div :class="{translate_right: active_destroy}" class="neon neon--pink"></div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, my friend.^1000 I am glad to see you on my site",
      active_destroy: false
    };
  },
  methods: {
    destroy_welcome_screen() {
      this.active_destroy = true;
      setTimeout(() => {
        this.$store.dispatch("shared/welcome_screen", false);
        console.log(this.$store.getters["shared/welcome_screen"]);
      }, 3000);
    }
  }
};
</script>

<style lang="scss">
$blue: rgb(43, 100, 160);
$pink: rgb(196, 90, 232);
.welcome-screen {
  height: 100%;
  width: 100%;
  position: absolute;
  background: #000;
  z-index: 9999;
}
.typed-cursor {
  font-size: 30px !important;
}

.typed-element {
  width: 80%;
  justify-content: center;
}

.neon {
  height: 90%;
  width: 10px;
  border-radius: 10px;
}
.neon--pink {
  box-shadow: 0 0 100px 20px $pink, 0 0 50px 10px #f0f, 0 0 20px 10px #00f;
  background: $pink;
}
.neon--blue {
  background: $blue;
  box-shadow: 0 0 100px 20px $blue, 0 0 50px 10px #f0f, 0 0 20px 10px #00f;
}

.active {
  animation: fade 3s forwards;
}

.translate_left {
  animation: translate_left 3s forwards;
}
.translate_right {
  animation: translate_right 3s forwards;
}
@keyframes change_background {
  from {
    background: black;
    color: white;
  }
  to {
    background: white;
    color: black;
  }
}
@keyframes translate_left {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-200px);
  }
}
@keyframes translate_right {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(200px);
  }
}
@keyframes fade {
  from {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>