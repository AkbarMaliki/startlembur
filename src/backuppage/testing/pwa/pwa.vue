<template>
  <div>
    {{subsss}}
       membuat ICON GENERATOR : 
    <a href="https://realfavicongenerator.net/">https://realfavicongenerator.net/</a>
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
      vdata:{
        content:"content",
        title:"title",
        url: {
        link : "http://localhost:8080",
      },
        id_penerima:"1",
        timestamp: Date.now() + 32400000
      }
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
    kirim() {
    
      let fd = new FormData()
      fd.append('data',JSON.stringify(this.vdata))
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
              this.confPushSub()
              console.log('notifikasi aktif')
            }
          })
        } else {
          alert('notifikasi tidak didukung ')
        }
      },
      confPushSub() {
        let that = this
        if (!('serviceWorker' in navigator)) {
          // cek apakah service worker ada/tidak
          return
        }
        navigator.serviceWorker.ready.then(function(sw) {
          console.log(sw)
          sw.pushManager.getSubscription().then(sub => {
            // cek apakah device ini sudah subscribe atau belum
            if (sub === null) {
              sw.pushManager
                .subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: that.urlB64ToUint8Array('BHb6hCsHUmbFb8xXLP46iv_xzns76xPniKia5FiBC1sd7RiAiMuRnv1MbGo-ey5oKYwb_UIo9PBWB-yIrlHJ184')
                })
                .then(subscription => {
                  console.log('Subscribe OK:', subscription)
                  that.subsss = subscription
                  let fd = new FormData()
                  fd.append('data', `insert into subs (subs) values ('${JSON.stringify(subscription.toJSON())}')`)//database setting di server
                  fd.append('database','loandocument')
                  axios.post('http://localhost:8080/api/mysql/auto.php', fd
                  , {
                      headers: {
                      Authorization: localStorage.getItem('auth._token.local')
                      }
                  }).then(res => {
                      console.log(res)
                      this.$forceUpdate()
                  })
                })
                .then((res) => {
                  console.log(res);
                  that.aktif = false
                  localStorage.setItem('subscribe', true)
                  that.newNotif('Berhasil Subscribe')
                })
                .catch(err => {
                  console.log('Subscribe Error:', err)
                })
            } else {
              // that.newNotif('Subscribtion sudah ada')
            }
          })
        })
      },
      newNotif(msg) {
        // cek apakah service worker sudah teregister
        let opt = {
          body: msg, //adalah text dari notifikasi yang lebih jelas dari title
          icon: 'http://localhost:8080/api/icon.png', // bisa url ke luar atau local image
          // image: '../icon.png', // memunculkan image di notifikasi
          dir: 'ltr', // left to right (ltr) atau right to left (rtl)
          lang: 'en-US', //standard
          vibrate: [100, 50, 200], // device bergetar apabila ada notifikasi
          badge: 'http://localhost:8080/api/icon.png', // icon kecil di drawer
          // sound: '../notif.mp3', // sound saat notifikasi masuk (belum semua support)
          //! advance option
          // tag: 'confirm-notification', // kita men set tag agar notifikasi tidak menstack di device
          // renotify: true, // apabila tag sama di dalam beberapa notifikasi, maka status notifikasi akan dianggap baru dan device akan bergetar, jadi apabila false maka tag sama device tidak akan bergetar
          // actions: [
          //   //! list aksi saat notifikasi di pilih
          //   {
          //     action: 'confirm',
          //     title: 'Yes',
          //     icon: '../icon.png'
          //   },
          //   {
          //     action: 'cancel',
          //     title: 'No',
          //     icon: '../icon.png'
          //   }
          // ]
        }
        //! cara memunculkan notifikasi dengan windows object
        // new Notification('new notif', opt)
        //! cara menjalankan notifikasi dari service worker melalui navigator
        if ('serviceWorker' in navigator) {
          // apabila service worker ada , maka jalankan notifikasi melalui service worker
          navigator.serviceWorker.ready.then(function(sw) {
            // service worker menjalankan notifikasi
            sw.showNotification('Subscribe', opt)
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