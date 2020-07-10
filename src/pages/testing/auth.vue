<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <form action="#" @submit.prevent="loginLocal">
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
            <button class="btns btns-sm bg-black text-white" type="submit">Login</button>
          </form>
        </div>
        <div class="col-sm-6"></div>
      </div>
    </div>
    <br />
    <button type="button" @click="logout" class="btn btn-sm btn-danger btn-block">logout</button>
    <hr class="style13" />
    <button type="button" @click="loginGoogle" class="btn btn-sm btn-danger">login google</button>
    <button type="button" @click="loginFacebook" class="btn btn-sm btn-primary">login facebook</button>

    <button type="button" id="cek" @click="cek" class="btn btn-sm btn-warning">cek</button>
    <br />
    <br />
    <br />
    <button type="button" @click="$router.go(-1)" class="btn btn-sm btn-primary">KEMBALI</button>
    <br />
    <hr class="style2" />
    {{$store.state.user}}
    {{result}}
    {{vdata}}
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      vdata: {},
      result: {}
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
        "https://banua.now.sh/api/auth/login",
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
            "https://banua.now.sh/api/auth/user",
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
            "https://banua.now.sh/api/auth/login",
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
                "https://banua.now.sh/api/auth/user",
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
      facebookConnectPlugin.login(
        ["public_profile", "email"],
        function(result) {
          console.log(JSON.stringify(result));
          facebookConnectPlugin.api(
            "/me?fields=email,name,picture",
            ["public_profile", "email"],
            function(userData) {
              alert(JSON.stringify(userData));
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
    cek() {
      alert("start");
      cordovaHTTP.post(
        "https://banua.now.sh/api/auth/login",
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
