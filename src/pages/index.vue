<template lang="pug">
.p-railWay
  transition(name="fade")
    .p-railWay__inner(v-if="show")
      .p-railWay__heading
        Heading
      .p-railWay__railsList
        RailsList
      .p-railWay__mario
        Mario
</template>

<script>
import Heading from '@/components/organisms/Heading/index.vue'
import RailsList from '@/components/organisms/RailsList/index.vue'
import Mario from '@/components/atoms/dotPictures/mario.vue'

export default {
  components: {
    Heading,
    RailsList,
    Mario
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.fugafuga()
  },
  methods: {
    fugafuga() {
      this.show = true
    }
  }
}
</script>

<style lang="stylus" scoped>

.p-railWay__inner
  position relative
  padding 20px 40px

.p-railWay__railsList
  margin-top 40px
  text-align center

.p-railWay__mario
  position absolute
  top 20px
  left 20px

</style>
