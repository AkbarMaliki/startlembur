<template>
  <div>
    <dropdown
      :classs="'btn btn-sm btn-block hover:bg-red'"
      :styless="'border-left:2px solid blue;color:white;'"
      @click="test"
    >
      <template slot="text">
        <span>
          <span class="typcn typcn-user float-left"></span>
          Data Desa
        </span>
      </template>
      <button
        type="button"
        @click="$router.push('/app/data-desa/perangkat-desa')"
        class="btn btn-sm btn-block bg-custom1 hover:bg-black hover:text-white"
        style="border-left:3px solid black;border-right:3px solid black;"
      >Perangkat Desa</button>
      <button
        type="button"
        @click="$router.push('/app/data-desa/penduduk')"
        class="btn btn-sm btn-block bg-custom1 hover:bg-black hover:text-white"
        style="border-left:3px solid black;border-right:3px solid black;"
      >Penduduk</button>
      <button
        type="button"
        @click="$router.push('/app/data-desa/user')"
        class="btn btn-sm btn-block bg-custom1 hover:bg-black hover:text-white"
        style="border-left:3px solid black;border-right:3px solid black;"
      >User</button>
    </dropdown>
    <dropdown
      :classs="'btn btn-sm btn-block hover:bg-red mt-2'"
      :styless="'border-left:2px solid blue;color:white;'"
    >
      <template slot="text">
        <span class="typcn typcn-thermometer float-left"></span>
        Menu2
      </template>
      <button type="button" @click="test" class="btn btn-sm btn-primary btn-block hover:bg-red">test</button>
    </dropdown>
    <button
      type="button"
      @click="test"
      class="btn btn-sm btn-block hover:bg-red"
      style="border-left:2px solid blue;color:white;"
    >Menu3</button>
    <button
      type="button"
      @click="test"
      class="btn btn-sm btn-block"
      style="border-left:2px solid blue;color:white;"
    >Menu3</button>
  </div>
</template>
<script>
import dropdown from "@/components/Single/Dropdown.vue";
export default {
  components: {
    dropdown
  },
  methods: {
    aler() {
      alert("y");
      console.log(this.$nuxt);
    },
    test() {
      alert("y");
      console.log(this.$nuxt);
    }
  }
};
</script>
<style scoped>
.bg-custom1 {
  background: #eceff4;
}
</style>