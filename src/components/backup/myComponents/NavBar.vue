<template>
  <div >
    <div 
      v-if="navBar" 
      id="navContainer" 
      :style="{height:h+'px'}">
      <div class="div1">
        <nuxt-link 
          to="/" 
          title="Home">
          <!-- <i class="fas fa-angle-double-left d-sm-none" ></i> -->
          <img 
            src="@/assets/shop.png"
            class="img-thumbnail d-none d-sm-block" 
            style="height:40px;" 
            alt="">
        </nuxt-link>&nbsp;&nbsp;
        <nuxt-link 
          to="/shop" 
          style="color:green" 
          title="List Barang">
          <i 
            class="fas fa-list-alt" 
            style="font-size:26px;"/>
        </nuxt-link>
      </div>
      <div class="div2">
        <AutoComplete 
          :items="['taufik','akbar','maliki']" 
          @input="hasil=$event"/>
      </div>
      <div class="div3">
        <span class="d-none d-sm-block">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <template v-if="param">
          <button 
            v-show="!$store.state.auth.user" 
            class="btn btn-sm btn-outline-dark   waves-effect pull-right" 
            @click="$nuxt.$emit('loginAlternative',true);">
            <section class="d-sm-none">
              <i class="fas fa-sign-in-alt"/>
            </section>
            <section class="d-none d-sm-block">
              <i class="fas fa-sign-in-alt"/> Masuk
            </section>
          </button>
          &nbsp;
          <button 
            v-show="!$store.state.auth.user" 
            class="btn btn-sm btn-outline-dark   waves-effect" 
            @click="$nuxt.$emit('registerAlternative',true);">
            <section class="d-sm-none">
              <i class="fas fa-registered"/>
            </section>
            <section class="d-none d-sm-block">
              <i class="far fa-registered"/>  Daftar
            </section>
          </button>
        </template>
        <template v-else>
          <nuxt-link 
            v-show="!$store.state.auth.user" 
            to="login" 
            tag="button" 
            class="btn btn-sm btn-outline-dark   waves-effect pull-right">
            <section class="d-sm-none">
              <i class="fas fa-sign-in-alt"/>
            </section>
            <section class="d-none d-sm-block">
              <i class="fas fa-sign-in-alt"/> Masuk
            </section>
          </nuxt-link>
          &nbsp;
          <nuxt-link 
            v-show="!$store.state.auth.user" 
            to="register" 
            tag="button" 
            class="btn btn-sm btn-outline-dark   waves-effect">
            <section class="d-sm-none">
              <i class="fas fa-registered"/>
            </section>
            <section class="d-none d-sm-block">
              <i class="far fa-registered"/>  Daftar
            </section>
          </nuxt-link>
        </template>
                

                
        <button 
          v-show="$store.state.auth.user" 
          type="button" 
          style="cursor:pointer;" 
          class="btn btn-sm btn-dark rounded-circle " 
          @click="notifi=!notifi"><i 
            :class="{'animated bounceIn infinite':notifikasiLength>0}" 
            :style="[{'color':notifikasiLength>0?'yellow':'white'},{'font-size':notifikasiLength>0?'20px':'15px'}]" 
            class="far fa-bell"/>
        </button>
        <section v-if="$store.state.nossr">
          <span 
            v-if="$store.state.auth.user" 
            style="cursor:pointer;" 
            class="d-none d-lg-block" 
            @click="notifi=!notifi">&nbsp;Notifikasi &nbsp;&nbsp;&nbsp;</span>
        </section>
        <button 
          v-show="$store.state.auth.user" 
          style="cursor:pointer;" 
          type="button" 
          class="btn btn-sm btn-dark rounded-circle " 
          @click="$router.push('/transaksi')"><i class="fas fa-shopping-cart"/></button>
        <section v-if="$store.state.nossr">
          <span 
            v-if="$store.state.auth.user" 
            style="cursor:pointer;" 
            class="d-none d-lg-block" 
            @click="$router.push('/transaksi')">&nbsp;Keranjang &nbsp;&nbsp;&nbsp;</span>
        </section>
                   
        <section v-if="$store.state.nossr">
          <span 
            v-if="$store.state.auth.user" 
            class="d-none d-lg-block">&nbsp;&nbsp;&nbsp;</span>
        </section>
        <span class="d-none d-sm-block">
          &nbsp;
        </span>
        <section v-if="$store.state.nossr && $store.state.auth.user" >
                         
          <img 
            :src="$store.state.auth.user.picture" 
            :key="$store.state.auth.user.picture" 
            class="img-thumbnail" 
            style="height:40px;cursor:pointer;" 
            alt="" 
            v-img 
            @click="menuUser=!menuUser" 
            @mouseover="menuUser=true">
        </section>
      </div>
    </div>
    <span id="pos1">
      asd
    </span> 
    <div 
      v-if="notifi" 
      :key="'menuContainer2'" 
      class="notifContainer" 
      @click="notifi=false"/>
    <div 
      v-if="notifi" 
      id="notifC" 
      class="notifikasiContainer animated fadeIn" 
      style="animation-duration:0.4s;z-index:100;" 
      @click="closeNotif($event)" >
      <div style="width:40%;background:white;height:400px;overflow:scroll;">
        <div 
          v-for="(item, index) in notifikasiData" 
          v-if="notifi" 
          :key="index" 
          style="background:white;z-index:200000;border-bottom:1px solid black;border-top:1px solid black;padding:6px;font-family:times new roman;font-size:20px;" 
          @click="dibaca(item._id)">
          <section @click="notifi=false" >
            <nuxt-link 
              :to="item.link" 
              :style="{'border-right':item.dibaca?'':'5px solid red'}" 
              class="notifCon" 
              tag="div" 
              style="height:60px;">
              <p class="pull-right">{{ $moment(item.createdAt).startOf().fromNow() }}</p>
              <span style="font-weight:bold;">
                {{ item.darinya[0].name }} : 
              </span>
              <br>
              {{ item.text }} 
            </nuxt-link>
          </section>
        </div>
        <!-- <div v-if="notifi">
                    {{$store.state.notifikasi}}
                </div> -->
      </div>
    </div>
    <!-- <div class="notifMenu animated fadeIn row" v-if="notifi" style="" @click="dibaca(item._id)"  v-for="(item, index) in $store.state.notifikasi" :key="index">
                    <nuxt-link :to="item.link" class="notifCon" tag="div" style="width:100%;height:100px;" :style="{'border-right':item.dibaca?'':'5px solid red'}">
                        {{item.darinya[0].name}} : <br>
                        {{item.text}} {{item.dibaca}}
                        <hr>
                    </nuxt-link>
                </div> -->
    <transition-group 
      name="fade" 
      mode="out-in">
      <div 
        v-if="menuUser" 
        :key="'menuContainer'" 
        class="modelContainer" 
        @click="closeModal"/>
      <div 
        v-if="menuUser" 
        :key="'menuUser'" 
        style="font-size:14px;" 
        class="bg-light menuUser " >
        <hr class="style9">
        <nuxt-link 
          to="/profile" 
          tag="button" 
          class="btn btn-md btn-outline-black waves-effect btn-block" 
          style="border:1px solid gray;"> 
          <i 
            class="far fa-user" 
            style="color:black;"/> &nbsp;<span style="text-transform:capitalize;font-size:12px;">{{ $store.state.auth.user.name }}</span>
        </nuxt-link>
        <nuxt-link 
          to="/wishlist" 
          tag="button" 
          class="btn btn-md btn-outline-black waves-effect btn-block" 
          style="border:1px solid gray;"> 
          <i 
            class="far fa-heart" 
            style="color:black;"/> &nbsp;<span style="text-transform:capitalize;">Wishlist</span>
        </nuxt-link>
        <nuxt-link 
          to="/profile?clk=barangBtn" 
          tag="button" 
          class="btn btn-md btn-outline-black waves-effect btn-block" 
          style="border:1px solid gray;"> 
          <i class="fas fa-store"/>&nbsp;<span style="text-transform:capitalize;">Toko</span>
        </nuxt-link>
        <nuxt-link 
          :to="'/chat?'+'id='+$auth.user._id" 
          tag="button" 
          class="btn btn-md btn-outline-black waves-effect btn-block" 
          style="border:1px solid gray;"> 
          <i class="far fa-comments"/>&nbsp;<span style="text-transform:capitalize;">Chat</span>
        </nuxt-link>
        <nuxt-link 
          to="/transaksi" 
          tag="button" 
          class="btn btn-md btn-outline-black waves-effect btn-block" 
          style="border:1px solid gray;"> 
          <i class="far fa-handshake"/>&nbsp;<span style="text-transform:capitalize;">Transkasi</span>
        </nuxt-link>
        <nuxt-link 
          v-if="$auth.user.email=='admin@gmail.com'" 
          to="/admin" 
          tag="button" 
          class="btn btn-md btn-outline-danger waves-effect btn-block" 
          style="border:1px solid gray;"> 
          <i class="far fa-angry"/>&nbsp;<span style="text-transform:capitalize;">Admin</span>
        </nuxt-link>
        <hr>
        akun terverifikasi ? :  <span style="color:blue;">{{ $store.state.auth.user.verified?'terverifikasi':'belum' }}</span>
        <hr>
        <div class="text-center">
          <button 
            v-show="$store.state.auth.user" 
            type="button" 
            class="btn btn-sm btn-outline-danger waves-effect" 
            @click="closeModal2">Logout</button>
        </div>
      </div>
    </transition-group>
    <scrollactive 
      class="my-nav" 
      style="position:fixed;display:none;" 
      @itemchanged="onItemChanged">
      <a 
        href="#pos1" 
        class="scrollactive-item">pos1</a>
    </scrollactive>
    <!-- dibawah navbar -->
   
  </div>
