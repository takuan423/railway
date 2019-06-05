const SmoothScroll = {
  data: () => ({
    // クリック時の画面スクロール値
    $SmoothScroll_scrollStart: 0,
    // クリック時のthis.$SmoothScroll_scrollStartからの距離
    $SmoothScroll_scrollEnd: 0,
    // スクロールの移動量
    $SmoothScroll_amount: 0,
    // setTimeoutのid
    $SmoothScroll_timer: null,
    // 表示領域の高さ
    $SmoothScroll_windowHeight: null,
    // ドキュメント全体の高さ
    $SmoothScroll_documentHeight: null
  }),
  methods: {
    $SmoothScroll_smoothScroll(el, confVal) {
      // id = element.getAttribute('href');
      const id = el
      // hrefがハッシュ付きかつ、そのidをもつ対象要素があるかの判定

      if (!confVal) confVal = 0

      // if(id.indexOf('#') !== 0 || !document.getElementById(id.slice(1)))
      // ev.preventDefault();

      if (typeof el === 'number') {
        // this.$SmoothScroll_scrollStartからの距離
        this.$SmoothScroll_scrollEnd = el
      } else {
        // 対象要素を取得
        const target = document.getElementById(id.slice(1))
        // this.$SmoothScroll_scrollStartからの距離
        this.$SmoothScroll_scrollEnd = target.getBoundingClientRect().top
      }

      // 画面スクロール値
      this.$SmoothScroll_scrollStart = document.documentElement.scrollTop || document.body.scrollTop || 0

      // 追従ヘッダーがあればその高さ分を考慮
      this.$SmoothScroll_scrollEnd = this.$SmoothScroll_scrollEnd - confVal
      // 表示領域の高さ
      this.$SmoothScroll_windowHeight = window.innerHeight
      // ドキュメント全体の高さ
      this.$SmoothScroll_documentHeight = Math.max(document.documentElement.clientHeight, document.body.clientHeight)
      // 移動量の初期化
      this.$SmoothScroll_amount = 0
      // 対象要素の頭がウィンドウ上まで行かない場合
      if (this.$SmoothScroll_documentHeight - this.$SmoothScroll_scrollStart - this.$SmoothScroll_scrollEnd < this.$SmoothScroll_windowHeight) {
        this.$SmoothScroll_scrollEnd = this.$SmoothScroll_documentHeight - this.$SmoothScroll_windowHeight - this.$SmoothScroll_scrollStart
      }
      this.$SmoothScroll_loop()
    },

    $SmoothScroll_loop() {
      // setTimeoutのキューがたまるのを阻止
      clearTimeout(this.$SmoothScroll_timer)
      // タイマーidを保存
      this.$SmoothScroll_timer = setTimeout(() => {
        // 移動量を計算
        this.$SmoothScroll_amount = this.$SmoothScroll_amount + (this.$SmoothScroll_scrollEnd - this.$SmoothScroll_amount) * 0.1
        // スクロールする
        window.scrollTo(0, this.$SmoothScroll_amount + this.$SmoothScroll_scrollStart)
        // 移動量と最終地点の差をとってスクロールを続けるか止めるか判定
        if (Math.abs(this.$SmoothScroll_scrollEnd - this.$SmoothScroll_amount) > 0.5) {
          this.$SmoothScroll_loop()
        } else {
          window.scrollTo(0, this.$SmoothScroll_scrollEnd + this.$SmoothScroll_scrollStart)
        }
      }, 15)
    }
  }
}

export default SmoothScroll
