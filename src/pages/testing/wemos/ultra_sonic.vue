<template>
  <div>
    jarak : {{jarak}} cm
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
      jarak: 1
    }
  },
  beforeMount() {
    socket.on('new-jarak', jarak => {
      this.jarak = jarak
    })
  },
  mounted() {
    let that = this
    socket.emit('last-jarak', function(jarak) {
      that.jarak = jarak
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
        axios.get(`/api/wemos/jarak/${i}`).then(res => {
          console.log(res)
        })
      }, 1000)
    }
  }
}
</script>