<template>
  <div>
    <div class="alert alert-danger" role="alert" v-if="errore">
      <strong>EMAIL ATAU PASSWORD SALAH</strong>
    </div>
    <form action @submit.prevent="login">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">email</label>
        <input
          id="email"
          placeholder="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          v-model="vdata.email"
        />
      </div>
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">password</label>
        <input
          id="password"
          placeholder="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          v-model="vdata.password"
        />
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="btn btn-sm btn-outline-primary"
          style="font-family: 'Cantata One', serif;"
        >
          LOGIN
          <span class="typcn typcn-arrow-forward"></span>
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
const md5 = require("md5");
export default {
  data() {
    return {
      errore: false,
      vdata: {}
    };
  },
  methods: {
    register() {
      this.$nuxt.$emit("login", "register");
    },
    login() {
      let that = this;
      axios
        .post(this.$store.state.database + "/api/auth/login", this.vdata)
        .then(res => {
          let token = "bearer " + res.data;
          axios
            .post(this.$store.state.database + "/api/auth/user", this.vdata, {
              headers: {
                Authorization: token
              }
            })
            .then(res => {
              console.log(res);
              localStorage.setItem("auth._token.local", token);
              localStorage.setItem("auth.local", token);
              that.$store.commit("changeUser", res.data);
              //! redirect kemana  jika berhasil login
              that.$router.push("/app");
            });
        })
        .catch(err => {
          console.log(err);
          that.errore = true;
        });
    }
  }
};
</script>