const encodeUrl = {
  methods: {
    $encodeUrl(url) {
      return encodeURIComponent(url)
    }
  }
}

export default encodeUrl
