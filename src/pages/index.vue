<template>
  <div style="margin:0;padding:0;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="animated fadeInDown delay-1s">
  <path fill="#0099ff" fill-opacity="1" d="M0,256L60,256C120,256,240,256,360,229.3C480,203,600,149,720,106.7C840,64,960,32,1080,69.3C1200,107,1320,213,1380,266.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>
    <div class="row justify-content-center " style="height:75vh;">
      <div class="col-md-8">
        <div class="card animate__animated animate__backInDown">
          <div class="card-header text-center"><img src="@/static/logobtn.png" class="kinoLightBox img-fluid float-right" style="height:40px;">
          </div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="loginAuth" class="font-times">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">NIP</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="text"
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
              <!-- <p class="text-center font-times">Atau login menggunakan</p>
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
              </div> -->
            </form>
            <!-- <button type="button" @click="facebookAuth" class="btn btn-sm btn-outline-dark text-green btn-block  "><span class="typcn typcn-social-facebook-circular"></span> Facebook</button> -->
            <br />
            <p class="text-center text-xl">
              <span class="typcn typcn-group"></span>
            </p>
            <p class="p-2 font-times text-xl text-center font-italic">
              Silahkan login dengan akun yang sudah didaftarkan oleh <span class="font-bold">Admin</span> 
            </p>
            <!-- <p
              class="text-center font-times font-bold"
              @click="$router.push('/auth/register')"
            >Daftar</p> -->
          </div>
        </div>

      </div>
    </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,256L48,261.3C96,267,192,277,288,277.3C384,277,480,267,576,250.7C672,235,768,213,864,202.7C960,192,1056,192,1152,197.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
  </div>
</template>

<script>
import firebase from "firebase";
let db = firebase.firestore();

export default {
  data() {
    return {
      vdata: {
        email: "",
        password: ""
      },
      Oauth:false,
      cordova: false,
      error: null
    };
  },
  methods: {
    loginAuth() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.vdata.email+'@gmail.com', this.vdata.password)
        .then(data => {
          let user = {
            uid: data.user.uid,
            displayName: data.user.displayName,
            email: data.user.email,
            emailVerified: data.user.emailVerified
          };
          this.$store.commit("changeUsers", user);
          localStorage.setItem("users", JSON.stringify(user));
          this.$router.push("/lembur");
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
            emailVerified: data.user.emailVerified,
            emailnotif:data.user.email,
            changepassword:"true",
            unit:{
              nama_unit:"BELUM ADA"
            }

          };
          this.$store.commit("changeUsers", user);
          console.log('user',user)
          localStorage.setItem("users", JSON.stringify(user));
          // console.log('user',user)
          db.collection("users")
            .doc(data.user.uid)
            .set(user, { merge: true }).then(res=>{
              this.Oauth=true
              this.$router.push("/lembur");
            })
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
           this.Oauth=true
          this.$router.push("/lembur");
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
            "344034493973-h7mrkij6k43btmspsm2kardkqobnfjho.apps.googleusercontent.com",
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
                emailVerified: data.user.emailVerified,
             changepassword:"true",
            unit:{
              nama_unit:"BELUM ADA"
            }

              };
              that.$store.commit("changeUsers", user);
              localStorage.setItem("users", JSON.stringify(user));
               alert(JSON.stringify(user))
              console.log(JSON.stringify(user))
              db.collection("users")
                .doc(data.user.uid)
                .set(user, { merge: true }).then(res=>{
                  this.Oauth=true
                          that.$router.push("/lembur");
                })
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
    if(this.Oauth){

    }else{
      this.$store.dispatch("ceklogin", { true: "/lembur", false: true });
    }
    let that = this;
    document.addEventListener("deviceready", function() {
      that.cordova = true;
    });
  }
};
</script>