</template>

<script>
import socket from '@/plugins/socket.io.js'
export default {
  data() {
    return {
      navBar: true,
      h: 50,
      hasil: null,
      menuUser: false,
      notifi: false
    }
  },
  computed: {
    param() {
      let data = false
      if (this.$route.params.id != undefined) data = true
      return data
    },
    notifikasiLength() {
      let data = this.$store.state.notifikasi
      data = data.filter(e => e.dibaca == false)
      data = data.filter(e => e.ke == this.$auth.user._id)
      data = data.length
      return data
    },
    notifikasiData() {
      let data = this.$store.state.notifikasi
      data = this.$_.orderBy(data, ['_id'], ['desc'])
      console.log(data)
      data = data.filter(e => e.ke == this.$auth.user._id)
      return data
    }
  },
  mounted() {
    let that = this
    socket.emit('last-notifikasi', function(notifikasi) {
      that.$store.dispatch('setNotifikasi', notifikasi)
    })
    let data = {}
    if (this.$auth.user) {
      data.id = this.$auth.user._id
    }
    data.userId = false
    socket.emit('setId', data)
    socket.on('new-notifikasi', notifikasi => {
      console.log('notifikasi', notifikasi)
      this.$store.dispatch('newNotifikasi', notifikasi)
    })
  },
  methods: {
    closeNotif(e) {
      console.log(e.target.id)
      if (e.target.id == 'notifC') {
        this.notifi = false
      }
    },
    dibaca(id) {
      let data = {}
      data.test = 'kosong'
      this.$axios.put('/api/data/notifikasi/' + id).then(res => {
        console.log(res.data)
        this.$store.dispatch('refreshData')
      })
    },
    enter(e) {
      console.log(e)
    },
    onItemChanged(e, curr, last) {
      console.log(window.scrollY)
      if (window.scrollY < 30) {
        this.h = 50
      } else {
        this.h = 40
      }
    },
    closeModal(e) {
      this.menuUser = false
    },
    closeModal2() {
      this.menuUser = false
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>
<style scoped>
#navContainer {
  transition: all ease-in-out 0.3s;
  grid: auto-flow / 1fr 3fr 2fr;
  place-items: center stretch;
  grid-gap: 10px 10px;
  display: grid;
  background: rgba(252, 252, 252, 0.555);
  box-shadow: 1px 1px 2px black;
}
.modelContainer {
  height: 2000px;
  width: 100%;
  background: rgba(80, 79, 79, 0.514);
}
.notifContainer {
  position: absolute;
  height: 2000px;
  width: 100%;
  background: rgba(80, 79, 79, 0.514);
}
.menuUser {
  position: absolute;
  top: 40px;
  width: 200px;
  padding: 10px 10px 40px 10px;
  right: 0;
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;
}
.notifikasiContainer {
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  display: flex;
}
.notifMenu {
  width: 40%;
  height: 500px;
  background: white;
  box-shadow: 1px 2px 3px black;
  padding: 10px;
}
.notifCon {
  font-size: 12px;
}
.notifCon:hover {
  background: rgb(178, 194, 240);
  cursor: pointer;
}
#pos1 {
  position: absolute;
  color: rgba(247, 247, 247, 0);
}
.div1 {
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-left: 10%;
}

.div3 {
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  display: flex;
}
.pushKiri {
}

.fade-enter-active {
  animation: fadeIn 0.5s ease-in-out forwards;
}
.fade-leave-active {
  animation: fadeOut 0.5s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-1000px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-1000px);
  }
}
</style>
