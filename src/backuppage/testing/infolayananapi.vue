<template>
  <div>
    <div class="text-center">
      <p>TEST API</p>
    </div>
    <h2 class="text-center">TEST EMAIL</h2>
    <form action @submit.prevent="email">
      <div class="sm-form">
        <label for="subject">Your subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          class="form-control form-control-sm"
          placeholder="subject"
          v-model="vdata.subject"
        />
      </div>
      <div class="sm-form">
        <label for="isi">Your isi</label>
        <input
          type="text"
          id="isi"
          name="isi"
          class="form-control form-control-sm"
          placeholder="isi"
          v-model="vdata.isi"
        />
      </div>
      <button type="submit" class="btn btn-sm btn-primary btn-block">test</button>
    </form>
    <h2 class="text-center">TEST SMS</h2>
    <form action @submit.prevent="sms">
      <div class="sm-form">
        <label for="no">Your tujuan</label>
        <input
          type="text"
          id="no"
          name="no"
          class="form-control form-control-sm"
          placeholder="no"
          v-model="vdata.no"
        />
      </div>
      <div class="sm-form">
        <label for="text">Your text</label>
        <input
          type="text"
          id="text"
          name="text"
          class="form-control form-control-sm"
          placeholder="text"
          v-model="vdata.text"
        />
      </div>
      <div class="sm-form">
        <label for="dari">dari kirim</label>
        <input
          type="text"
          id="dari"
          name="dari"
          class="form-control form-control-sm"
          placeholder="dari"
          v-model="vdata.dari"
        />
      </div>
      <button type="submit" class="btn btn-sm btn-primary btn-block">test</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      vdata: {}
    }
  },
  methods: {
    email() {
      let arr = ['taufikakbarmalikitkj@gmail.com']
      let fd = new FormData()
      fd.append('to', JSON.stringify(arr))
      fd.append('subject', `${this.vdata.subject}`)
      fd.append('text', `${this.vdata.isi}`)
      axios
        .post(this.$store.state.database + '/api/email/kirim', fd)
        .then(res => {
          console.log(res)
        })
    },
    sms() {
      let fd = new FormData()
      fd.append('no', `${this.vdata.no}`)
      fd.append('dari', `${this.vdata.dari}`)
      fd.append('text', `${this.vdata.text}`)
      axios
        .post(this.$store.state.database + '/api/sms/kirim', fd)
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>