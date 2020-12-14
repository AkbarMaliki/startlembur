<template>
  <div class="container">
    <br />
    <br />
    <br />
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="loginAuth">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="vdata.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="vdata.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-12 text-center">
                  <button type="submit" class="btn btn-primary font-times">
                    <span class="typcn typcn-key"></span> Login
                  </button>
                </div>
              </div>
              <br />
              <p class="text-center font-times">Atau login menggunakan</p>
              <br />
              <div v-if="cordova">
                <div class="col-md-12" @click="cordovaGoogleAuth">
                  <a class="btn btn-lg btn-outline-secondary text-sm btn-block" href="#">
                    <img
                      class="float-left pt-1"
                      src="https://img.icons8.com/color/16/000000/google-logo.png"
                    />Login Dengan Google
                  </a>
                </div>
              </div>
              <div v-else>
                <div class="col-md-12" @click="googleAuth">
                  <a class="btn btn-lg btn-outline-secondary text-sm btn-block" href="#">
                    <img
                      class="float-left pt-1"
                      src="https://img.icons8.com/color/16/000000/google-logo.png"
                    />Login Dengan Google
                  </a>
                </div>
              </div>
            </form>
            <!-- <button type="button" @click="facebookAuth" class="btn btn-sm btn-outline-dark text-green btn-block  "><span class="typcn typcn-social-facebook-circular"></span> Facebook</button> -->
            <br />
            <p
              class="text-center font-times font-bold"
              @click="$router.push('/auth/register')"
            >Daftar</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
let db = firebase.firestore()

export default {
  data() {
    return {
      vdata: {
        email: "",
        password: ""
      },
      cordova: false,
      error: null
    };
  },
  methods: {
    loginAuth() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.vdata.email, this.vdata.password)
        .then(data => {
          let user = {
            uid: data.user.uid,
            displayName: data.user.displayName,
            email: data.user.email,
            emailVerified: data.user.emailVerified
          };
          this.$store.commit("changeUsers", user);
          localStorage.setItem("users", JSON.stringify(user));
          this.$router.push("/driver");
        })
        .catch(err => {
          this.error = err.message;
        });
    },
    googleAuth() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(data => {
          let user = {
            uid: data.user.uid,
            displayName: data.user.displayName,
            email: data.user.email,
            emailVerified: data.user.emailVerified
          };
          this.$store.commit("changeUsers", user);
          localStorage.setItem("users", JSON.stringify(user));
          db.collection("users")
            .doc(data.user.uid)
            .set(user, { merge: true });
          this.$router.push("/driver");
        })
        .catch(err => {
          alert("Oops. " + err.message);
        });
    },
    facebookAuth() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(data => {
          let user = {
            uid: data.user.uid,
            displayName: data.user.displayName,
            email: data.user.email,
            emailVerified: data.user.emailVerified
          };
          this.$store.commit("changeUsers", user);
          localStorage.setItem("users", JSON.stringify(user));
          this.$router.push("/driver");
        })
        .catch(err => {
          alert("Oops. " + err.message);
        });
    },
    cordovaGoogleAuth() {
      let that = this;
      window.plugins.googleplus.login(
        {
          webClientId:
            "982792415014-st7meu0nlkd62kehukd5ssi62atg2f9n.apps.googleusercontent.com",
          offline: true
        },
        function(obj) {
          firebase
            .auth()
            .signInWithCredential(
              firebase.auth.GoogleAuthProvider.credential(obj.idToken)
            )
            .then(data => {
              let user = {
                uid: data.user.uid,
                displayName: data.user.displayName,
                email: data.user.email,
                emailVerified: data.user.emailVerified
              };
              that.$store.commit("changeUsers", user);
              localStorage.setItem("users", JSON.stringify(user));
              db.collection("users")
                .doc(data.user.uid)
                .set(user, { merge: true });
              that.$router.push("/driver");
            })
            .catch(err => {
              alert("Oops. " + err.message);
            });
        },
        function(msg) {
          alert("error: " + msg);
        }
      );
    }
  },
  mounted() {
    this.$store.dispatch("ceklogin", { true: "/driver", false: true });
    let that = this;
    document.addEventListener("deviceready", function() {
      that.cordova = true;
    });
  }
};
</script>