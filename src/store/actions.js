export default {
  increase(context, num) {
    context.commit('increment', num + 1)
  }
}
