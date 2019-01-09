// lazy load img
module.exports = function() {
  'use strict'

  // lazy load img
  const lazyLoadImg = {
    config: {
      target_class_name: 'js-lazyLoadImg',
    },
    // 初期処理
    init: function() {
      const that = this
      // UI Ready
      that.ready()
      // event bind
      that.event()
    },
    // イベントbind
    event: function() {
      // window scroll
      window.addEventListener('scroll', lazyLoadImg.main)
    },
    // 画像パスをdummy画像パスに差し替え
    ready: function() {
      const that = this
      console.log(that.config.target_class_name)
      const target = document.getElementsByClassName(lazyLoadImg.config.target_class_name)
      const imgDefault = 'img/default.png'
      for (const item of target) {
        const imgOrigin = item.getAttribute('src')
        item.setAttribute('src', imgDefault)
        item.setAttribute('data-src', imgOrigin)
      }
    },
    // lazy load処理
    loadLazy: function(elm) {
      const imgCurrent = elm.getAttribute('data-src')
      elm.setAttribute('src', imgCurrent)
      elm.classList.add('js-loaded')
    },
    // scrollに伴うlazy load処理
    main: function() {
      const that = this

      // 処理
      const target = document.getElementsByClassName(lazyLoadImg.config.target_class_name)
      for (const item of target) {
        const isLoaded = item.hasAttribute('data-loaded')
        if (isLoaded) {
          return
        }
        that.loadLazy(item)
      }

      // removeEventListener
      window.removeEventListener('scroll', lazyLoadImg.main)
    },
  }

  // 即実行
  lazyLoadImg.init()
}
