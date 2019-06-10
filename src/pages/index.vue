<template lang="pug">
.p-railWay
  transition(name="fade")
    .p-railWay__inner(v-if="show")
      .p-railWay__heading
        Heading
      .p-railWay__railsList
        RailsList
</template>

<script>
import Heading from '@/components/organisms/Heading/index.vue'
import RailsList from '@/components/organisms/RailsList/index.vue'

export default {
  components: {
    Heading,
    RailsList
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
  padding 20px 40px

.p-railWay__railsList
  margin-top 40px
  text-align center

</style>
