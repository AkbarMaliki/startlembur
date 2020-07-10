<template>
  <div>
    <!-- REGISTER -->
    <form action @submit.prevent="register">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">username</label>
        <input
          id="username"
          placeholder="username"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          v-model="vdata.username"
        >
      </div>
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">email</label>
        <input
          id="email"
          placeholder="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          v-model="vdata.email"
        >
      </div>
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">password</label>
        <input
          id="password"
          placeholder="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          v-model="vdata.password"
        >
      </div>
      <button type="submit" class="btn btn-sm btn-primary btn-block">
        SIGN UP
        <span class="typcn typcn-arrow-right"></span>
      </button>
    </form>
    <button type="button" @click="login" class="btn btn-sm btn-outline-secondary">Login</button>
  </div>
</template>
<script>
import axios from 'axios'
const md5 = require('md5')
export default {
  data() {
    return {
      vdata: {}
    }
  },
  methods: {
    login() {
      this.$nuxt.$emit('login', 'login')
    },
    register() {
      let vm = this
      this.vdata.password = md5(this.vdata.password)
      axios
        .post(this.$store.state.url + '/api/auth/register', this.vdata)
        .then(res => {
          if (res.data.message) {
            this.error = res.data.message
            let msg = res.data.message.split(' ')[0]
            if (msg == 'username') {
              this.usernameErr = true
            } else {
              this.emailErr = true
            }
          } else {
            vm.callB = true
            setTimeout(() => {
              vm.callB = false
              vm.$router.push('/login')
            }, 2000)
          }
          // this.$router.push('/')
        })
    },
    resetEmail() {
      this.emailErr = false
    },
    resetUsername() {
      this.usernameErr = false
    }
  }
}
</script>