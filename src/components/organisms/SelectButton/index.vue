<template lang="pug">
.o-selectButton
  select(v-model="selected" v-on:change="changeRail")
    option(v-for="(option, index) in options" :class="`${options[index].value}`")
      |{{options[index].value}}
  p(v-text="railsList")
</template>

<script>
import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

export default {
  data() {
    return {
      selected: '',
      options: [
        { text: 'JR山手線', value: 'JR山手線' },
        { text: 'JR常磐線', value: 'JR常磐線' },
        { text: 'JR中央線', value: 'JR中央線' }
      ],
      railsList: ''
    }
  },
  methods: {
    changeRail(e) {
      const railsAry = []
      const val = encodeURI(e.target.value)
      const root = 'http://express.heartrails.com/api/json?method=getStations&line='

      Vue.jsonp(root + val).then((json) => {
        const array = json.response.station
        for (let i = 0; i < array.length; i++) {
          const element = array[i]
          railsAry.push(element.name)
        }
        this.railsList = railsAry
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
