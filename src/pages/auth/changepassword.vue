<template>
  <div>
    {{$store.state.users}}
      <div class="sm-form ">
          <label for="password">password</label>
          <input type="password" id="password" name="password" class="form-control form-control-sm" placeholder="password" v-model="vdata.password" >
      </div>
       <div class="sm-form ">
          <label for="password">re password</label>
          <input type="password" id="password" name="password" class="form-control form-control-sm" placeholder="password" v-model="vdata.password2" >
      </div>
      <p class="p-2 font-bold text-red" v-show="vdata.password!=vdata.password2">Password Tidak Sama!</p>
      <button type="button" @click="changePasswword()" class="btn btn-sm btn-primary  "><span class="typcn typcn-key"></span> Change Password</button>
      <hr class="style13">
      <button type="button" @click="$store.dispatch('logout')" class="btn btn-sm btn-dark">Logout</button>
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
        },
        error => {
            alert('gagal ganti password')
          // An error happened.
        }
      );
    }
  },
  beforeMount() {
    this.$store.dispatch('ceklogin',{true:true,false:'/auth/login'});
  },
  mounted() {}
};
</script>