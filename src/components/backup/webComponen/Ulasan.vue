<template>
    <div>
        <div class="starContainer" v-if="$store.state.nossr">
           <span style="font-size:15px;font-weight:bold;">{{item.toko}}</span> 
            <div class="item2">
             <i class="fas fa-star" style="color:yellow;"></i>&nbsp;
             <i class="fas fa-star" style="color:yellow;"></i>&nbsp;
             <i class="fas fa-star" style="color:yellow;"></i>&nbsp;
             <i class="fas fa-star" style="color:yellow;"></i>&nbsp;
             <i class="fas fa-star" style="color:yellow;"></i>&nbsp;
             {{item.star5}}
             <br>
            <i class="fas fa-star" style="color:yellow;"></i>&nbsp;
             <i class="fas fa-star" style="color:yellow;"></i>&nbsp;
             <i class="fas fa-star" style="color:yellow;"></i>&nbsp;
             <i class="fas fa-star" style="color:yellow;"></i>&nbsp;
             {{item.star4}}
             <br>
            <i class="fas fa-star" style="color:yellow;"></i>&nbsp;
             <i class="fas fa-star" style="color:yellow;"></i>&nbsp;
             <i class="fas fa-star" style="color:yellow;"></i>&nbsp;
             {{item.star3}}
             <br>
             <i class="fas fa-star" style="color:yellow;"></i>&nbsp;
             <i class="fas fa-star" style="color:yellow;"></i>&nbsp;
             {{item.star2}}
             <br>
             <i class="fas fa-star" style="color:yellow;"></i>&nbsp;
             {{item.star1}}
            </div>
        </div>
        <hr>
        <div v-for="(review, index) in item.review" :key="index">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <hr class="style15">
                    </div>
                    <div class="col-sm-3" style="border-left:1px solid gray;">
                       {{index+1}} - {{review.nama}}
                    </div>
                    <div class="col-sm-9" style="border-right:1px solid gray;">
                        {{review.comment}}
                    </div>
                </div>
                    <hr>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    props:['item']
}
 
 </script>
 <style scoped>
 .starContainer{
     padding:10px;
    grid: auto-flow / 1fr 1fr     ;
     grid-auto-rows: minmax(100px,auto);/*minimal tinggi dan auto lebar*/
     place-items: center center;
     grid-gap:10px 10px;
     display:grid;
 }
 .item2{
     place-self:stretch stretch;
     
 }
 </style>