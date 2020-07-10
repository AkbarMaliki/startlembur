<template>
    <div>
        <div class="container-fluid" style="padding:10px 40px 40px 20px;">
            <div class="row">
                <div class="col-sm-1">
                </div>
                <div class="offset-6 col-sm-4">
                   <label class="sr-only" for="inputSearch">Cari</label>
                   <div class="input-group mb-2">
                       <div class="input-group-prepend">
                           <div class="input-group-text">@</div>
                       </div>
                       <input type="text" class="form-control py-0" id="inputSearch" placeholder="Cari no pesanan" v-model="search">
                   </div>
                </div>
            </div>
            <div class="row" style="box-shadow:1px 2px 4px gray;">
                <div class="col-sm-12 borderTableTop" >
                    <div>
                        05 Oktober 2018 
                    </div>
                </div>
            </div>
            <template v-if="keranjang.length>0">
            <div class="row isiTable " v-for="(item, index) in keranjang" :key="index" style="box-shadow:1px 2px 4px gray;" >
                <div class="col-sm-2 text-center" style="border-left:2px dotted black;">
                    <img :src="item.barang[0].img[0]"  v-compressja
                    class="img-thumbnail"
                    style="height:60px;"
                    alt="">
                </div>
                <div class="col-sm-4 " style="padding-top:10px;" >
                    <nuxt-link :to="`/shop/${item.barangId}`" style="font-size:16px;color:black">
                        {{item.barang[0].nama}}
                    </nuxt-link>
                </div>
                <div class="col-sm-4 hargaPage">
                    <p style="font-size:12px;">
                        Pesanan : {{item.barang[0]._id}}
                    </p>
                    <p>
                         Rp. {{item.barang[0].harga}} <span class="pull-right">Jumlah : {{item.jumlah}}</span>
                    </p>
                    <nuxt-link to="/" tag="p" class="text-right" style="font-size:15px;font-weight:bold;cursor:pointer;text-shadow:1px 1px 2px blue">
                        {{item.penjual[0].namaToko}}
                    </nuxt-link>

                </div>
                <div class="col-sm-2 actionPage ">
                    <button type="button" class="btn btn-sm btn-success  btn-block" style="font-size:13px;"
                    @click="beli(item._id,item.barang[0]._id);"
                    >Lanjutkan </button>
                    <button type="button" class="btn btn-sm btn-outline-danger  btn-block" style="font-size:13px;" v-if="item.idPembeli==$auth.user._id"
                    @click="hapus(item._id)"
                    >Batalkan </button>
                </div>
            </div>
            </template>
            <template v-else>
                <div class="flex1" style="height:200px;">
                    KERANJANG KOSONG
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            search:'',
            dataKeranjang:[]
        }
    },
    computed:{
        keranjang(){
            let data = this.dataKeranjang;
           if(data[0]!=undefined){
            if(this.$store.state.nossr){
                if(this.$auth.user.email=='admin@gmail.com'){
                    data=data.filter(e=>{
                        return e.status==1 
                });
                }else{
                    data=data.filter(e=>{
                        return e.status==1 && e.idPembeli==this.$auth.user._id
                    });
                }
            }
            console.log(data);
            if(data.length>0){
                let keys = Object.keys(data[0]);
                data = data.filter(e=>{
                let hasil=false;
                keys.forEach(key=>{
                    if(typeof e[key]=='object' ){
                            }else{
                                if(e[key].toString().indexOf(this.search)!=-1){
                                        hasil=true;
                      }
                     }
                    });
                    return hasil
                });
            }
           }
            return data;
        },
        
    },
    methods:{
         beli(id,id2){
            let data = {};
            data.id = id2;
            this.$axios.put('/api/transaksi/beli/'+id,data,{
                headers:{
                    "Authorization":localStorage.getItem('auth._token.local')
                }
            })
            .then(res=>{
                console.log(res);
                this.$store.dispatch('refreshData');
                setTimeout(() => {
                    this.$nuxt.$emit('transaksiComponent','Dibayar');
                }, 500);
            })
            .catch(err=>{
                this.$store.dispatch('refreshData');
                console.log(err);
            });
        },
        hapus(id){
            this.$axios.delete('/api/transaksi/hapus/'+id,{
                headers:{
                    "Authorization":localStorage.getItem('auth._token.local')
                }
            })
            .then(res=>{
                console.log(res);
                this.$store.dispatch('refreshData');
            })
            .catch(err=>{
                this.$store.dispatch('refreshData');
                console.log(err);
            });
        },
    },
    mounted() {
        this.$axios.get('/api/transaksi/keranjang',{headers:{"Authorization":this.$auth.$storage._state['_token.local']}})
        .then(res=>{
            this.dataKeranjang = res.data.data;
        })
    },
}
</script>
<style scoped>
.isiTable{
    padding:10px;
    font-size:13px;
}
.isiTable:nth-of-type(odd){
    background:white;
}
.isiTable:nth-of-type(even){
    background:rgba(199, 194, 194, 0.527);
}
.borderTableTop{
    background: rgba(185, 185, 185, 0.596);
    grid: auto-flow / 1fr 2fr 1fr    ;
    grid-auto-rows: minmax(30px,auto);/*minimal tinggi dan auto lebar*/
    grid-gap:10px 10px;
    display:grid;
    place-items: center center;
    font-size:13px;
}
.divTable2{
}
.divTable3{
    
}
.hargaPage{
    flex-flow: column wrap;
    justify-content: center;
    align-items: stretch;
    display:flex;
}
.actionPage{
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    display:flex;
}
</style>