import axios from 'axios'
export default {
  namespaced: true,
  state: {
    isAuth: false,
    redirect2: null
  },
  getters: {
    ambilGlobalData(state, getters, rootState) {
      return rootState.globalData
    }
  },
  mutations: {
    test() {
      console.log('tes')
    },
    goAuth(state, data) {
      state.isAuth = data
    },
    cleanData(state) {
      localStorage.clear()
      localStorage.setItem('expireDate', null)
      state.auth = null
      var cookies = document.cookie.split(';')
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i]
        var eqPos = cookie.indexOf('=')
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
      }
    },
    redirect2(state, data) {
      state.redirect = data
    }
  },
  actions: {
    goAuth(vcon, data) {
      let output = !data
      vcon.commit('goAuth', output)
    },
    verify(vcon) {
      return axios
        .get('/api/auth/verify', {
          headers: {
            Authorization: this.$auth.$storage._state['_token.local']
          }
        })
        .then(res => {
          this.$router.push('/')
        })
    },
    autoLogout(vcon) {
      let that = this
      let now = new Date()
      var expireDate = localStorage.getItem('expireDate')
      expireDate = new Date(expireDate)
      console.log(now.getTime(), expireDate.getTime())
      if (this.$auth.loggedIn) {
        if (now.getTime() > expireDate.getTime()) {
          setTimeout(() => {
            alert('waktu login anda berakhir, silahkan login ulang')
            if (that.$auth.loggedIn) {
              this.$auth.logout()
            }
          }, 3000)
        }
      }
    }
  }
}
