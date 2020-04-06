<template>
  <client-only>
    <v-card class="ma-5 pa-3" :width="width" color="rgba(0,0,0, .8)" elevation="24">
      <v-card-title v-text="info.title" />

      <v-list :disabled="disabled" class="text-break">
        <v-list-item
          v-for="(item, i) in info.list"
          :key="i"
          :href="item.src ? item.src : ''"
          :target="item.src ? '_blank' : ''"
        >
          <v-list-item-icon v-if="item.icon">
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text ? item.text : item" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </client-only>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {}
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background: rgb(41, 155, 250);
  background: linear-gradient(
    90deg,
    rgba(41, 155, 250, 1) 0%,
    rgba(211, 65, 236, 1) 100%
  );
}
</style>