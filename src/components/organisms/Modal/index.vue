<template lang="pug">
.o-modal
  a.o-modal__button(v-on:click="openModal" :data-name="`${name}`")
    |{{name}}
  transition(name="fade")
    .o-modal__content(v-if="show")
      .o-modal__content__inner
        .o-modal__content__iframe
          iframe(:src="`http://maps.google.co.jp/maps?q=${name}?&output=embed&t=m&z=16&hl=ja`", frameborder="0", scrolling="no", width="75%", height="70%")
        .o-modal__content__background(v-on:click="closeModal")
</template>

<script>
export default {
  components: {
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      switchModal: 'none',
      show: false
    }
  },
  methods: {
    openModal(e) {
      this.show = true
    },
    closeModal() {
      this.show = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.o-modal__button
  display block
  padding 5px

.o-modal__content
  display block
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  margin auto
  z-index 999

.o-modal__content__inner
  position relative
  width 100%
  height 100%

.o-modal__content__iframe
  position fixed
  max-width 1000px
  width 100%
  height 100%
  top 50%
  left 50%
  transform translate(-50%, -50%)
  z-index 1000
  pointer-events none
  >>> iframe
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    pointer-events auto

.o-modal__content__background
  width 100%
  height 100%
  opacity 0.7
  background #000
</style>
