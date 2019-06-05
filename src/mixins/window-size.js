const WindowSize = {
  data: () => ({
    window: {
      w: '',
      h: ''
    }
  }),
  mounted() {
    this.setWindowSize()
    window.addEventListener('resize', () => {
      this.setWindowSize()
    })
  },
  methods: {
    setWindowSize() {
      this.window.w = window.innerWidth
      this.window.h = window.innerHeight
    }
  }
}

export default WindowSize
