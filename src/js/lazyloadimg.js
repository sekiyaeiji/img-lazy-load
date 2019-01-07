// lazy load img
module.exports = function() {
  'use strict'

  const sampleA = require('./_sample_a')
  sampleA('hoge')

  // lazy load img
  const lazyLoadImg = {
    config: {
      flag_switch: true,
    },

    init: function() {
      const that = this
      // UI Ready
      that.ready()
      // event bind
      that.event()
    },

    event: function() {
      const that = this
      // scroll event
      window.addEventListener('scroll', () => {
        that.main()
      })
    },

    ready: function() {
      const target = document.getElementsByClassName('js-lazyLoadImg')
      const imgDefault = 'img/default.png'
      for (const item of target) {
        const imgOrigin = item.getAttribute('src')
        item.setAttribute('src', imgDefault)
        item.setAttribute('data-src', imgOrigin)
      }
    },

    main: function() {
      const target = document.getElementsByClassName('js-lazyLoadImg')
      const winHeight = window.parent.screen.height
      const offsetHeight = 500
      for (const item of target) {
        const isTarget = item.hasAttribute('data-src')
        console.log(isTarget)
        if (!isTarget) {
          return
        }
        const objectY = item.getBoundingClientRect().top
        if (objectY > winHeight + offsetHeight) {
          return
        }
        const imgCurrent = item.getAttribute('data-src')
        item.setAttribute('src', imgCurrent)
        item.removeAttribute('data-src')
      }
    },
  }

  // 即時実行
  lazyLoadImg.init()
}
