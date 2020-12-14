<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <br>
          <hr class="style13">
          <div
            v-if="errore"
            class="alert alert-danger text-center"
            role="alert"
          >Username / Password salah</div>
          <div class="text-center font-bold uppercase font-times">Login</div>
          <form
            action="#"
            @submit.prevent="loginLocal"
            style="font-family:times new roman;line-height:0.5;"
          >
            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="username">Username</label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                v-model="vdata.username"
              >
            </div>
            <br>
            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="password"
                v-model="vdata.password"
              >
            </div>
            <br>
            <br>
            <br>
            <div class="text-center">
              <button class="btns btns-sm bg-black text-white" type="submit">Login</button>
              <br>
              <br>
              <p style="line-height:1.5">Belum punya akun ?
                <router-link to="/register">Daftar</router-link>
              </p>
            </div>
          </form>
        </div>
        <div class="col-sm-6" style="box-shadow:1px 4px 4px gray;border-radius:5%;">
          <div class="bg-white text-black rounded-lg p-10 text-center">
            <template class="d-none d-sm-block">
              <div style="height:20px;"></div>
            </template>
            <div class="text-center font-bold font-times">Daftar/Masuk dengan Akun Social :</div>
            <button type="button" @click="loginGoogle" class="btn btn-sm btn-danger btn-block">
              <span class="typcn typcn-social-google-plus"></span> Google
            </button>
            <button type="button" @click="loginFacebook" class="btn btn-sm btn-primary btn-block">
              <span class="typcn typcn-social-facebook-circular"></span> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
    <br>
    <hr class="style13">
    <button type="button" @click="logout" class="btn btn-sm btn-danger btn-block">logout</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      vdata: {},
      result: {},
      errore: false
    };
  },
  methods: {
    loginLocal() {
      let that = this;
      var options = {
        method: "post",
        data: { username: that.vdata.username, password: that.vdata.password }
        // headers: { Authorization: 'OAuth2: token' }
      };
      cordova.plugin.http.sendRequest(
        this.$store.state.url + "/api/auth/login",
        options,
        function(res) {
          let token = JSON.parse(res.data);
          token = "bearer " + token.token.accessToken;
          console.log(token);
          localStorage.setItem("auth._token.local", token);
          var options = {
            method: "get",
            headers: { Authorization: token }
          };
          cordova.plugin.http.sendRequest(
            this.$store.state.url + "/api/auth/user",
            options,
            function(res) {
              let user = JSON.parse(res.data).user;
              that.$store.commit("changeUser", user);
            },
            function(error) {
              that.errore = true;
            }
          );
        },
        function(error) {
          that.errore = true;
        }
      );
    },
    logout() {
      this.$store.commit("changeUser", false);
      localStorage.removeItem("auth._token.local");
      localStorage.removeItem("auth._token.google");
      localStorage.removeItem("auth._token.facebook");
    },
    loginGoogle() {
      let that = this;
      window.plugins.googleplus.login(
        {},
        function(result) {
          var options = {
            method: "post",
            data: { ...result, oAuth: true }
            // headers: { Authorization: 'OAuth2: token' }
          };
          cordova.plugin.http.sendRequest(
            this.$store.state.url + "/api/auth/login",
            options,
            function(res) {
              let token = JSON.parse(res.data);
              token = "bearer " + token.token.accessToken;
              console.log(token);
              localStorage.setItem("auth._token.local", token);
              var options = {
                method: "get",
                headers: { Authorization: token }
              };
              cordova.plugin.http.sendRequest(
                this.$store.state.url + "/api/auth/user",
                options,
                function(res) {
                  let user = JSON.parse(res.data).user;
                  that.$store.commit("changeUser", user);
                },
                function(error) {
                  // prints 403
                }
              );
            },
            function(error) {
              // prints 403
            }
          );
        },
        function(error) {
          alert(JSON.stringify(error));
        }
      );
    },
    loginFacebook() {
      let that = this;
      facebookConnectPlugin.login(
        ["public_profile", "email"],
        function(result) {
          console.log(JSON.stringify(result));
          facebookConnectPlugin.api(
            "/me?fields=email,name,picture",
            ["public_profile", "email"],
            function(userData) {
              let picture = userData.picture.data.url;
              var options = {
                method: "post",
                data: {
                  ...userData,
                  picture: picture,
                  verified: true,
                  oAuth: true
                }
                // headers: { Authorization: 'OAuth2: token' }
              };
              cordova.plugin.http.sendRequest(
                this.$store.state.url + "/api/auth/login",
                options,
                function(res) {
                  let hasil = JSON.parse(res.data);
                  let token = "bearer " + hasil.token.accessToken;
                  var options = {
                    method: "get",
                    headers: { Authorization: token }
                  };
                  cordova.plugin.http.sendRequest(
                    this.$store.state.url + "/api/auth/user",
                    options,
                    function(res) {
                      let user = JSON.parse(res.data).user;
                      that.$store.commit("changeUser", { ...user });
                    },
                    function(error) {
                      // prints 403
                    }
                  );
                },
                function(error) {
                  // prints 403
                }
              );
            },
            function(error) {
              alert(JSON.stringify(error));
            }
          );
        },
        function(error) {
          alert(JSON.stringify(error));
        }
      );
    },
    async facebookG() {
      alert("sup");
    },
    cek() {
      alert("start");
      cordovaHTTP.post(
        this.$store.state.url + "/api/auth/login",
        {
          username: "akbar",
          password: "akbar"
        },
        { Authorization: "OAuth2: token" },
        function(res) {
          // prints 200
          alert(JSON.stringify(res));
        },
        function(response) {
          console.log(response.error);
        }
      );
    }
  },
  mounted() {}
};
</script>