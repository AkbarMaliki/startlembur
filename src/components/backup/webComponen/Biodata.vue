<template>
  <div>
    <br>
    <span>--BIODATA--</span>
    <button type="button" class="btn btn-md btn-outline-success   waves-effect pull-right" 
    @click="$nuxt.$emit('modal',true);$nuxt.$emit('modalId','BiodataForm');">UBAH</button>
  
    <hr>
    <table v-if="$store.state.nossr">
      <tr>
        <td>Nama</td>
        <td>&nbsp;:&nbsp;</td>
        <td><p :key="$store.state.auth.user.name">{{$store.state.auth.user.name}}</p></td>
      </tr>
      <tr>
      <tr>
        <td>Toko</td>
        <td>&nbsp;:&nbsp;</td>
        <td>{{$store.state.auth.user.namaToko}}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>&nbsp;:&nbsp;</td>
        <td>{{$store.state.auth.user.email}} &nbsp; <br>
          <span :style="{color:$store.state.auth.user.verified?'blue':'red'}" style="text-decoration:underline">
            {{$store.state.auth.user.verified ? 'terverifikasi':'belum verifikasi'}}</span>&nbsp;&nbsp;&nbsp;
            <button class="btn btn-sm btn-outline-secondary" v-if="!$store.state.auth.user.verified" @click="$store.dispatch('auth/verify')">Verify Akun</button>
            </td>
      </tr>
       <tr>
        <td>Telpon/hp</td>
        <td>&nbsp;:&nbsp;</td>
        <td>+62 {{$store.state.auth.user.hp}}</td>
      </tr>
      <tr>
        <td colspan="3">
          <hr>
        </td>
      </tr>
      <tr>
        <td>Kurir</td>
        <td>&nbsp;:&nbsp;</td>
        <td>
          <button type="button" class="btn btn-sm "  v-for="(item, index) in $store.state.auth.user.kurir" :key="index" >
            {{item}}
          </button> &nbsp;&nbsp;
          </td>
    </tr>
      <tr>
        <td>Alamat</td>
        <td>&nbsp;:&nbsp;</td>
        <td>{{$store.state.auth.user.alamat}}</td>
      </tr>
      <template v-if="$store.state.auth.user.provinsi!=0">
       <tr >
        <td>Provinsi</td>
        <td>&nbsp;:&nbsp;</td>
        <td>{{$store.state.provinsi.filter(e=>e.id_prov==$store.state.auth.user.provinsi)[0].provinsi}}</td>
      </tr>
       <tr>
        <td>Kabupaten</td>
        <td>&nbsp;:&nbsp;</td>
        <td>{{$store.state.kabupaten.filter(e=>e.id_kab==$store.state.auth.user.kabupaten)[0].kabupaten}}</td>
      </tr>
       <tr>
        <td>Kecamatan</td>
        <td>&nbsp;:&nbsp;</td>
        <td>{{$store.state.kecamatan.filter(e=>e.id_kec==$store.state.auth.user.kecamatan)[0].kecamatan}}</td>
      </tr>
      </template>
    </table>
    <br>
    <hr class="style16">
    <section v-if="$store.state.nossr">
      <div style="padding-left:30px;">
        Catatan Toko
        <hr>
        <p v-html="$store.state.auth.user.catatan"></p>
      </div>

    </section>
  </div>
</template>
