<template>
<div>  
    <div v-if="aktif" class="  flex flex-wrap flex-col mx-auto text-center" style="background: rgba(31, 29, 29, 0.534);height:900px;width:100%;position:fixed;top:0;left:0;z-index:20;">
        <div class="mx-auto bg-white h-200px w-50pr rounded-lg" style="margin-top:250px;">
            <br>
            <p class="text-lg font-bold font-times uppercase">{{text}}</p>
            <br>
            <br>
            <br>
            <div class='container flex flex-wrap mx-auto px-4'>
                <div class="w-full sm:w-1/2 text-center">
                <button type="button" class="btn btn-sm btn-primary " style="width:100px;" @click="ya">YA</button>
                </div>
                <div class="w-full sm:w-1/2 text-center">
                <button type="button" class="btn btn-sm btn-danger " style="width:100px;" @click="tidak">TIDAK</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      aktif: false
    }
  },
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    ya() {
      this.$emit('confirm', true)
      this.aktif = false
    },
    tidak() {
      this.$emit('confirm', false)
      this.aktif = false
    }
  },
  mounted() {
    this.$nuxt.$on('confirm', data => {
      this.aktif = data
    })
  }
}
</script>
