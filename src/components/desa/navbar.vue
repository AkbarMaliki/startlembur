<template>
  <div>
    <div class="bg-teal-darker text-center">
      <p class="font-times text-white">APAM (APLIKASI KEPENDUDUKAN DESA BAMBAN)</p>
    </div>
    <div class="bg-grey-light pl-5">
      <button
        type="button"
        @click="componentId='home'"
        :class="{'aktif':componentId=='home'}"
        class="btn btn-sm hover:bg-black hover:text-white"
        style="border-radius:4px;border:1px lightblue;"
      >HOME</button>
      <button
        type="button"
        @click="componentId='Data'"
        :class="{'aktif':componentId=='Data'}"
        class="ml-1 btn btn-sm hover:bg-black hover:text-white"
        style="border-radius:4px;border:1px lightblue;"
      >DATA</button>
      <button
        type="button"
        @click="componentId='Administrasi'"
        :class="{'aktif':componentId=='Administrasi'}"
        class="ml-1 btn btn-sm hover:bg-black hover:text-white"
        style="border-radius:4px;border:1px lightblue;"
      >ADMINISTRASI SURAT</button>
      <button
        type="button"
        @click="componentId='Laporan'"
        :class="{'aktif':componentId=='Laporan'}"
        class="ml-1 btn btn-sm hover:bg-black hover:text-white"
        style="border-radius:4px;border:1px lightblue;"
      >LAPORAN</button>
      <button
        type="button"
        @click="componentId='Help'"
        :class="{'aktif':componentId=='Help'}"
        class="ml-1 btn btn-sm hover:bg-black hover:text-white"
        style="border-radius:4px;border:1px lightblue;"
      >HELP</button>
    </div>
    <div class="bg-blue-light">
      <transition
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutLeft"
        mode="out-in"
      >
        <!-- <component :is="componentId" key="1"></component> -->
      </transition>
      <div class="row">
        <div class="col-sm-12 text-center bg-white border-b-2 uppercase">
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in"
          >
            <span class="animated fadeIn">{{componentId}}</span>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import home from "@/components/desa/n_home.vue";
// import Data from "@/components/desa/n_data.vue";
// import Administrasi from "@/components/desa/n_administrasi.vue";
// import Laporan from "@/components/desa/n_laporan.vue";
// import Help from "@/components/desa/n_help.vue";
export default {
  // components: {
  //   home,
  //   Data,
  //   Administrasi,
  //   Laporan,
  //   Help
  // },
  data() {
    return {
      componentId: "home"
    };
  },
  methods: {
    test() {
      alert("y");
    }
  }
};
</script>
<style scoped>
.aktif {
  background: red;
}
</style>