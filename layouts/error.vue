<template>
  <v-layout justify-center column align-center class="wrapper">
    <h1 class="text">Error</h1>
    <p class="code">
      4
      <span>0</span>
      <span>4</span>
      not found
    </p>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  }
};
</script>

<style scoped>
.wrapper {
  padding: 40px;
  font-size: 4rem;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 0 80px red, 0 0 30px FireBrick, 0 0 6px DarkRed;
  color: red;
}

.text {
  color: #fff;
  text-shadow: 0 0 80px #ffffff, 0 0 30px #008000, 0 0 6px #0000ff,
    0 0 30px #ffffff, 0 0 80px #008000, 0 0 70px #0000ff;
}

.code,
.text {
  font-weight: 900;
}
.code span:nth-of-type(2) {
  animation: lower 10s linear infinite;
}
.code span:nth-of-type(1) {
  text-shadow: none;
  opacity: 0.8;
  color: rgba(113, 44, 44, 0.879);
}

@keyframes lower {
  0%,
  12%,
  18.999%,
  23%,
  31.999%,
  37%,
  44.999%,
  46%,
  49.999%,
  51%,
  58.999%,
  61%,
  68.999%,
  71%,
  85.999%,
  96%,
  100% {
    opacity: 0.99;
    text-shadow: 0 0 80px red, 0 0 30px FireBrick, 0 0 6px DarkRed;
  }
  19%,
  22.99%,
  32%,
  36.999%,
  45%,
  45.999%,
  50%,
  50.99%,
  59%,
  60.999%,
  69%,
  70.999%,
  86%,
  95.999% {
    opacity: 0.7;
    text-shadow: 0px 0px 5px black;
  }
}
</style>
