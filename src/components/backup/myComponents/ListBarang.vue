<template>
    <div id="mainContainer">
        <div class="menuList d-none d-sm-block text-center">
            <div class="listMenu">
                <hr class="style17">
                Kategori
                <hr class="style12">
                <ul class="listKategori">
                    <li class="listKat" v-for="(item, index) in list" :key="index">
                        {{index}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="itemList">
            <div class="sortable">
                <button type="button" class="btn btn-sm btn-outline-primary   waves-effect">
                    Terlaris
                </button>
                &nbsp;
                <button type="button" class="btn btn-sm btn-outline-primary   waves-effect">
                    Terbaru
                </button>
                &nbsp;
                <button type="button" class="btn btn-sm btn-outline-primary   waves-effect">
                    MURAH KE MAHAL
                </button>
                &nbsp;
                <button type="button" class="btn btn-sm btn-outline-primary   waves-effect">
                    MAHAL KE MURAH
                </button>
            </div>
            <div class="listItem" v-if="$store.state.barang.length>0">
                <div class="items text-justify" v-for="(item, index) in $store.state.barang" :key="index">
                     <div class="pull-left" style="font-size:10px;">
                         <nuxt-link to="/"> 
                         {{item.toko}}
                         </nuxt-link>
                     </div>
                     <div class="pull-right" style="font-size:10px;">
                         {{item.kota}}
                     </div>
                    <nuxt-link :to="`/${index}`" style="text-decoration:none;" >
                    <img :src="item.gambar[0].img"
                    class="img-thumbnail imgItem"
                     alt="">
                     <div class="descItem">
                        <span >
                         {{item.nama}}
                        </span> 
                        <hr>
                        <p>Rp.{{item.harga}}</p>    
                        <div style="position:static;">
                            <span class="pull-left">
                                <i class="fas fa-star" style="color:yellow;"></i>
                                {{index*40}}
                            </span>
                            <span class="pull-right">
                                <i class="far fa-heart" style="color:red;"></i>
                                {{index*120}}
                            </span>
                        </div>
                        <br>
                       
                     </div>
                    </nuxt-link>
                    <!-- <button type="button" class="btn btn-sm btn-primary" @click="refresh">refresh</button> -->
                    </div>
            </div>
            <div v-else>
                BARANG KOSONG
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            list:[1,2,3,4,5,6,7,8]
        }
    },
    props:['barang'],
    methods:{
        refresh(){
            this.$forceUpdate();
        }
    },
    computed:{
        widthImg(){
            return 100;
        },
        // barangs(){
        //     let data = this.barang;
        //     // data=data.sort((a,b)=>a.harga<b.harga);
        //     return data;
        // }
    },
    mounted(){
    }
}
</script>
<style scoped>
#mainContainer{
    grid: auto-flow / 1fr    ;
    grid-auto-rows: minmax(100px,auto);/*minimal tinggi dan auto lebar*/
    place-items: stretch stretch;
    grid-gap:10px 10px;
    display:grid;
    margin-top:20px;
}
.namaToko{
    margin:auto auto;
    display:none;
    height:100px;background:black;color:white;
}
.descItem:hover > .namaToko{
    display:initial;
    margin-top:12px;height:100px;background:black;color:white;
}
.hide{
    display:none;
}
.menuList{
    margin-left:10px;
    
}
.listKategori{
    list-style: none;
    padding-left:5px;
    padding-right: 5px;
    padding-bottom:10px;
    border-radius: 10%;
    cursor: pointer;
    display:block;

}
.listKat{
    box-shadow: 1px 1px 1px black;

}
.listMenu{
    background: white;
    box-shadow: 1px 1px 1px black;
    min-height:300px;
}
.itemList{
    background: white;
    margin-right:10px;
    box-shadow: 1px 1px 1px black;
}
.sortable{
    padding:15px;
    background:whitesmoke;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    display:flex;
}
.items{
    padding:3px;
    font-size:13px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    transition: all ease-in-out 0.5s;
    cursor: pointer;
    border-radius: 3%;
    padding:5px;
    box-shadow: 1px 2px 4px black;
}
.descItem{
    /* padding: 5px 10px 0px 10px; */
    /* line-height:0.8; */
    color: rgba(0, 0, 0, 0.568);
    text-decoration: none;
}
.items:hover{
    
}
.imgItem:hover{
    transition: all ease-in-out 0.5s;
    transform: scale(1.1);
}
.listItem{
       padding:10px; 
       grid: auto-flow / 1fr 1fr  ;
       grid-auto-rows: minmax(auto,auto);/*minimal tinggi dan auto lebar*/
       place-items: stretch stretch;
       grid-gap:10px 10px;
       display:grid;
    }
/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { 
    #mainContainer{
        grid: auto-flow / 1fr 4fr ;  
    }
    .listItem{ grid: auto-flow / 1fr 1fr    ;}
 }

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
     #mainContainer{
        grid: auto-flow / 1fr 4fr ;  
    } 
    .listItem{ grid: auto-flow / 1fr 1fr 1fr    ;}
    
 }

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
    .listItem{ grid: auto-flow / 1fr 1fr 1fr 1fr     ;}
 }

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
    .listItem{ grid: auto-flow / 1fr 1fr 1fr 1fr 1fr    ;}
 }

</style>