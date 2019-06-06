<template lang="pug">
a.o-modal(v-on:click="openModal" :positionX="`${positionY}`" :positionY="`${positionY}`")
  |{{name}}
</template>

<script>
export default {
  components: {
  },
  props: {
    positionX: {
      type: String
    },
    positionY: {
      type: String
    },
    name: {
      type: String
    }
  },
  methods: {
    openModal(e) {
      const posX = e.target.getAttribute('positionx')
      const posY = e.target.getAttribute('positiony')
      console.log(posX, posY)
    }
  }
}
</script>

<style lang="stylus" scoped>
.o-modal
  display block
  padding 5px
</style>
