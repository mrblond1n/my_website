<template>
  <client-only>
    <v-card class="ma-5 pa-3" min-width="300" min-height="400" elevation="24">
      <v-card-title v-text="info.title" />
      <v-list :disabled="disabled" :dense="dense">
        <v-list-item
          v-for="(item, i) in info.list"
          :key="i"
          :href="item.src ? item.src : false"
          :target="item.src ? '_blank' : false"
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
    }
  }
};
</script>

<style lang="scss" scoped>
</style>