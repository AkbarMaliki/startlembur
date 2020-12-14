import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import router from '../router'
// ! NOTE $router tidak ada di sini jadi gunakan router.push dari import router

import backup from './backup';
import auth from './auth';
import blog from './blog';
import desa from './desa';
import axios from 'axios';
import VuexPersistence from 'vuex-persist';
import {
  stat
} from 'fs';
Vue.use(Vuex)
let keys = require('../application-keys.json')
const createStore = () => {
  return new Vuex.Store({
    modules: {
      backup,
      blog,
      desa,
      auth
    },
    // plugins: [new VuexPersistence().plugin],
    state: {
      name: 'taufik',
      wali: false,
      wali_kelas: false,
      notifikasi: [],
      notifikasiContoh: {
        id_notifikasi: 1,
        id_user: 2,
        button: 3, //memilih element mana yang dimunculkan number notifikasi
        dibaca: false,
        app: 'driver',
        link: "",
        text: ""
      },
      mediaQ: 'XL',
      users: null,
      interval: {},
      nossr: false,
      kabupaten: [],
      kecamatan: [],
      provinsi: [],
      gpscount: [],
      gpsuniq: [],
      watchgps: {},
      scroll: 0,
      user: false,
      busy: false,
      //! ITEMS:
      kategori: [],
      prints: {
        jabatan: 'Kepala Desa',
        namaPerangkat: '..............................'
      },
      print2: {
        jabatan: 'Kepala Desa',
        namaPerangkat: '..............................'
      },
      version: '1.0',
      indexdb: 'workbox-precache-https___lightjourney_now_sh_',
      device: 'web',
      url: keys.baseURL,
      database: keys.database,
      version: 0,
      drivers: {}
    },
    mutations: {
      requestDriver(state, data) {
        // let clone = this.$_.clone(data); //item vue object
        console.log(state)
        console.log(data)
        state.drivers.driver = data
      },
      changebusy(state,data){
        state.busy=data
      },
      changegps(state,data){
        state.watchgps=data
      },
      inputRequest(state, data) {
        // let clone = this.$_.clone(data); //item vue object
        console.log(state)
        console.log(data)
        state.drivers.request = data
      },
      goAuth(state) {
        state.auth.isAuth = true
      },
      vuex(state) {
        // alert('y')
        localStorage.setItem('vuex', JSON.stringify(state))
      },
      xeuv(state) {
        for (let key in state) {
          if (key != 'user') {
            state[key] = JSON.parse(localStorage.getItem('vuex'))[key]
          }
        }
      },
      changeUser(state, data) {
        state.user = data
      },
      changeUsers(state, data) {
        state.users = data
      },
      busy(state, data) {
        // alert('yup')
        state.busy = data
      },
      addKategori(state, data) {
        // console.log(data)
        state.kategori = data
      },
      mediaQueries(state, data) {
        // console.log(data)
        state.mediaQ = data
      },
      scrollY(state, data) {
        // console.log(data)
        state.scroll = data
      },
      nossr(state, data) {
        state.nossr = data
      },
      editData(state, data) {
        let index = data.index
        delete data.index
        let keys = Object.keys(data)
        keys.forEach(key => {
          // console.log(state.users[index][key]);
          state.users[index][key] = data[key]
        })
        console.log(state.users)
      },
      saveData(state, data) {
        let datas = {}
        let keys = Object.keys(state.users[0])
        keys.forEach(key => {
          // console.log(state.users[index][key]);
          datas[key] = data[key] ? data[key] : 'null'
        })
        state.users.push(datas)
      },
      deleteData(state, data) {
        state.users.splice(data, 1)
      },
      refreshData(state, data) {
        state.auth.user = data.users
        state.auth.user.picture = data.users.picture
        state.user = data.users
        // state.blog = data.blogs
        state.kategori = data.kategoris
        state.notifikasi = data.notifikasis
      },
      setNotifikasi(state, data) {
        // console.log(data)
        state.notifikasi = data
      },
      newNotifikasi(state, data) {
        // data = this.$_.orderBy(data,['_id'],['desc']);
        // console.log(data)
        state.notifikasi.push(data)
        // state.notifikasi=data;
      },
      logout(state) {
        // console.log(state)
        state.user = false
        state.users = false
      },
      refreshUser(state, data) {
        state.user = data
      }
    },
    actions: {
      perangkat(vcon, data) {
        vcon.state.prints.jabatan = JSON.parse(data).Jabatan
        vcon.state.prints.namaPerangkat = JSON.parse(data).Nama
        vcon.state.print2.jabatan = JSON.parse(data).Jabatan
        vcon.state.print2.namaPerangkat = JSON.parse(data).Nama
        console.log(vcon.state.print2)
      },
      version(vcon, data) {
        console.log('ganti version')
        console.log(data)
        vcon.state.version = data
        console.log(vcon.state.version)
      },
      auth() {
        if (
          localStorage.getItem('auth._token.local') == 'false' &&
          localStorage.getItem('auth.local') == 'false'
        ) {
          router.push('/')
        }
      },
      setNotifikasi(vcon, data) {
        vcon.commit('setNotifikasi', data)
      },
      newNotifikasi(vcon, data) {
        vcon.commit('newNotifikasi', data)
      },
      async reLogin() {
        this.error = null
        let now = new Date()
        localStorage.setItem(
          'expireDate',
          new Date(now.getTime() + 3600 * 1000)
        )
        return this.$auth
          .loginWith('local', {
            data: {
              username: this.$store.state.auth.user.username,
              password: this.password,
              reLogin: true
            }
          })
          .catch(e => {
            this.error = e + ''
          })
      },
      async refreshData(vcon) {
        if (vcon.state.auth.loggedIn) {
          let data = await axios.get(
            '/api/refreshdata/' + vcon.state.auth.user._id, {
              headers: {
                Authorization: localStorage.getItem('auth._token.local')
              }
            }
          )
          console.log(data.data)
          vcon.commit('refreshData', data.data)
        }
      },
      notifikasi(vcon, datas) {
        console.log('datas',datas)
        datas.createdAt=new Date();
        datas.dibaca = false
        let data = {
          data: {
            title: datas.title,
            body: datas.body,
            surveyID: "ewtawgreg-gragrag-rgarhthgbad",
            sound: true,
            ledColor: [255, 255, 128, 16],
            vibrationPattern: [250, 1000, 250, 500],
            link:datas.link,
            android_channel_id: "test-channel",
          },
          to: datas.to.fcm2,
          priority: "high",
          content_available: true
        }
        if(datas.to.emails){ // emails adalah property true or false apakah user menggunakan notif by email
          let fd = new FormData();
          fd.append("tujuan", datas.to.emailnotif); //emailnotif adalah propery email yang disimpan untuk jadi tujuan kirim email
          fd.append("subjek", datas.title);
          fd.append("text", datas.body);
          axios
            .post("https://infolayanans.space/send_mail.php", fd)
            .then(res => {
              console.log(res);
              this.$forceUpdate();
            });
        }
        data = JSON.stringify(data)
        firebase.firestore().collection('users').doc(datas.to.uid).collection('notification').add({...datas}).then(res=>{
          console.log('berhasil add')
        }).catch(err=>{
          console.log('err notifikasi',err)
        })
        axios.post('https://fcm.googleapis.com/fcm/send', data, {
          headers: {
            //   Server Key di project settings firebase
            Authorization: 'key=AAAAUBoNxhU:APA91bGmp6193yTOWq0XcUu4adMjbF4XVk2uqDy8V-1y7pT26S_Q1kVkYTSyLBsgU-B4lUyYDMykMKtuiQWlVeYIEr713d5Ty0GphyUxcGlMb1D1uKsOPZ4LujfYzke2qdnZOBYEMzdm',
            "Content-Type": "application/json"
          }
        }).then(res => {
          this.$forceUpdate()
         
        }).catch(err=>{
          console.log('err',err)
        })
      },
      mail(vcon, datas) {
             let fd = new FormData();
            fd.append("tujuan", datas.tujuan);
            fd.append("subjek", datas.subjek);
            fd.append("text", datas.text);
            axios
              .post("https://infolayanans.space/send_mail.php", fd)
              .then(res => {
                console.log(res);
                this.$forceUpdate();
              });
      },
      async scramble(vcon, data) {
        let char = "";
        let hasil = "";
        for (var i = 0; i < data.length; i++) {
          char = "";
          char = data.charAt(i);
          if (char == "a") {
            char = char.replace("a", "x");
          } else if (char == "b") {
            char = char.replace("b", "v");
          } else if (char == "c") {
            char = char.replace("c", "u");
          } else if (char == "d") {
            char = char.replace("d", "w");
          } else if (char == "e") {
            char = char.replace("e", "y");
          } else if (char == "f") {
            char = char.replace("f", "z");
          } else if (char == "g") {
            char = char.replace("g", "t");
          } else if (char == "h") {
            char = char.replace("h", "s");
          } else if (char == "i") {
            char = char.replace("i", "r");
          } else if (char == "j") {
            char = char.replace("j", "q");
          } else if (char == "k") {
            char = char.replace("k", "p");
          } else if (char == "l") {
            char = char.replace("l", "o");
          } else if (char == "m") {
            char = char.replace("m", "n");
          } else if (char == "z") {
            char = char.replace("z", "f");
          } else if (char == "y") {
            char = char.replace("y", "e");
          } else if (char == "x") {
            char = char.replace("x", "a");
          } else if (char == "w") {
            char = char.replace("w", "d");
          } else if (char == "v") {
            char = char.replace("v", "b");
          } else if (char == "u") {
            char = char.replace("u", "c");
          } else if (char == "t") {
            char = char.replace("t", "g");
          } else if (char == "s") {
            char = char.replace("s", "h");
          } else if (char == "r") {
            char = char.replace("r", "i");
          } else if (char == "q") {
            char = char.replace("q", "j");
          } else if (char == "p") {
            char = char.replace("p", "k");
          } else if (char == "o") {
            char = char.replace("o", "l");
          } else if (char == "n") {
            char = char.replace("n", "m");
          } else if (char == "1") {
            char = char.replace("1", "0");
          } else if (char == "2") {
            char = char.replace("2", "8");
          } else if (char == "3") {
            char = char.replace("3", "9");
          } else if (char == "4") {
            char = char.replace("4", "7");
          } else if (char == "5") {
            char = char.replace("5", "6");
          } else if (char == "0") {
            char = char.replace("0", "1");
          } else if (char == "8") {
            char = char.replace("8", "2");
          } else if (char == "9") {
            char = char.replace("9", "3");
          } else if (char == "7") {
            char = char.replace("7", "4");
          } else if (char == "6") {
            char = char.replace("6", "5");
          } else if (char == " ") {
            char = char.replace(" ", "_");
          } else if (char == "_") {
            char = char.replace("_", " ");
          } else if (char == "*") {
            char = char.replace("*", "/");
          } else if (char == "/") {
            char = char.replace("/", "*");
          } else if (char == ",") {
            char = char.replace(",", "^");
          } else if (char == "^") {
            char = char.replace("^", ",");
          }
          hasil = hasil + char;
        }
        return hasil;
      },
      ceklogin({
        commit
      }, datas) {
        commit('changebusy',true)

        return new Promise((resolve, reject) => {
          firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
              console.log(user.uid)
              firebase.firestore().collection('users').doc(user.uid).get().then(res => {
                console.log(res.data())

                commit('changeUsers', res.data())
                localStorage.setItem('users', JSON.stringify(res.data()))
                if (datas) {
                  if (datas.true == true) {
                    commit('changebusy',false)
                  } else {
                    commit('changebusy',false)
                    router.push(datas.true)
                  }
                }
                resolve()
              })
            } else {
              console.log('user tidak ada');
              if (datas.false) {
                    commit('changebusy',false)
                    router.push(datas.false)
              } else {
                commit('changebusy',false)

              }
              // No user is signed in.
            }
          });
        })
      },
      logout(vcon) {
        vcon.commit('changegps',false)
        firebase
          .auth()
          .signOut()
          .then(() => {
            localStorage.setItem('expireDate', null)
            localStorage.setItem('auth._token.local', false)
            localStorage.setItem('auth.local', false)
            navigator.geolocation.clearWatch(vcon.state.watchgps);
            vcon.state.isAuth = false
            vcon.commit('logout', false)
            router.push('/')
          });
        if (vcon.state.device != 'dekstop') {
          this.$auth.logout()
        }
      },
      refreshUser(vcon) {
        this.$axios.get('/api/auth/user').then(res => {
          console.log(res.data)
          vcon.commit('refreshUser', res.data.user)
        })
      },
      userRefresh(vcon) {
        vcon.commit('refreshUser', this.$auth.user)
      }
    }
  })
}

export default createStore