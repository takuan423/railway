<template lang="pug">
.o-modal
  a.o-modal__button(v-on:click="openModal" :data-positionX="`${positionY}`" :data-positionY="`${positionY}`" :data-name="`${name}`")
    |{{name}}
  .o-modal__content(:style="`display:${switchModal}`")
    .o-modal__content__inner
      .o-modal__content__iframe(:data-modal="`${name}`")
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
      const posX = e.target.getAttribute('data-positionx')
      const posY = e.target.getAttribute('data-positiony')
      const name = e.target.getAttribute('data-name')
      this.switchModal = 'block'
      this.showMap(posX, posY, name)
    },
    closeModal() {
      this.switchModal = 'none'
    },
    showMap(x, y, name) {
      const target = document.querySelectorAll(`[data-modal=${name}]`)[0]
      const iframeMap = `<iframe src="http://maps.google.co.jp/maps?q=${name}駅&output=embed&t=m&z=16&hl=ja" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="85%" height="50%"></iframe>`
      target.innerHTML = iframeMap
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
