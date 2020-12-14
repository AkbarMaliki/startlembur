<template>
  <div>
      <div class="text-center">
        <button type="button" @click="fingerauth" class="btn btn-sm btn-primary  ">Finger auth</button>
      </div>
  </div>
</template>
<script>
import axios from 'axios'
import { 
    solveRegistrationChallenge,
    solveLoginChallenge
} from '@webauthn/client';
export default{
  methods: {
    fingerauth(){
      let fd = new FormData()
      axios.post('https://us-central1-vuez-63625.cloudfunctions.net/app/fingerregister',{id:"uuid",email:"maliki@gmail.com"}).then(res=>{
            solveRegistrationChallenge(res.data).then(credential=>{
              axios.post('https://us-central1-vuez-63625.cloudfunctions.net/app/fingerlogin',credential).then(res3=>{
                console.log(res3)
                alert('login berhasil')
              })
            });
      })
    //   console.log('registration failed');
    }
  },
}
</script>