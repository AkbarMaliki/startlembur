<template>
  <div>
    <template v-if="aktif">
      <div class="tips" style="width:100%;">
        <button
          type="button"
          @click="subscribe"
          class="btn btn-sm btn-outline-success btn-block font-times"
        >
          Subscribe
          <span class="typcn typcn-bell" style="font-size:20px;"></span>
        </button>
        <span class="tipstextT">Aktifkan Notifikasi</span>
      </div>
    </template>
    <template v-else>
      <div class="tips" style="width:100%;">
        <button
          type="button"
          disabled
          class="btn btn-sm btn-outline-secondary btn-block font-times"
        >
          Subscribe
          <span class="typcn typcn-bell" style="font-size:20px;"></span>
        </button>
        <span class="tipstextT">Sudah Subscribe</span>
      </div>
    </template>
  </div>
</template>
<script>
const keys = require('@/application-keys.json')
export default {
  data() {
    return {
      aktif: true
    }
  },
  mounted() {
    let that = this
    this.$nuxt.$on('subscribe', data => {
      that.aktif = false
    })
    if (!('Notification' in window)) {
      console.log('This browser does not support desktop notification')
    } else {
      let subscribe = localStorage.getItem('subscribe')
      if (subscribe) {
        that.aktif = false
      } else {
        that.aktif = true
      }
    }
  },
  methods: {
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
                applicationServerKey: that.urlB64ToUint8Array('BJUSmaFFmfjl8uvxY2h2A_-gccjB9AH68pwEm347rwiDhugF4KxznF5mSNS7JRa4Lah-QzPzQLuvjG1AaQJYE-U')
              })
              .then(subscription => {
                console.log('Subscribe OK:', subscription)
                return fetch('https://infolayanans.now.sh/api/pwa/subscription', {
                  method: 'POST',
                  body: JSON.stringify(subscription.toJSON()),
                  headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                  }
                })
              })
              .then(() => {
                that.aktif = false
                localStorage.setItem('subscribe', true)
                that.newNotif('Berhasil Subscribe')
              })
              .catch(err => {
                console.log('Subscribe Error:', err)
              })
          } else {
            that.newNotif('Subscribtion sudah ada')
          }
        })
      })
    },
    newNotif(msg) {
      // cek apakah service worker sudah teregister
      let opt = {
        body: msg, //adalah text dari notifikasi yang lebih jelas dari title
        icon: 'https://infolayanans.space/api/icon.png', // bisa url ke luar atau local image
        // image: '../icon.png', // memunculkan image di notifikasi
        dir: 'ltr', // left to right (ltr) atau right to left (rtl)
        lang: 'en-US', //standard
        vibrate: [100, 50, 200], // device bergetar apabila ada notifikasi
        badge: 'https://infolayanans.space/api/icon.png', // icon kecil di drawer
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
  }
}
</script>