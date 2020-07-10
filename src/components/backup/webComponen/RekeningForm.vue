<template>
    <div>
        <br>
        <h5>Rekening Bank Edit Form : </h5>
        <hr>
        <form @submit.prevent="saveData" >
        <div class="sm-form ">
            <label for="bank" style="font-size:15px;font-family:times new roman;">Nama Bank :</label>
            <input type="text" id="bank" name="bank" class="form-control form-control-sm" placeholder="Nama Bank" v-model="vdata.bank" >
        </div>
        <div class="sm-form ">
            <label for="atm" style="font-size:15px;font-family:times new roman;">No ATM :</label>
            <input type="text" id="atm" name="atm" class="form-control form-control-sm" placeholder="No ATM" v-model="vdata.atm" >
        </div>
        <div class="sm-form ">
            <label for="NamaATM" style="font-size:15px;font-family:times new roman;">Nama di Rekening :</label>
            <input type="text" id="NamaATM" name="NamaATM" class="form-control form-control-sm" placeholder="nama rekening" v-model="vdata.namaatm" >
        </div>
        <div style="padding-left:20px;padding-top:20px;">
            <input type="submit" value="simpan" class="btn btn-md btn-success">
        </div>
        </form>
    </div>
</template>
<script>
export default{
    data(){
        return{
            vdata:{
            }
        }
    },
    mounted(){
        let keys = Object.keys(this.$store.state.auth.user);
        keys.forEach(key=>{
            if(key!='_id'){
                this.vdata[key]=this.$store.state.auth.user[key];
            }
        })
    },
    methods:{
        saveData(){
            // alert('save');
            let that = this;
            this.$axios.put('/api/auth/atm',this.vdata).then(res=>{
                that.$nuxt.$emit('modal',false);
                that.$store.dispatch('refreshData');
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