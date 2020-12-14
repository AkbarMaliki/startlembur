<template>
 <div>
    <template v-if="$store.state.users">
        <div class="nav-item">{{$store.state.users.displayName}}</div>
        <div class="nav-item">{{$store.state.users.email}}</div>
            <a class="btn btn-sm btn-dark text-white" @click.prevent="logout">Logout</a>
    </template>
    <template v-else>
        <li class="nav-item">
            <router-link to="login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
            <router-link to="register" class="nav-link">Register</router-link>
        </li>
            <a class="btn btn-sm btn-dark text-white" @click.prevent="logout">Logout</a>
    </template>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
             this.$store.dispatch('logout')
        });
    }
  },
  beforeMount(){
    this.$store.dispatch('ceklogin',{true:true,false:true})
  },
  mounted() {
  },
};
</script>