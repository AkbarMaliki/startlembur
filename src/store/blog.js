import axios from 'axios'
export default {
  namespaced: true,
  state: {
    data: false,
    version: 0
  },
  getters: {},
  mutations: {},
  actions: {
    addData(vcon, data) {
      vcon.state.data = data
    },
    refresh(vcon, data) {
      console.log('refresh')
      axios.get('http://localhost:3000/api/data/kabupaten').then(dat => {
        //   console.log(res.data.data)
        vcon.dispatch('addData', dat.data.data.data)
        vcon.state.version = data
        localStorage.setItem('vuex', JSON.stringify(vcon.rootState))
      })
    }
  }
}
