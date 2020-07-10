<template>
  <div>
    <button type="button" class="btn btn-sm btn-outline-primary" style="position:fixed;bottom:70px;right:20px;" @click="ups"><span class="typcn typcn-arrow-up text-2xl"></span></button>
    <button type="button" class="btn btn-sm btn-outline-primary" style="position:fixed;bottom:10px;right:20px;" @click="downs"><span class="typcn typcn-arrow-down text-2xl"></span></button>
    <div>
      <p v-for="(item, index) in 300" :key="index+'asd'">OWEEE</p>
      test</div>  
  </div>
</template>
<script>
export default {
  methods: {
    ups(){
       window.scroll(0, window.scrollY - 300)
    },
    downs(){
       window.scroll(0, window.scrollY + 300)
    }
  },

}
</script>