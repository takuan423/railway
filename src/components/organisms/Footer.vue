<template lang="pug">

.o-footer
  .inner

</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="stylus" scoped>

.o-footer
  padding 65px 0
  +sp()
    padding 30px 0

.inner
  +pc()
    display flex
    justify-content left
  +sp()
    padding 0 vw(60)

</style>
