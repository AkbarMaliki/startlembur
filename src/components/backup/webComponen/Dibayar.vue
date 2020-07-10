<template>
    <div>
        <div class="container-fluid" style="padding:10px 40px 40px 20px;">
            <div class="row">
                <div class="col-sm-3">
                    <p class="p-2" style="color:red;font-size:12px;font-family:times new roman;">
                        Note: gratis ongkos kirim di pulai Borneo
                    </p>
                    <span style="font-size:12px;font-family:times new roman;">
                        Sort :
                    </span> 
                    <div class="flex1">
                        <button type="button"  class="btn btn-sm btn-outline-dark  " style="font-size:12px;font-family:times new roman;" @click="sort=true;dibeli=false;" :class="{'active':!dibeli}">Terjual</button>&nbsp;
                        <button type="button"  class="btn btn-sm btn-outline-dark  " style="font-size:12px;font-family:times new roman;" @click="sort=true;dibeli=true;" :class="{'active':dibeli}">Dibeli&nbsp;&nbsp;</button>
                    </div>
                    <hr>
                </div>
                <div class="offset-3 col-sm-4">
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
                    <div></div>
                    
                </div>
            </div>
            <template v-if="keranjang.length>0">
            <div class="row isiTable " v-for="(item, index) in keranjang" :key="index" style="box-shadow:1px 2px 4px gray;" >
                <div class="col-sm-2 text-center" style="border-left:2px dotted black;">
                    <img :src="item.barang[0].img[0]"  v-compressja
                    :key="item.barang[0].img[0]"
                    class="img-thumbnail"
                    style="height:60px;"
                    alt="">
                    <p v-if="item.idPenjual==$auth.user._id" style="font-weight:bold;font-family:times new roman;" >
                        Terjual
                    </p>
                     <p v-if="item.idPembeli==$auth.user._id" style="font-weight:bold;font-family:times new roman;" >
                        Dibeli
                    </p>
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
                         Rp. {{item.id}} <span class="pull-right">Jumlah : {{item.jumlah}}</span>
                    </p>
                    <nuxt-link to="/" tag="p" class="text-right" style="font-size:15px;font-weight:bold;cursor:pointer;text-shadow:1px 1px 2px blue">
                        {{item.penjual[0].namaToko}}
                    </nuxt-link>

                </div>
                <div class="col-sm-2 actionPage ">
                    <button type="button" class="btn btn-sm btn-success  btn-block" style="font-size:13px;"
                    @click="$nuxt.$emit('modal',true);$nuxt.$emit('modalId','InfoPembayaran');$route.query.idTransaksi=item._id;$route.query.bayar=false"
                    v-if="$auth.user._id==item.penjual[0]._id">Info Barang</button>
                     <button type="button" class="btn btn-sm btn-success  btn-block" style="font-size:13px;"
                    @click="$nuxt.$emit('modal',true);$nuxt.$emit('modalId','InfoPembayaran');$route.query.idTransaksi=item._id;$route.query.bayar=false"
                    v-if="$auth.user._id!=item.penjual[0]._id">Bayar</button>
                    <button type="button" class="btn btn-sm btn-outline-danger  btn-block" style="font-size:13px;" v-if="item.idPembeli==$auth.user._id"
                    @click="hapus(item._id)"
                    >Batalkan </button>
                    <button type="button" class="btn btn-sm btn-outline-success  btn-block" style="font-size:13px;" 
                    @click="proses(item._id);$nuxt.$emit('transaksiComponent','Diproses');" v-if="$auth.user.email=='admin@gmail.com'"
                    >Proses </button>
                </div>
            </div>
            </template>
            <template v-else>
                <div class="flex1" style="height:200px;">
                    Barang Menunggu Dibayar Kosong
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
            dataKeranjang:[],
            sort:false,
            dibeli:false
        }
    },
    computed:{
        keranjang(){
            let data = this.dataKeranjang;
           if(data[0]!=undefined){
            if(this.$auth.user.email=='admin@gmail.com'){
                data=data.filter(e=>{
                    return e.status==2  
                });
            }else{
                data=data.filter(e=>{
                   return e.status==2  && (e.idPembeli==this.$auth.user._id || e.idPenjual==this.$auth.user._id)
                });  
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
           if(this.sort){
               if(this.dibeli){
                    data = data.filter(e=>{
                       return e.idPembeli==this.$auth.user._id;
                   });
               }else{
                   data = data.filter(e=>{
                       return e.idPenjual==this.$auth.user._id;
                   });
               }
           }
            return data;
        },
        
    },
    methods:{
        sell(){
            alert('tes')
            this.dibeli=false;
            this.sort=true;
            console.log(this.sort);
        },
        buy(){
              this.dibeli=true;
            this.sort=true
        },
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
            })
            .catch(err=>{
                this.$store.dispatch('refreshData');
                console.log(err);
            });
        },
        hapus(id){
            this.$axios.put('/api/transaksi/batal/'+id,{
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
        proses(id){
            alert('proses');
            this.$axios.put('/api/transaksi/proses/'+id,{
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