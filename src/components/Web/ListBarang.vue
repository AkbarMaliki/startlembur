<template>
    <div class="bg-white">
        <section v-for="(item, index) in barangs" :key="index" class="hover:bg-grey-light cursor-pointer p-2 rounded-lg mb-10 border-b-2 pb-2">
            <div ref="title" class="font-bold uppercase font-times">{{item.nama}}
                <hr class="style3">
            </div>
            <div>
                <span class="pr-2" style="border-right:1px solid black;">
                    {{$moment(item.createdAt).format('DD MMMM YYYY')}}
                </span>
                <span class="pl-3 text-grey-dark" v-for="(itemnya, index) in item.kategori" :key="index">{{itemnya}}</span>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3 pt-2">
                        <img :src="item.img[0]" v-compressja class="img-thumbnail" :alt="item.img[0]">
                    </div>
                    <div class="col-sm-9 pl-3 h-200px pt-5 font-times" style="overflow-y: scroll;" v-html="item.description">
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  computed: {
    barangs() {
      return this.$store.state.barang
    }
  },
  methods: {
    moment(data) {
      return moment(data)
    }
  },
  mounted() {
    console.log()
  }
}
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(173, 139, 139);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}
</style>