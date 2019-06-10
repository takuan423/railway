<template lang="pug">
.o-railsList
  select(v-model="selected" v-on:change="changeRail")
    option(v-for="(option, index) in options" :class="`${options[index].value}`")
      |{{options[index].value}}
  transition(name="fade")
    ul.o-railsList__list(v-if="show")
      li.o-railsList__item(v-for="item in railsList")
        .o-railsList__item__inner
          Modal(:name="`${item.name}`")
</template>

<script>
import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
import Modal from '@/components/organisms/Modal/index.vue'

Vue.use(VueJsonp)

export default {
  components: {
    Modal
  },
  data() {
    return {
      selected: '',
      options: [
        { text: 'JR山手線', value: 'JR山手線' },
        { text: 'JR常磐線', value: 'JR常磐線' },
        { text: 'JR中央線', value: 'JR中央線' },
        { text: 'JR埼京線', value: 'JR埼京線' },
        { text: 'JR宇都宮線', value: 'JR宇都宮線' }
      ],
      railsList: [],
      show: false
    }
  },
  methods: {
    changeRail(e) {
      const railsAry = []
      const val = encodeURI(e.target.value)
      const root = 'http://express.heartrails.com/api/json?method=getStations&line='
      this.railsList = []
      this.show = false
      Vue.jsonp(root + val).then((json) => {
        const array = json.response.station
        for (let i = 0; i < array.length; i++) {
          const element = array[i]
          railsAry.push(element)
        }
        this.replace(railsAry)
      })
    },
    replace(railsAry) {
      for (let i = 0; i < railsAry.length; i++) {
        const element = railsAry[i]
        this.railsList.push(element)
        this.show = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
select
  font-size 15px
  +sp()
    font-size 20px

.o-railsList__list
  margin 20px auto

.o-railsList__item
  position relative
  margin 0 auto 40px
  background #ccc
  border-radius 5px
  width 300px
  text-align center
  &::before
    position absolute
    bottom -35px
    left 50%
    width 0px
    height 0px
    content ""
    display block
    transform translate(-50%, 0)
    border-top 10px solid #555
    border-left 10px solid transparent
    border-right 10px solid transparent
    border-bottom 10px solid transparent
  &:last-of-type::before
    display none
  +sp()
    width 80%

.o-railsList__item__inner
  cursor pointer
  font-size 15px
  letter-spacing 0.09em

</style>
