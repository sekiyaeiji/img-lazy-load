// lazy load img
module.exports = function() {
  'use strict'

  // lazy load img
  const lazyLoadImg = {
    config: {
      class_target: 'js-lazyLoadImg',
      class_loaded: 'js-loaded',
      offset_y_loaded: 500,
      image_default: 'img/default.png',
    },
    // 初期処理
    init: function() {
      const that = this
      // UI Ready
      that.ready()
      // event bind
      that.event()
    },
    // イベント bind
    event: function() {
      // window scroll
      window.addEventListener('scroll', lazyLoadImg.main)
    },
    // イベント unbind
    eventUnBind: function() {
      // window scroll
      window.removeEventListener('scroll', lazyLoadImg.main)
    },
    // 画像パスをdummy画像パスに差し替え
    ready: function() {
      const target = document.getElementsByClassName(lazyLoadImg.config.class_target)
      const imgDefault = lazyLoadImg.config.image_default
      for (const item of target) {
        const imgOrigin = item.getAttribute('src')
        item.setAttribute('src', imgDefault)
        item.setAttribute('data-src', imgOrigin)
      }
    },
    // scrollに伴うlazy load 制御処理
    main: function() {
      // 処理
      const target = document.getElementsByClassName(lazyLoadImg.config.class_target)
      const winHeight = window.parent.screen.height
      const offsetHeight = lazyLoadImg.config.offset_y_loaded
      for (const item of target) {
        const isLoaded = item.classList.contains(lazyLoadImg.config.class_loaded)
        // lazy load 済みの画像はスキップする
        if (isLoaded) {
          continue
        }
        // スクロール位置が近づくまでスキップする
        const objectY = item.getBoundingClientRect().top
        if (objectY > winHeight + offsetHeight) {
          return
        }
        // lazy load処理へ
        lazyLoadImg.loadLazy(item)
      }

      // すべてload済みになったら、removeEventListenerによりイベントをunbind
      lazyLoadImg.eventUnBind()
    },
    // lazy load処理
    loadLazy: function(elm) {
      const imgCurrent = elm.getAttribute('data-src')
      elm.setAttribute('src', imgCurrent)
      elm.classList.add(lazyLoadImg.config.class_loaded)
    },
  }

  // 即実行
  lazyLoadImg.init()
}
