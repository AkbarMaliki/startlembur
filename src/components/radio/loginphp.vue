<template>
  <div>
    <div class="alert alert-danger" role="alert" v-if="errore">
      <strong>USERNAME ATAU PASSWORD SALAH</strong>
    </div>
    <form action @submit.prevent="login">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">username</label>
        <input
          id="username"
          placeholder="username"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          v-model="vdata.username"
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
      // this.vdata.password = md5(this.vdata.password);
      let fd = new FormData();
      fd.append("username", this.vdata.username);
      fd.append("password", this.vdata.password);
      axios
        .post(this.$store.state.database + "/api/mysql/login.php", fd)
        .then(res => {
          let token = res.data.token;
          localStorage.setItem("auth._token.local", token);
          let fd2 = new FormData();
          fd2.append("data", "select * from tbuser");

          axios
            .post(this.$store.state.database + "/api/mysql/getUser.php", fd2, {
              headers: {
                Authorization: localStorage.getItem("auth._token.local")
              }
            })
            .then(res => {
              console.log(res);
              this.$store.commit("changeUsers", res.data[0]);
              localStorage.setItem("users", JSON.stringify(res.data[0]));
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