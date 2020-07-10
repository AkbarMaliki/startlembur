<template>
    <div>
        <input type="file" name="" id="uploadFile1" multiple>
        <button type="button" @click="compress" class="btn btn-sm btn-primary  ">Upload</button>
        <img src="https://myanimelist.cdn-dena.com/images/anime/13/87235.jpg" alt="" id="source_img" @click="imageuploaded($event)">
        <img :src="gambar" v-if="gambar.length>0" :key='1' alt="">
    </div>
</template>
<script>
import axios from 'axios';
if(process.browser){
    // let imageCompressor=require('j-i-c');
}
export default{
    data(){
        return{
            gambar:'',
            url:process.env.HOST_URL+'/api/data/barang',
            vdata:{
                array:[1,2,3,4,5]
            }
        }
    },
    methods:{
        conpress(){
            let fd = new FormData();
            let img = this.vdata.gambar;
            this.$daycaca.compress(img[0],50,(data)=>{
                console.log(data);
                // fd.append('photos',data);
            });
            // this.$nuxt.$emit('busyOn',true);
            // setTimeout(() => {
            //     that.$axios.post('/api/data/gambar',fd,{
            //         headers:{
            //             "Authorization":that.$auth.$storage._state['_token.local']
            //         }
            //     }).then(res=>{
            //         this.$nuxt.$emit('busyOn',false);
            //         console.log(res.data);
            //     })
            // }, 1000);          
        },
        compress(){
            let that = this;
            let fd = new FormData();
            let data = this.$el.querySelector('#uploadFile1');
            let img = data.files;
            // for(let i = 0 ;i<img.length;i++){
            console.log(img[0]);
                this.$daycaca.compress(img[0],40,(data)=>{
                    // console.log(data);
                    this.gambar = data ;
                    this.urltoFile(data,img[0].name,img[0].type).then(res=>{
                    let file = res ;
                    console.log(file)
                    fd.append('photos',file);
                    this.$nuxt.$emit('busyOn',true);
                    setTimeout(() => {
                        that.$axios.post('/api/data/gambar',fd,{
                            headers:{
                                "Authorization":that.$auth.$storage._state['_token.local']
                            }
                        }).then(res=>{
                            this.$nuxt.$emit('busyOn',false);
                            console.log(res.data);
                        })
                    }, 0);            
                    })
                });
            // }
         },
         hasil(){
             //! =================================================
            let that = this;
            let fd = new FormData();
            let data = this.data2.picture[0];
            let img = data;
            console.log(img);
            this.$daycaca.compress(img,40,(data)=>{
                this.gambar = data ;
                this.urltoFile(data,img.name,img.type).then(res=>{
                let file = res ;
                console.log(file)
                fd.append('photos',file);
                this.$nuxt.$emit('busyOn',true);
                setTimeout(() => {
                    that.$axios.post('/api/data/gambar',fd,{
                        headers:{
                            "Authorization":that.$auth.$storage._state['_token.local']
                        }
                    }).then(res=>{
                        this.$nuxt.$emit('busyOn',false);
                        console.log(res.data);
                    })
                }, 0);            
                })
            });
            //! ============================
         },
         urltoFile(url, filename, mimeType){
            return (fetch(url)
                .then(function(res){return res.arrayBuffer();})
                .then(function(buf){return new File([buf], filename, {type:mimeType});})
            );
        },
         imageuploaded(e){
            //  var file = new File([e.target.src], "name.png");
           
         },
         dataURLtoFile(dataurl, filename) {
            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {type:mime});
        },
         blobToFile(theBlob, fileName){
            //A Blob() is almost a File() - it's just missing the two properties below which we will add
            theBlob.lastModifiedDate = new Date();
            theBlob.name = fileName;
            return theBlob;
        }
    },
    mounted() {
        // console.log(new imageCompressor);
    },
}
</script>