<template lang="pug">
.p-railWay
  .p-railWay__inner
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
