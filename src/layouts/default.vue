<template lang="pug">

.page-wrap#page-top
  .wrap
    nuxt
  .footer
    Footer

</template>

<script>
import Footer from '@/components/organisms/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>

<style lang="stylus" scoped>

.wrap
  width 100%
  margin 0 auto
  position relative

.footer
  margin 84px auto 0
  +pc()
    width per(870, 1410)
  +sp()
    margin-top 45px

.btn
  position fixed
  z-index 99
  bottom 30px
  right 30px
  +sp()
    bottom vw(60)
    right vw(45)

</style>
