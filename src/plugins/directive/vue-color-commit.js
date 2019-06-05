import Vue from 'vue'

Vue.directive('color', {
  inserted: function (el, binding, vnode) {
    el.addEventListener('click', () => {
      vnode.context.$store.commit('SET_TRANSITION_COLOR', binding.value)
    })
  }
})
