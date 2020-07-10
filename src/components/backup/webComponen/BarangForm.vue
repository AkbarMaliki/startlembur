<template>
    <div>
        <br>
        <h5>Barang Tambah Form</h5>
        <div style="height:70px;width:100%;font-size:13px;color:red;">
            <div :style="[{'width':wi+'%'}]" style="background:green;padding:10px;">{{wi}} %</div>
        </div>
        <hr>
        <form @submit.prevent="saveData" >
        <div class="sm-form ">
            <label for="nama" style="font-size:15px;font-family:times new roman;">Nama Barang :</label>
            <input type="text" id="nama" name="nama" class="form-control form-control-sm" placeholder="Nama Barang" v-model="vdata.nama" >
        </div>
        <div class="sm-form ">
            <label for="stok" style="font-size:15px;font-family:times new roman;">Stok Barang :</label>
            <input type="number" id="stok" name="stok" class="form-control form-control-sm" placeholder="Stok Barang" v-model="vdata.stok" >
        </div>
        <div class="sm-form ">
            <label for="harga" style="font-size:15px;font-family:times new roman;">harga Barang :</label>
            <input type="number" id="harga" name="harga" class="form-control form-control-sm" placeholder="harga Barang" v-model="vdata.harga" >
        </div>
        <hr>
        Kategori Barang : <br>
        <button type="button" class="btn btn-sm btn-outline-dark   waves-effect" @click='kategori=!kategori'>Kategori</button>
            <div class="container-fluid" style="padding:0;margin:0;">
                <div class="row">
                    <ul v-if="kategori" class="list-unstyled">
                        <li v-for="(item, index) in $store.state.kategori" :key="index" >
                            <input type="checkbox" :id="item.kategori" :value="item.kategori" v-model="vdata.kategori">
                            <label style="cursor:pointer;" :for="item.kategori">{{item.kategori}}</label><br>
                        </li>
                    </ul>
                </div>
            </div>
        <br>
        <hr>
        Deskripsi Barang : 
        <wysiwyg v-model="vdata.description" style="z-index:1;"/>
        <div style="padding-left:20px;padding-top:20px;">
        </div>
        </form>
         <MultiUploader @upload="upload($event)" @resetInput="resetUpload" />
            <hr>
            <div class="text-center">
                <button  value="Simpan" @click="gambarBarang" class="btn btn-md btn-success" 
                v-if="wi==100"
                >Upload Barang</button>
                <button  value="Simpan" @click="gambarBarang" class="btn btn-md btn-success" v-else disabled>Upload Barang</button>
            </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            w:10,
            kategori:false,
            vdata:{
                gambar:[],
                kategori:[],
                kota:this.$store.state.provinsi.filter(e=>e.id_prov==this.$store.state.auth.user.provinsi)[0].provinsi,
                img:'/nofound.png',
                toko:this.$store.state.auth.user.namaToko,
                createdBy:this.$store.state.auth.user._id,
                tokoImg:this.$store.state.auth.user.picture,
            }
        }
    },
    mounted(){
        console.log(this.$store.state.auth.user.namaKota);
    },
    computed:{
        wi(){
            let data = this.w;
            if(this.vdata.nama)
            data+=10;
            if(this.vdata.stok)
            data+=10;
            if(this.vdata.harga)
            data+=10;
            if(this.vdata.kategori.length>0)
            data+=10;
            if(this.vdata.description)
            data+=20;
            if(this.vdata.gambar.length>0)
            data+=30;
            return data;
        }
    },
    methods:{
        gambarBarang(){
                let fd = new FormData();
                let file;
                for(let i = 0;i<this.vdata.gambar.length;i++){
                    file = this.vdata.gambar[i];
                    this.$daycaca.compress(file,50,(data)=>{
                        fd.append('photos',data);
                    });
                }
                setTimeout(() => {
                    let keys = Object.keys(this.vdata);
                    keys.forEach(key=>{
                        fd.append(key,this.vdata[key]);
                    })
                    this.$axios.post('/api/barang/upload', fd, {
                    headers: {
                        'Authorization': this.$auth.$storage._state['_token.local'],
                        'Content-Type': 'multipart/form-data'
                    }
                    }).then(res => {
                        console.log(res);
                        this.$store.dispatch('refreshData');
                        this.$router.push('/shop');
                        this.$el.querySelector('#barangBtn').click();
                    });
                }, 1000);
        },
          upload(event){
            this.vdata.gambar = event;
            console.log(this.vdata.gambar);
        },
        resetUpload(){
            this.vdata.gambar = [];
            console.log('gambar',this.vdata.gambar);
        },
        saveData(){
            // alert('save');
            let that = this;
            // this.$nuxt.$emit('busyOn', true);
            console.log(this.vdata);
            this.$axios.post('/api/barang',this.vdata).then(res=>{
                console.log(res.data);
                let fd = new FormData();
                let file;
                for(let i = 0;i<this.vdata.gambar.length;i++){
                    file = this.vdata.gambar[i];
                    fd.append('photos', file);
                }
                this.$axios.post('/api/barang/upload', fd, {
                headers: {
                    'Authorization': this.$auth.$storage._state['_token.local'],
                    'Content-Type': 'multipart/form-data'
                }
                }).then(res => {
                    console.log(res);
                    that.$router.push('/shop');
                     that.$store.dispatch('refreshData');
                });
            });
        }
    }
}
</script>
<style scoped>
.checkGrid{
    grid: auto-flow / 1fr 1fr 1fr    ;
    grid-auto-rows: minmax(auto,auto);/*minimal tinggi dan auto lebar*/
    place-items: center center;
    grid-gap:10px 10px;
    display:grid;
}
</style>