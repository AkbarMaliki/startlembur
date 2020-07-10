<template>
  <div>
    change password
  </div>
</template>
<script>
import axios from 'axios'
import firebase from 'firebase'
let db = firebase.firestore()
export default{
  data(){
    return{

    }
  },
  methods:{

  },
  mounted() {
    db.collection('users').doc(this.$store.state.users.uid).set({changepassword:"true"},{merge:true}).then(res=>{
      this.$router.push('/lembur')
    })
  },
}
</script>