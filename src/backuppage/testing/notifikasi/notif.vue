<template>
    <div>
        <!-- 
            PAGE $Store.state.users harus dalam kondisi login
        table 
        id, id_user, dibaca, app, link, text, button, tanggal 
        data yang penting adalah app yang membedakan notifikasi aplikasi yang mana
        -->
        <!-- NOTIFIKASI NUMBER -->
        <p class="btn btn-sm btn-danger shadow-lg" @click="dibaca">{{notifn}}</p>
        <!-- BOX NOTIFKASI -->
       <div style="overflow-y:scroll;height:400px;">
            <div v-for="(item, index) in notifs" :key="index+'notifikasi'" 
              @click="$router.push(item.link)" 
              class="p-2 shadow-inner rounded-lg border-1 cursor-pointer"
              >{{item.text}} 
            <br>
            <span class="text-xs">{{distanceToNow(item.tanggal)}} yang lalu</span></div>
            </div>
          </div>
    </div>
</template>
<script>
import axios from "axios";
import socket from "@/plugins/socket.io.js";
var id = require("date-fns/locale/id");
export default {
  data() {
    return {
      notifs:[],
      notifn:[]
    };
  },
  beforeMount() {
      let that = this;
      socket.on("new-message", message => {
      if(message.target_id==that.$store.state.users.id && message.app=='driver'){
          that.refreshNotif()
          //  CORDOVA
          document.addEventListener('deviceready', function () {
              cordova.plugins.notification.local.schedule({
                  title: 'BTN Banjarbaru',
                  text: message.text
              });
              cordova.plugins.notification.local.on('click', function (notification, eopts) { 
                  setTimeout(() => {
                      that.$router.push(message.link)
                  }, 1000);
              });
          })
      }
    });
  },
  methods: {
      refreshNotif(){
           let fd = new FormData()
            fd.append('data', `select * from notifikasi where id_user='${this.$store.state.users.id}' AND app='driver' order by id desc`)
            fd.append('database', ' infolay3_test')
            axios.post('https://infolayanan.site/api/mysql/auto.php', fd
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
                let data = res.data.filter(e=>{
                    return e.dibaca=='false'
                })
                this.notifs = res.data
                this.notifn = data.length
                this.$forceUpdate()
            })
      },
    dibaca(){
        let fd = new FormData()
        fd.append('data', `update notifikasi set dibaca='true' where id_user='${this.$store.state.users.id}' AND app='driver'`)
        fd.append('database', ' infolay3_test')
        axios.post('https://infolayanan.site/api/mysql/auto.php', fd
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            this.refreshNotif()
            this.$forceUpdate()
        })
    },
     dibacas(item){
        let fd = new FormData()
        fd.append('data', `update notifikasi set dibaca='true' where id_user='${this.$store.state.users.id}' AND app='driver' AND button=${item}`)
        fd.append('database', ' infolay3_test')
        axios.post('https://infolayanan.site/api/mysql/auto.php', fd
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            this.refreshNotif()
            this.$forceUpdate()
        })
    },
     distanceToNow(tanggal) {
          return this.$datefns.distanceInWordsToNow(
            new Date(tanggal),
            {
              locale: id,
              includeSeconds: true
            }
          );
        }
  },
  mounted() {
     this.refreshNotif()
  }
};
</script>