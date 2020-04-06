<template>
  <v-layout column justify-center align-center>
    <v-icon class="keyboard_arrow" small color="warning">mdi-chevron-up</v-icon>
    <div>
      <v-icon class="keyboard_arrow" color="warning" small>mdi-chevron-left</v-icon>
      <v-icon class="keyboard_arrow" color="warning" small>mdi-chevron-down</v-icon>
      <v-icon class="keyboard_arrow" color="warning" small>mdi-chevron-right</v-icon>
    </div>
  </v-layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.keyboard_arrow {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid orange;
  border-radius: 2px;
}
</style>