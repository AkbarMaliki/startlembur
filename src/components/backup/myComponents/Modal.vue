<template>
    <div>
            <template>  
                <div key="modalKey1" class="modalSpace" @click="$nuxt.$emit('modal',false);" >
                </div>
                <div key="modalKey2" class="modalContainer" >
                    <div style="position:absolute;top:0;background:lightblue;left:0;right:0;height:30px;"></div>
                    <component :is="modalId"></component>
                </div>
            </template>
    </div>
</template>
<script>
export default{
    // data(){
        // return{
            // modalId:'BarangForm'
        // }
    // },
    props:['modalId'],
    created() {//me listen ke emit trigger created di eksekusi saat instance dibuat
            console.log('create');
    },
    activated() {//! me listen perpindahan components
            console.log('active');
    },
    deactivated() {//! me listen perpindahan components
            console.log('deactive');
    },
    destroyed() {//! melistnen destroy or not component
            console.log('dest');
    },
    methods:{
      
    },
    
}
</script>
<style scoped>
.modalSpace{
     width: 100%;
     height:700px;
     position:fixed;
     background:rgba(68, 64, 64, 0.452);
     flex-flow: row wrap;
     justify-content: center;
     align-items: center;
     display:flex;
     z-index:1000;
 }
 .modalContainer{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 60%;
    height: 500px;
    overflow: scroll;
    z-index: 1000;
    background:white;
    padding:30px;
    box-shadow: 10px 10px 5px gray;
    border-top-left-radius: 3%;
    border-bottom-right-radius: 3%;
 }
</style>