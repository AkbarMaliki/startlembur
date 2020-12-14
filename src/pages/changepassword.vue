<template>
  <div>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="animated fadeInDown">
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,256L60,256C120,256,240,256,360,229.3C480,203,600,149,720,106.7C840,64,960,32,1080,69.3C1200,107,1320,213,1380,266.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
    </svg>
    <div class="p-3 animate__animated animate__backInRight">
      <p class="text-center font-bold text-uppercase">Ganti Password</p>
      <div class="sm-form ">
          <label for="password" class="text-capitalize font-bold pl-2 font-times">password</label>
          <input type="password" id="password" name="password" class="form-control form-control-sm" placeholder="password" v-model="vdata.password" >
      </div>
       <div class="sm-form ">
          <label for="password" class="text-capitalize font-bold pl-2 pt-2 font-times">re password</label>
          <input type="password" id="password" name="password" class="form-control form-control-sm" placeholder="password" v-model="vdata.password2" >
      </div>
      <p class="p-2 font-bold text-red" v-show="vdata.password!=vdata.password2">Password Tidak Sama!</p>
      <br>
      <div class="text-center">
      <button type="button" @click="changePasswword()" class="btn btn-sm btn-style9  " style="background: rgb(207,242,227);
background: linear-gradient(349deg, rgba(207,242,227,0.5410539215686274) 0%, rgba(25,194,230,1) 54%, rgba(229,232,108,0.8603816526610644) 97%);"><span class="typcn typcn-key"></span> Change Password</button>
      </div>
      <hr class="style13">
      <!-- <button type="button" @click="$store.dispatch('logout')" class="btn btn-sm btn-dark">Logout</button> -->
  </div>
    </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
let db = firebase.firestore();
export default {
  data() {
    return {
        vdata:{}
    };
  },
  methods: {
    changePasswword() {
      let user = firebase.auth().currentUser;
      console.log(user)
      let newPassword = this.vdata.password;
      user.updatePassword(newPassword).then(
        () => {
            alert('success ganti password')
          // Update successful.
            this.$store.dispatch('logout')
            this.$router.push('/')
          db.collection('users').doc(this.$store.state.users.id).set({changepassword:"true"},{merge:true}).then(res=>{
          })
        },
        error => {
            alert('gagal ganti password')
          // An error happened.
        }
      );
    }
  },
  beforeMount() {
    // this.$store.dispatch('ceklogin',{true:true,false:'/auth/login'});
  },
  mounted() {}
};
</script>