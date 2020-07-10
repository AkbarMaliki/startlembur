<template>
    <div>
        <hr>
        <p class="text-center">FORM KATEGORI</p>
        <hr>
        <div class="flex1">
        <div style="width:60%" class="">
            <div class="sm-form ">
                <label for="kategori">Nama kategori</label>
                <input type="text" id="kategori" name="kategori" class="form-control form-control-sm" placeholder="kategori" v-model="vdata.kategori" >
            </div>
            <hr>
            <input type="file" name="gambar" @change="gambar($event)">
            <hr>
            <div class="text-center">
                <button type="button" class="btn btn-sm btn-outline-primary  waves-effect" style="width:150px;" @click="simpanKategori">SIMPAN</button>
            </div>
            <br>
        </div>
        </div>
        <hr>
        <p class="text-center">
            List Kategori
        </p>
       <div class="container-fluid" v-for="(item, index) in $store.state.kategori" :key="index">
           <div class="row" style="border:1px solid black;padding:10px;">
               <div class="col-sm-2">
                   <img :src="item.gambar" v-img class="img-thumbnail" style="height:100px;" alt="">
               </div>
               <div class="col-sm-7 flex1">
                   <p class="text-center" style="font-size:19px;font-weight:bold;">
                       {{item.kategori}}
                   </p> 
               </div>
               <div class="col-sm-3 flex1">
                   <button type="button" @click="hapus(item._id)" class="btn btn-sm btn-danger  btn-block">Hapus</button>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            vdata:{
                gambar:[]
            }
        }
    },
    methods:{
        hapus(id){
             this.$axios.delete('/api/data/kategori/hapus/'+id, {
                headers:{
                    "Authorization":this.$auth.$storage._state['_token.local']
                }
            }).then(res=>{console.log(res);
            this.$store.dispatch('refreshData');
            })
        },
        simpanKategori(){
             //! =================================================
            let that = this;
            let fd = new FormData();
            let data = this.vdata.gambar;
            let img = data;
            console.log(img);
            fd.append('kategori',this.vdata.kategori);
            this.$daycaca.compress(img,60,(data)=>{
                this.gambar = data ;
                this.urltoFile(data,img.name,img.type).then(res=>{
                let file = res ;
                console.log(file)
                fd.append('photos',data);
                this.$nuxt.$emit('busyOn',true);
                setTimeout(() => {
                    that.$axios.post('/api/data/kategori',fd,{
                        headers:{
                            "Authorization":that.$auth.$storage._state['_token.local']
                        }
                    }).then(res=>{
                        this.$nuxt.$emit('busyOn',false);
                        this.$store.dispatch('refreshData');
                    })
                }, 0);            
                })
            });
            //! ============================
        },
        gambar(e){
            this.vdata.gambar=e.target.files[0];
        },
         urltoFile(url, filename, mimeType){
            return (fetch(url)
                .then(function(res){return res.arrayBuffer();})
                .then(function(buf){return new File([buf], filename, {type:mimeType});})
            );
        },
    }
}
</script>