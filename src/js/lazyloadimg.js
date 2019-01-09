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
        lazyLoadImg._callback = that.main()

        console.log('event')
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
      const that = this
      console.log('UnBind!!')
      console.log(that)
      window.removeEventListener('scroll', that._callback)

      const target = document.getElementsByClassName('js-lazyLoadImg')
      // console.log(target.length)
      // const loaded = document.getElementsByClassName('js-loaded')
      // console.log(loaded.length)
      // const winHeight = window.parent.screen.height
      // const offsetHeight = 500
      for (const item of target) {
        const isLoaded = item.hasAttribute('data-loaded')
        // console.log(item)
        // console.log(isLoaded)
        if (isLoaded) {
          return
        }
        // const objectY = item.getBoundingClientRect().top
        // if (objectY > winHeight + offsetHeight) {
        //   return
        // }
        const imgCurrent = item.getAttribute('data-src')
        item.setAttribute('src', imgCurrent)
        item.classList.add('js-loaded')
      }
    },
  }

  // 即時実行
  lazyLoadImg.init()
}
