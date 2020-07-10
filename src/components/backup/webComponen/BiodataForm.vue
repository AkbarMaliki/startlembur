<template>
    <div>
        <br>
        <h5>Biodata Edit Form</h5>
        <hr>
        <form @submit.prevent="saveData" >
        <div class="sm-form ">
            <label for="name" style="font-size:15px;font-family:times new roman;">Nama :</label>
            <input type="text" id="name" name="name" class="form-control form-control-sm" placeholder="Nama" v-model="vdata.name" >
        </div>
        <div class="sm-form ">
            <label for="namaToko" style="font-size:15px;font-family:times new roman;">Nama Toko :</label>
            <input type="text" id="namaToko" name="namaToko" class="form-control form-control-sm" placeholder="Nama Toko" v-model="vdata.namaToko" >
        </div>
        <div class="sm-form ">
            <label for="hp" style="font-size:15px;font-family:times new roman;">No Telp/hp :</label>
            <input type="text" id="hp" name="hp" class="form-control form-control-sm" placeholder="Nama Toko" v-model="vdata.hp" >
        </div>
         <div class="sm-form">
            <label for="alamat">Alamat</label>
            <textarea type="text" id="alamat" name="alamat" rows="2" placeholder="Alamat" class="form-control md-textarea" v-model="vdata.alamat"></textarea>
        </div>
        <hr>
        Kurir Yang Disediakan : <br>
        <input type="checkbox" id="JNE" value="JNE" v-model="vdata.kurir">
        <label for="JNE">JNE</label><br>
        <input type="checkbox" id="J&T" value="J&T" v-model="vdata.kurir">
        <label for="J&T">J&T</label>
        <br>
        <input type="checkbox"  id="WIKI" value="WIKI" v-model="vdata.kurir">
        <label for="WIKI">WIKI</label>
        <br>
        <hr>
        <span>Provinsi : </span>
        <select class="form-control" v-model="vdata.provinsi" @change="gantiProv">
            <option disabled value="">Please select one</option>
            <option :value="item.id_prov" v-for="(item, index) in $store.state.provinsi" :key="index">{{item.provinsi}}</option>
        </select>
        <span v-if="kabOn">Kabupaten : </span>
         <select class="form-control" v-model="vdata.kabupaten" v-if="vdata.provinsi" @change="gantiKab">
            <option disabled value="">Please select one</option>
            <option :value="item.id_kab" v-for="(item, index) in vkab" :key="index">{{item.kabupaten}}</option>
        </select>
        <span v-if="kecOn">Kecamatan : </span>
        <select class="form-control" v-model="vdata.kecamatan" v-if="vdata.kabupaten">
            <option disabled value="">Please select one</option>
            <option :value="item.id_kec" v-for="(item, index) in vkec" :key="index">{{item.kecamatan}}</option>
        </select>
        <hr>
        
        Catatan Toko : 
        <wysiwyg v-model="vdata.catatan" style="z-index:1;"/>
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
                name:'',
                kurir:[]
            },
            prov:null,
            kec:null,
            kab:null,
            kabOn:false,
            kecOn:false
        }
    },
    computed:{
        vkab(){
            let data = this.$store.state.kabupaten;
            this.prov = this.vdata.provinsi;
            data = data.filter(e=>
            e.id_prov==this.prov)
            console.log(data);
            return data
        },
        vkec(){
            let data = this.$store.state.kecamatan;
            this.kab = this.vdata.kabupaten;
            data = data.filter(e=>{
                return e.id_kab==this.kab
            })
            return data
        }
    },
    mounted(){
        let keys = Object.keys(this.$store.state.auth.user);
        keys.forEach(key=>{
            if(key!='_id'){
                this.vdata[key]=this.$store.state.auth.user[key];
            }
        });
    },
    methods:{
        gantiProv(e){
            this.kabOn=true;
            console.dir(e.target.selectedOptions[0].value);
            this.prov = e.target.selectedOptions[0].value;
        },
        gantiKab(e){
            this.kecOn=true;
            console.dir(e.target.selectedOptions[0].value);
            this.kab = e.target.selectedOptions[0].value;
        },
        saveData(){
            // alert('save');
            let that = this;
            let formdata = new FormData();
            formdata.append('data',this.vdata)
            this.$axios.put('/api/auth/user',this.vdata).then(res=>{
                that.$store.dispatch('refreshData');
                that.$nuxt.$emit('modal',false);

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