<template>
  <div>
    <p>LOGIN</p>
    <form action="#" @submit.prevent="login">
      <div class="sm-form">
        <label for="username">Your username</label>
        <input
          type="text"
          id="username"
          name="username"
          class="form-control form-control-sm"
          placeholder="username"
          v-model="vdata.username"
        />
      </div>
      <div class="sm-form">
        <label for="password">Your password</label>
        <input
          type="password"
          id="password"
          name="password"
          class="form-control form-control-sm"
          placeholder="password"
          v-model="vdata.password"
        />
      </div>
      <br />
      <hr class="style13" />
      <br />
      <button type="submit" class="btn btn-sm btn-outline-success btn-block">Login</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      vdata: {}
    };
  },
  methods: {
    login() {
      let fd = new FormData();
      fd.append("username", this.vdata.username);
      fd.append("password", this.vdata.password);
      axios
        .post("https://infolayanans.space/api/mysql/login.php", fd)
        .then(res => {
          localStorage.setItem("auth._token.local", res.data.token);
          localStorage.setItem("auth.local", res.data.token);
          this.$router.push("/testing/php");
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
          alert("username salah");
        });
    }
  }
};
</script>
