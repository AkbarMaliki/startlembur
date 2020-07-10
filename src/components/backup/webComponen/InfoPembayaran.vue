<template>
    <div>
        <p class="text-center" style="font-family:times new roman;font-size:20px">INFO TRANSAKSI</p>
        <hr>
        <div class="container-fluid">
            <div class="row" v-if="mulai">
                <div class="col-sm-4" style="font-size:12px;font-weight:bold;">
                    
                    <img :src="item.barang[0].img[0]" v-compressja class="img-thumbnail" alt=""> <hr>
                     kode Pesanan  :
                    <p style="overflow:scroll">
                        {{item._id}}
                    </p>
                        <hr>
                </div>
                <div class="col-sm-8">
                        <p class="text-center " style="text-transform: capitalize;" >
                            {{item.barang[0].toko}} 
                        </p>
                    <div style="font-size:13px;">
                       <hr class="style16">
                       <pre>
Nama Pesanan    : {{item.barang[0].nama}} <br>
Jumlah dibeli   : {{item.jumlah}}<br>
Harga          : {{rupiah(item.id)}}<br>
Kondisi : {{item.barang[0].kondisi}} <br>
Dibayar : {{item.dibayar?'Lunas':'Belum'}}
<hr>
Nama Pembeli : {{item.pembeli[0].name}} <br>
<span v-if="$auth.user.email=='admin@gmail.com'">Rekening : {{item.pembeli[0].atm}}</span>
Nama Penjual : {{item.penjual[0].name}}<br>
<span v-if="$auth.user.email=='admin@gmail.com'">Rekening : {{item.penjual[0].atm}}</span>
<hr>
Alamat dari : {{item.barang[0].kota}} <br>
Alamat Tujuan : {{item.pembeli[0].alamat}}<br>
Tanggal pesanan : {{$moment(item.createdAt).format('LL')}}<br>
                       </pre>
                       <hr class="style16">
                    </div>
                    <hr>
                    <span @click="$nuxt.$emit('modal',false)" >
                        <nuxt-link :to="'/transaksi/cetak/'+item._id" tag="button" class="btn btn-sm btn-outline-secondary btn-block waves-effect" v-if="$route.query.bayar">
                            Cetak Bukti Pembayaran
                        </nuxt-link>
                    </span>
                    <hr>
                    <div v-if="!$route.query.bayar" style="padding:10px;background:rgba(224, 166, 166, 0.562);">
                        <span style="font-size:14px;">Untuk melakukan pembayaran dapat di transfer ke rekening berikut: <br>
                        </span> <br>
                        BRI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;: 0031-01-009564-53-9 <br>
                        Atas Nama : TAUFIK AKBAR MALIKI
                        <br>
                        <p style="font-size:12px;color:red;font-family:times new roman;">
                        Apabila dana telah masuk maka penjual akan diberitahu agar barang bisa diproses
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            dataKeranjang:{},
            mulai:false
        }
    },
    methods:{
        cek(){
            console.log(this.$moment().format('dddd'));
        },
        rupiah(angka)
        {
            var rupiah = '';		
            var angkarev = angka.toString().split('').reverse().join('');
            for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
            return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
        }
    },
    computed:{
        item(){
            let data = this.dataKeranjang;
            return data;
        }
    },
    mounted() {
        //? filter hanya untuk 1 transaksi
        this.$axios.get('/api/transaksi/keranjang',{headers:{"Authorization":this.$auth.$storage._state['_token.local']}})
        .then(res=>{
            let data = res.data.data;
            data=data.filter(e=>{
                return e._id==this.$route.query.idTransaksi
            });
            this.dataKeranjang = data[0];
            this.mulai=true;
            console.log(data[0]);
        })
    },
}
</script>
<style scoped>
.tes{
    color:rgba(224, 166, 166, 0.562);
}
</style>