<template>
        <transition v-if="active" tag='div' enter-active-class="animated fadeIn"  leave-active-class="animated fadeOut" mode="out-in">
            <div class="MyImageContainer fixZ" @click="closeIt($event)">
                <button type="button" class="btn btn-sm btn-outline-danger rounded-circle  waves-effect btnClose" @click="close" >X</button>
                <button type="button" class="btn btn-sm btn-outline-success  prev" @click="prev"><i class="fas fa-backward"></i></button>
                <button type="button" class="btn btn-sm btn-outline-success  next" @click="next"><i class="fas fa-forward"></i></button>
                <v-touch v-on:swipeleft="onSwipeLeft"
                v-on:swiperight="onSwipeRight"
                >
                    <transition-group tag="div" class="imgContainer"  enter-active-class="animated fadeIn" leave-active-class="animated fadeOutRight" mode="out-in">
                        <img class="imgnya animated fadeIn"  v-for="(item, index) in imgList" :key="index+'test1'" :src="item" v-show="index==imgIndex" alt="">
                    </transition-group>
                </v-touch>
                <div class="imgPosList">
                    <img style="cursor:pointer;" @click="imgIndex=index" v-for="(item, index) in imgList" :key="index" :src="item" class="imgLitleList" :class="[{act:index==imgIndex}]" alt="">
                </div>
            </div>
        </transition>
</template>
<script>
export default{
    data(){
        return{
            active:false,
            imgList:[],
            imgIndex:0,
            swipeDirection: 'None'
        }
    },
    mounted() {
        this.$nuxt.$on('myimage',(data)=>{
            this.imgList=data;
        });
        let that = this;
        this.$nuxt.$on('myimageactive',(data)=>{
            //saat di active
            document.addEventListener('keydown',function activenya(e){
                if(e.keyCode==27){
                    that.$nuxt.$emit('myimagedeactive',false);
                    document.removeEventListener('keydown',activenya);
                }
            });
            this.active=true;
            this.imgIndex=data;
        });
        this.$nuxt.$on('myimagedeactive',(data)=>{
            this.active=data;
        });
    },
    methods:{
        onSwipeLeft(){
                this.prev();
        },
        onSwipeRight(){
                this.next();
        },
        prev(){
            this.imgIndex--;
            if(this.imgIndex<0){
                this.imgIndex=this.imgList.length-1;
            }
        },
        closeIt(e){
            if(e.target.classList.contains('MyImageContainer')){
                this.active=false;
            }else{
            }
        },
        next(){
            this.imgIndex++;
            if(this.imgIndex>this.imgList.length-1){
                this.imgIndex=0;
            }
        },
        close(){
            this.active=false;
        }
    }
}
</script>

<style scoped>
.MyImageContainer{
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    display:flex;
    position: fixed;
    height: 100%;
    width: 100%;
    top:0;
    background: rgba(0, 0, 0, 0.829);
}
.imgContainer{
   flex-flow: row wrap;
   justify-content: center;
   align-items: center;
   display:flex;
}
.imgnya{
    position:fixed;
    top:100px;
    z-index: 100;
    transition: all 0.2s ease-in-out;
    transform:scale(1.1);max-height:425px;
}
.imgnya:hover{
     transform:scale(1.3);
}
.prev{
    position: fixed;
    z-index: 101;
    left:10%;
}
.next{
    z-index: 101;
    position: fixed;
    right:10%;
}
.imgPosList{
    position:fixed;
    bottom:5px;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    display:flex;
}
.imgLitleList{
    height: 70px;
    margin-left:5px;
    transition: all ease-in-out 0.3s;
}
.imgLitleList:hover{
    transform: scale(1.3);
}
.imgLitleList.act{
    box-shadow: 1px 1px 1px 1px red;
}
.btnClose{
    position: fixed;
    top:55px;
    right:20px;
    z-index: 1000000;
}
</style>