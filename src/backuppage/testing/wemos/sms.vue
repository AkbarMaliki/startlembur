<template>
  <div>
    {{pesan}}
    <br>
    {{no}}
    <div class="sm-form">
      <label for="pesan">Your pesan</label>
      <input
        type="text"
        id="pesan"
        name="pesan"
        class="form-control form-control-sm"
        placeholder="pesan"
        v-model="pesan"
      >
    </div>
    <div class="sm-form">
      <label for="no">Your no</label>
      <input
        type="number"
        id="no"
        name="no"
        class="form-control form-control-sm"
        placeholder="no"
        v-model="no"
      >
    </div>
    <br>
    <br>
    <button type="button" @click="kirim" class="btn btn-sm btn-primary">kirim</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      no: '6282251970006',
      pesan: 'kosong'
    }
  },
  methods: {
    kirim() {
      axios.get(`http://192.168.43.30/sms?pesan=${this.pesan}&no=${this.no}`)
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