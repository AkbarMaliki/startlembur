<template>
  <div>
    {{subsss}}
    <button type="button" @click="install" class="btn btn-sm btn-secondary">Install</button>
    <br>
    <input type="text" id="title" name="title" class="form-control form-control-sm" placeholder="title" v-model="vdata.title" >
    <br>
    <input type="text" id="content" name="content" class="form-control form-control-sm" placeholder="content" v-model="vdata.content" >
    <br>
    <input type="text" id="url" name="url" class="form-control form-control-sm" placeholder="url" v-model="vdata.url" >
    <button type="button" @click="kirim" class="btn btn-sm btn-primary  ">SEND Notification</button>
  </div>
</template>
<script>
import axios from 'axios'
var deferredPrompt;
export default{
  data(){
    return{
    
    }
  },
  mounted() {
    this.subscribe()
      window.addEventListener("beforeinstallprompt", function(e) {
        e.preventDefault();
        deferredPrompt = e;
      });
  },
  methods: {
  kirim(id) {
      let fd = new FormData()
      fd.append('datanya',JSON.stringify({
        content:"aaaa",
        title:"title",
        url: {
        link : "http://localhost:8080",
      }}))
      fd.append('data',`select notifid from user where id="${id}"`);
      fd.append('database','loandocument')
      axios
        .post("http://localhost:8080/api/send_push_notification.php", fd)
        .then(res => {
          console.log(res);
        });
    },
    install() {
      console.log(deferredPrompt)
      if (deferredPrompt !== undefined) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function(choiceResult) {
          if (choiceResult.outcome == "dismissed") {
            console.log("User cancelled home screen install");
          } else {
            console.log("User added to home screen");
          }
          deferredPrompt = null;
        });
      }
    },
     subscribe() {
        if ('Notification' in window) {
          Notification.requestPermission(result => {
            // cek apakah user menerima notifiksinya
            if (result !== 'granted') {
              console.log('notifikasi tidak di perbolehkan')
            } else {
               let that = this
                if (!('serviceWorker' in navigator)) {
                  return
                }
                navigator.serviceWorker.ready.then(function(sw) {
                  console.log(sw)
                  sw.pushManager.getSubscription().then(sub => {
                    if (sub === null) {
                      sw.pushManager
                        .subscribe({
                          userVisibleOnly: true,
                          applicationServerKey: that.urlB64ToUint8Array('BHb6hCsHUmbFb8xXLP46iv_xzns76xPniKia5FiBC1sd7RiAiMuRnv1MbGo-ey5oKYwb_UIo9PBWB-yIrlHJ184')
                        })
                        .then(subscription => {
                          console.log('Subscribe OK:', subscription)
                          that.subsss = subscription
                          localStorage.setItem('notifid',JSON.stringify(subscription.toJSON()))
                        })
                        .catch(err => {
                          console.log('Subscribe Error:', err)
                        })
                    } else {
                    }
                  })
               })
              console.log('notifikasi aktif')
            }
          })
        } else {
          alert('notifikasi tidak didukung ')
        }
      },
       login () {
        //  CONTOH METHOD LOGIN DIMANA MENARUH notifid ke user yang login
      console.log(this.vdata.username , this.vdata.password,  md5(this.vdata.password))
      if(this.vdata.username == 'admin' && this.vdata.password == 'btnkantorcabangbanjarbaru'){
        this.$router.push('/driver/admin')
      }else{
      let fd = new FormData()
      fd.append('username', this.vdata.username)
      fd.append('password', md5(this.vdata.password))
      axios
        .post('http://localhost:8080/api/mysql/ld/login.php', fd)
        .then(res => {
          // alert('sukses')
          console.log(res)
          localStorage.setItem('auth._token.local', res.data.token)
          localStorage.setItem('auth.local', res.data.token)
          let fd2 = new FormData()
          fd2.append('data', 'select * from user')
          axios
            .post('http://localhost:8080' + '/api/mysql/ld/getUser.php', fd2, {
              headers: {
                Authorization: localStorage.getItem('auth._token.local')
              }
            })
            .then(res => {
              console.log(res)
              this.$store.commit('changeUsers', res.data[0])
              localStorage.setItem('users', JSON.stringify(res.data[0]))
              console.log(res.data[0])
              let fd = new FormData()
              fd.append('data', `update user set notifid='${localStorage.getItem('notifid')}' where id='${res.data[0].id}'`)//database setting di server
              fd.append('database','loandocument')
              axios.post('http://localhost:8080/api/mysql/auto.php', fd
              , {
                  headers: {
                  Authorization: localStorage.getItem('auth._token.local')
                  }
              }).then(res => {
                  console.log(res)
                  this.$forceUpdate()
                  this.$router.push('/ld/')
              })
            })
        })
        .catch(err => {
          alert('username salah')
        })
      }
    },
      urlB64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
        const base64 = (base64String + padding)
          .replace(/\-/g, '+')
          .replace(/_/g, '/')
        const rawData = window.atob(base64)
        const outputArray = new Uint8Array(rawData.length)
        for (let i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i)
        }
        return outputArray
      }
  },
}
</script>