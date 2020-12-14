<template>
    <div>
        {{vdata}}
        <div class="card">
            <div class="card-header">BUKU</div>
            <div class="card-body">
                <div class="sm-form ">
                    <label for="title">Your title</label>
                    <input type="text" id="title" name="title" class="form-control form-control-sm" placeholder="title" v-model="vdata.title" >
                </div>
                <div class="sm-form ">
                    <label for="keterangan">Your keterangan</label>
                    <input type="text" id="keterangan" name="keterangan" class="form-control form-control-sm" placeholder="keterangan" v-model="vdata.keterangan" >
                </div>
                <button type="button" @click="create" class="btn btn-sm btn-primary  ">Simpan</button>
            </div>
        </div>
        <p v-for="(item, index) in datanya" :key="index">{{item.title}}</p>
    </div>
</template>
<script>
import firebase from 'firebase'
let db = firebase.firestore()
export default {
    data(){
        return{
            datanya:[],
            pilih:{},
            vdata:{}
        }
    },
    methods: {
        getData(){
            db.collection('buku').onSnapshot(res=>{
                let arr=[]
                res.forEach(e=>{
                    arr.push({id:e.id,...e.data()})
                })
                this.datanya=arr
            })
        },
        create(){
            db.collection('buku').doc().set(this.vdata)
        },
        update(){
            db.collection('buku').doc(this.pilih.id).set(this.vdata,{merge:true}).then(res=>{
                console.log('edit berhasil')
            })
        },
        deletes(){
            db.collection('buku').doc(this.pilih.id).delete().then(res=>{
                console.log('delete berhasil')
            })
        },
    },
    mounted() {
        this.getData()
        this.$store.dispatch('ceklogin')
            // db.collection('buku').where('uid',"==",this.$store.state.users.uid).get().then(res=>{
            //     res.forEach(e=>{
            //         console.log({ids:e.id,...e.data()})
            //     })
            // })
            console.log(firebase.auth().currentUser)
        this.vdata.uid=this.$store.state.users.uid
        this.vdata.updateAt=new Date()
        this.$forceUpdate()
    },
}
</script>