<template>
    <div>
        <ul>
            <li v-for="(item, index) in lisItem" :key="index">{{index}}  {{item.fname}}</li>
            <button type="button" class="btn btn-sm btn-outline-primary   waves-effect" @click="slicer+=30">LOAD MORE</button>
        </ul>
    </div>
</template>
<script>
export default{
    data(){
        return{
            slicer:100
        }
    },
    computed:{
        lisItem(){
            let hasil = this.$store.state.users;
            hasil=hasil.slice(0,this.slicer);
            return hasil
        }
    },
}
</script>
<style>

</style>