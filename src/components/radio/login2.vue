<template>
  <div>
    <div class="alert alert-danger animated slideInDown" role="alert" v-if="errore">
      <strong>NIK TIDAK DITEMUKAN</strong>
    </div>
    <form action @submit.prevent="login">
      <div class="tips" style="width:100%;">
        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="username">NIK</label>
          <input
            id="username"
            placeholder="NIK"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="vdata.NIK"
          />
        </div>
        <span class="tipstextB">contoh : 63060443xxxxxxx</span>
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
      let fd = new FormData();
      fd.append("NIK", this.vdata.NIK);
      axios.post("https://kantorbambans.online/cekuser.php", fd).then(res => {
        console.log(res.data.length);
        if (res.data.length > 0) {
          console.log(res.data[0]);
          this.$store.commit("changeUsers", res.data[0]);
          localStorage.setItem("users", JSON.stringify(res.data[0]));
          this.$router.push("/app2");
        } else {
          this.errore = true;
        }
      });
      //   let that = this;
      //   this.vdata.password = md5(this.vdata.password);
      //   axios
      //     .post(this.$store.state.url + "/api/auth/login", this.vdata)
      //     .then(res => {
      //       let token = "bearer " + res.data.token.accessToken;
      //       axios
      //         .get(this.$store.state.url + "/api/auth/user", {
      //           headers: {
      //             Authorization: token
      //           }
      //         })
      //         .then(res => {
      //           localStorage.setItem("auth._token.local", token);
      //           localStorage.setItem("auth.local", token);
      //           that.$store.commit("changeUser", res.data.user);
      //           //! redirect kemana  jika berhasil login
      //         });
      //     })
      //     .catch(err => {
      //       that.errore = true;
      //     });
    }
  }
};
</script>