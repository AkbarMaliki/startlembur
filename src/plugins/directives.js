import Vue from 'vue'

Vue.directive('focus', {
  bind: function () {
    var object = this.el;
    Vue.nextTick(function () {
      object.focus();
    });
  }
});

Vue.directive('lazys', {
  bind(el) {
    let img = el.src
    // console.dir(el)
    // el.src = '/loading.gif'
    el.classList.toggle('deactive', true)
    el.addEventListener('load', function loaded() {
      console.log('loaded')
      console.log('nama image', el.src)
      if (!el.src.match(/nofound.png/g)) {
        el.src = img
        el.classList.toggle('deactive', false)
      } else {
        console.log('error2')
      }
      el.removeEventListener('load', loaded)
    })
    el.addEventListener('error', function errored() {
      el.src = '/nofound.png'
      console.log('error')
      console.log(el.src.match(/nofound.png/g))
      el.removeEventListener('error', errored)
    })
  },
  update(el) {
    console.log('update')
    let img = el.src
    console.log(img)
    el.src = img
  }
})

Vue.directive('imgs', {
  bind(el, vnode) {
    let img = el.src
    // console.dir(el)
    el.src = '/loading.gif'
    el.addEventListener('load', function loaded() {
      console.log('loaded')
      console.log('nama image', el.src)
      if (!el.src.match(/nofound.png/g)) {
        el.src = img
        let data = []
        if (el.classList.contains('myimagegroup')) {
          vnode.context.$el
            .querySelectorAll('.myimagegroup img')
            .forEach((img, index) => {
              img.style.cursor = 'pointer'
              img.onclick = function () {
                vnode.context.$nuxt.$emit('myimageactive', index)
              }
              data.push(img.src)
            })
        } else {
          vnode.context.$el
            .querySelectorAll('.myimage')
            .forEach((img, index) => {
              img.style.cursor = 'pointer'
              img.onclick = function () {
                vnode.context.$nuxt.$emit('myimageactive', index)
              }
              data.push(img.src)
            })
        }
        vnode.context.$nuxt.$emit('myimage', data)
      } else {
        console.log('error2')
      }
      el.removeEventListener('load', loaded)
    })
    el.addEventListener('error', function errored() {
      el.src = '/nofound.png'
      console.log('error')
      console.log(el.src.match(/nofound.png/g))
      el.removeEventListener('error', errored)
    })
  },
  update(el) {
    console.log('update')
    let img = el.src
    console.log(img)
    el.src = img
  }
})

Vue.directive('reload', {
  bind(test, bind, vnode) {
    if (vnode.context.$route.hash) {
      setTimeout(() => {
        vnode.elm.querySelectorAll(`a`).forEach(el => {
          if (el.hash == vnode.context.$route.hash) {
            el.click()
          }
        })
      }, 2000)
    }
  }
})
Vue.directive('myimage', {
  bind(shit, bin, vnode) {
    let data = []
    setTimeout(() => {
      if (vnode.context.$el.querySelectorAll('.myimage').length > 0) {
        vnode.context.$el.querySelectorAll('.myimage').forEach((el, index) => {
          el.style.cursor = 'pointer'
          data.push(el.src)
          el.addEventListener('click', function () {
            vnode.context.$nuxt.$emit('myimageactive', index)
            vnode.context.$nuxt.$emit('myimage', data)
          })
        })
      }
    }, 2000)
  }
})
Vue.directive('top', {
  bind(vnode) {
    setTimeout(() => {
      console.log('hello')
      vnode.context.$root.$el.querySelector('#top').click()
    }, 0)
  }
})