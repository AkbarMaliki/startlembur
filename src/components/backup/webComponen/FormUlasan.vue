<template>
    <div>
        <br>
        <p class="text-center">
            Berikan Bintang
        </p>
        <hr>
         <div class="starContainer" v-if="$store.state.nossr">
            <div class="item2">
            <span style="cursor:pointer;" :style="{'color':star5==1?'yellow':'black'}" class="starNya" @click="stars5">
                <i class="fas fa-star" ></i>&nbsp;
                <i class="fas fa-star" ></i>&nbsp;
                <i class="fas fa-star" ></i>&nbsp;
                <i class="fas fa-star" ></i>&nbsp;
                <i class="fas fa-star" ></i>&nbsp;
            </span>
             <br>
            <span style="cursor:pointer;" :style="{'color':star4==1?'yellow':'black'}" class="starNya" @click="stars4">
            <i class="fas fa-star" ></i>&nbsp;
             <i class="fas fa-star" ></i>&nbsp;
             <i class="fas fa-star" ></i>&nbsp;
             <i class="fas fa-star" ></i>&nbsp;
             </span>
             <br>
            <span style="cursor:pointer;" :style="{'color':star3==1?'yellow':'black'}" class="starNya" @click="stars3">
            <i class="fas fa-star" ></i>&nbsp;
             <i class="fas fa-star" ></i>&nbsp;
             <i class="fas fa-star" ></i>&nbsp;
            </span>
             <br>
            <span style="cursor:pointer;" :style="{'color':star2==1?'yellow':'black'}" class="starNya" @click="stars2">
             <i class="fas fa-star" ></i>&nbsp;
             <i class="fas fa-star" ></i>&nbsp;
            </span>
             <br>
            <span style="cursor:pointer;" :style="{'color':star1==1?'yellow':'black'}" class="starNya" @click="stars1">
             <i class="fas fa-star" ></i>&nbsp;
            </span>
            </div>
        </div>
        <hr>
         <div class="sm-form">
            <label for="ulasan">Ulasan : </label>
            <textarea type="text" id="ulasan" name="ulasan" rows="2" placeholder="penilaian anda terhadap produk ..." v-model="review" class="form-control md-textarea"></textarea>
        </div>
        <br>
        <button type="button" @click="ulasan" class="btn btn-sm btn-outline-secondary  btn-block waves-effect">Simpan</button>
    </div>
</template>
<script>
export default{
    data(){
        return{
            star1:0,
            star2:0,
            star3:0,
            star4:0,
            star5:0,
            review:''
        }
    },
    methods:{
        ulasan(){
            let data = {};
            let fd = new FormData();
            data.star1=this.star1;
            data.star2=this.star2;
            data.star3=this.star3;
            data.star4=this.star4;
            data.star5=this.star5;
            data.id=this.$auth.user._id;
            data.idTransaksi = this.$route.query.idTransaksi;
            data.review=this.review;
            data.nama=this.$auth.user.name;
            this.$axios.put('/api/barang/review/'+this.$route.query.barangId,data,{
                headers:{
                    'Authorization':this.$auth.$storage._state['_token.local']
                }
            }).then(res=>{
                console.log(res.data);
                this.$nuxt.$emit('modal',false);
                this.$store.dispatch('refreshData');
            }).catch(err=>{
                console.log(err);
            })
        },
        stars5(){
            this.star1=0;this.star2=0;this.star3=0;this.star4=0;this.star5=1;
        },
        stars4(){
            this.star1=0;this.star2=0;this.star3=0;this.star4=1;this.star5=0;
        },
        stars3(){
            this.star1=0;this.star2=0;this.star3=1;this.star4=0;this.star5=0;
        },
        stars2(){
            this.star1=0;this.star2=1;this.star3=0;this.star4=0;this.star5=0;
        },
        stars1(){
            this.star1=1;this.star2=0;this.star3=0;this.star4=0;this.star5=0;
        }
    }   
}
</script>
<style scoped>
.starContainer{
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    display:flex;
}
.starNya:hover > i{
    color:red;
}
</style>