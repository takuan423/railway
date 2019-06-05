import Vue from 'vue'

Vue.directive('mousemove', {
  inserted: function (el, binding) {
    const f = function (evt) {
      if (binding.value(evt, el)) {
        document.body.removeEventListener('mousemove', f)
      }
    }
    document.body.addEventListener('mousemove', f)
  }
})
