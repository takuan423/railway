<template lang="pug">
.o-modal
  a.o-modal__button(v-on:click="openModal" :positionX="`${positionY}`" :positionY="`${positionY}`")
    |{{name}}
  .o-modal__content(:style="`display:${switchModal}`")
    .o-modal__content__inner
      .o-modal__content__background(v-on:click="closeModal")
</template>

<script>
export default {
  components: {
  },
  props: {
    positionX: {
      type: String,
      required: true
    },
    positionY: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      switchModal: 'none'
    }
  },
  methods: {
    openModal(e) {
      const posX = e.target.getAttribute('positionx')
      const posY = e.target.getAttribute('positiony')
      console.log(posX, posY)
      this.switchModal = 'block'
    },
    closeModal(e) {
      console.log(e)
      this.switchModal = 'none'
    }
  }
}
</script>

<style lang="stylus" scoped>
.o-modal__button
  display block
  padding 5px

.o-modal__content
  display none
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  margin auto
  z-index 999

.o-modal__content__inner
  width 100%
  height 100%

.o-modal__content__background
  width 100%
  height 100%
  opacity 0.7
  background #000
</style>
