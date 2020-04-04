<template>
  <div>
    <div
      class="cursor"
      :style="`top: ${this.cur_opt.top - 5 / 2}px; left: ${this.cur_opt.left - 5 / 2}px`"
    ></div>
    <div class="cursor-border" :class="{expand: cur_opt.clicked,}" :style="set_cursor_opt()"></div>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      default: () => ({
        width: 20,
        height: 20,
        outsideCircle: false
      })
    }
  },
  methods: {
    set_cursor_opt() {
      return {
        width: `${this.option.width}px`,
        height: `${this.option.height}px`,
        transform: `translate(${this.cur_opt.top -
          this.option.height / 2},${this.cur_opt.left -
          this.option.width / 2}px )`
        // top: `${this.cur_opt.top - this.option.height / 2}px`,
        // left: `${this.cur_opt.left - this.option.width / 2}px`
      };
    }
  },
  computed: {
    cur_opt() {
      return this.$store.getters["shared/cursor_option"];
    }
  },
  mounted() {}
};
</script>

<style lang="sass" scoped>
.cursor
  width: 5px
  height: 5px
  border-radius: 50%
  background: white
  position: absolute
  pointer-events: none
  z-index: 9999

.cursor-border
  border: 1px solid white
  box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, inset 0 0 10px #ffdd1b, 0 0 70px #ffdd1b, 0 0 80px #ffdd1b, 0 0 100px #ffdd1b, 0 0 150px #ffdd1b
  border-radius: 50%
  position: absolute
  transition-duration: 200ms
  transition-timing-function: ease-out
  pointer-events: none
  z-index: 9999

.expand
  animation: cursorAnim3 .5s forwards

  @keyframes cursorAnim
    from
      transform: scale(1)

    to
      transform: scale(.7)
@keyframes cursorAnim2
  from
    transform: scale(1)

  to
    transform: scale(.4)
@keyframes cursorAnim3
  0%
    transform: scale(1)

  50%
    transform: scale(3)

  100%
    transform: scale(1)
    opacity: 0
</style>