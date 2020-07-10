<template>
  <div>
    infra : {{infra}}
    <br>
    <br>
    <button type="button" @click="coba" class="btn btn-sm btn-primary">coba</button>
  </div>
</template>
<script>
import socket from '@/plugins/socket.io.js'
import axios from 'axios'
export default {
  data() {
    return {
      infra: 'no'
    }
  },
  beforeMount() {
    socket.on('new-infra', infra => {
      this.infra = infra
    })
  },
  mounted() {
    let that = this
    socket.emit('last-infra', function(infra) {
      that.infra = infra
    })
  },
  methods: {
    coba() {
      let i = 0
      let test = setInterval(() => {
        i++
        console.log(i)
        if (i > 10) {
          clearInterval(test)
        }
        let go = 'motion' + i
        axios.get(`/api/wemos/infra/${go}`).then(res => {
          console.log(res)
        })
      }, 1000)
    }
  }
}
//  app.get('/wemos/infra/:data', function(req, res) {
//     console.log(req.params.data)
//     socket.emit('send-infra', req.params.data)
//     res.json({
//       data: {
//         name: 'TAUFIK AKBAR MALIKI'
//       }
//     })
//   })
</script>