<template>
  <div class="font-times" style="background:#232e30;">
    <!-- MENU 1 -->
    <div style="background:black;height:3px;"></div>
    <dropdown
      :classs="'btn btn-sm btn-block hover:bg-red'"
      :styless="'border-left:2px solid blue;color:white;'"
      @gogo="false"
    >
      <template slot="text">
        <span style="font-size:14px;">
          <span class="typcn typcn-user float-left"></span>
          Data Desa
        </span>
      </template>
      <button
        type="button"
        @click="$router.push('/app/data-desa/perangkat-desa')"
        class="btn btn-sm btn-block bg-custom1 hover:bg-black hover:text-white btnmenu"
      >Perangkat</button>
      <button
        type="button"
        @click="$router.push('/app/data-desa/aparatur-desa')"
        class="btn btn-sm btn-block bg-custom1 hover:bg-black hover:text-white"
      >Aparatur</button>
      <button
        type="button"
        @click="$router.push('/app/data-desa/penduduk')"
        class="btn btn-sm btn-block bg-custom1 hover:bg-black hover:text-white"
      >Penduduk</button>
      <button
        type="button"
        @click="$router.push('/app/data-desa/user')"
        class="btn btn-sm btn-block bg-custom1 hover:bg-black hover:text-white"
      >User</button>
    </dropdown>
    <!-- MENU 2 -->
    <div style="background:black;height:3px;"></div>
    <dropdown
      :classs="'btn btn-sm btn-block hover:bg-red'"
      :styless="'border-left:2px solid blue;color:white;'"
      @gogo="$router.push('/app/administrasi-surat')"
    >
      <template slot="text">
        <span style="font-size:14px;">
          <span class="typcn typcn-news float-left"></span>
          Administrasi Surat
        </span>
      </template>
      <button
        type="button"
        @click="$router.push('/app/administrasi-surat/domisili')"
        class="btn btn-sm btn-block bg-custom1 hover:bg-black hover:text-white"
      >Domisili</button>
      <button
        type="button"
        @click="$router.push('/app/administrasi-surat/lahir')"
        class="btn btn-sm btn-block bg-custom1 hover:bg-black hover:text-white"
      >Lahir</button>
      <button
        type="button"
        @click="$router.push('/app/administrasi-surat/kematian')"
        class="btn btn-sm btn-block bg-custom1 hover:bg-black hover:text-white"
      >Kematian</button>
      <button
        type="button"
        @click="$router.push('/app/administrasi-surat/pindah')"
        class="btn btn-sm btn-block bg-custom1 hover:bg-black hover:text-white"
      >Pindah</button>
    </dropdown>

    <!-- MENU 3 -->
    <div style="background:black;height:3px;"></div>
    <dropdown
      :classs="'btn btn-sm btn-block hover:bg-red'"
      :styless="'border-left:2px solid blue;color:white;'"
      @gogo="$router.push('/app/laporan')"
    >
      <template slot="text">
        <span style="font-size:14px;">
          <span class="typcn typcn-document-text float-left"></span>
          Laporan
        </span>
      </template>
      <button
        type="button"
        @click="$router.push('/app/laporan/backup')"
        class="btn btn-sm btn-block bg-custom1 hover:bg-black hover:text-white"
      >Backup</button>
      <button
        type="button"
        @click="$router.push('/app/laporan/import-data')"
        class="btn btn-sm btn-block bg-custom1 hover:bg-black hover:text-white"
      >Import Data</button>
      <button
        type="button"
        @click="$router.push('/app/laporan/surat-dan-mutasi')"
        class="btn btn-sm btn-block bg-custom1 hover:bg-black hover:text-white"
      >Surat dan Mutasi</button>
      <button
        type="button"
        @click="$router.push('/app/laporan/jumlah-penduduk')"
        class="btn btn-sm btn-block bg-custom1 hover:bg-black hover:text-white"
      >Jumlah Penduduk</button>
    </dropdown>
    <!-- MENU 4 -->
    <div style="background:black;height:3px;"></div>
    <dropdown
      :classs="'btn btn-sm btn-block hover:bg-red'"
      :styless="'border-left:2px solid blue;color:white;'"
      @gogo="$router.push('/app/permintaan')"
    >
      <template slot="text">
        <span style="font-size:14px;">
          <span class="typcn typcn-document float-left"></span>
          Permintaan
        </span>
      </template>
    </dropdown>
    <div style="background:black;height:3px;"></div>
    <dropdown
      :classs="'btn btn-sm btn-block hover:bg-red'"
      :styless="'border-left:2px solid blue;color:white;'"
      @gogo="$store.dispatch('logout')"
    >
      <template slot="text">
        <span style="font-size:14px;">
          <span class="typcn typcn-eject float-left"></span>
          Logout
        </span>
      </template>
    </dropdown>
  </div>
</template>
<script>
import dropdown from "@/components/Single/Dropdown.vue";
export default {
  components: {
    dropdown
  }
};
</script>
<style scoped>
.bg-custom1 {
  background: #eceff4;
}
.btnmenu {
  border-left: 3px solid black;
  border-right: 3px solid black;
  font-size: 14px;
}
</style>