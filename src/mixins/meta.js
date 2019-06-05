const metaMixin = {
  asyncData({
    env,
    route
  }) {
    const path = route.path.split('')
    let routePath = route.path
    if (path[path.length - 1] !== '/') routePath = `${routePath}/`
    const meta = env.metaData.find(meta => meta.url === routePath)
    return {
      meta: meta
    }
  },
  head() {
    return {
      title: `${this.meta.title}`,
      meta: [
        {
          hid: 'keywords',
          property: 'keywords',
          content: `${this.meta.keywords}`
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.meta.description}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.meta.og_title}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.meta.og_description}`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://hogehoge/${this.meta.url}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.meta.og_image}`
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: `summary_large_image`
        }
      ]
    }
  }
}

export default metaMixin
