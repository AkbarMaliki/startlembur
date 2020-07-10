<template>
    <div>
        <h5>Isi No Resi Barang : </h5>
        <hr class="style13">
        <form @submit.prevent="simpanResi">
        <div class="sm-form ">
            <label for="resi">isi resi dan lanjutkan :</label>
            <input type="text" id="resi" name="resi" class="form-control form-control-sm" placeholder="resi" required v-model="vdata.resi" >
        </div>
        <hr>
        <button type="submit" style="width:150px;" class="btn btn-sm btn-outline-secondary   waves-effect pull-right">Lanjutkan</button>
        </form>
    </div>
</template>
<script>
export default{
    data(){
        return{
            vdata:{}
        }
    },
    methods:{
        simpanResi(){
            let id = this.$route.query.idTransaksi;
            this.$axios.put('/api/transaksi/kirim/'+id,this.vdata,{
                headers:{
                    "Authorization":localStorage.getItem('auth._token.local')
                }
            })
            .then(res=>{
                console.log(res);
                this.$store.dispatch('refreshData');
                this.$nuxt.$emit('transaksiComponent','Dikirim');
                this.$nuxt.$emit('modal',false);
            })
            .catch(err=>{
                this.$store.dispatch('refreshData');
                console.log(err);
            });
        }
    }
}
</script>