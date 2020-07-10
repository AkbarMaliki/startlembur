<template>
    <div>
        <!-- cara menggunakan compenent 
            <TableKu :dataTable="dataTable"/> pass dataTable sebagai props dengan isi json data 
         -->

        <section id="modal">
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <div :class="['modalDialog','animated']" v-show="modal" @mouseover="closeModal">
            <div class="modalBody">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                        <button type="button" class="btn btn-sm btn-danger" style="position:absolute;right:15px;top:55px;" @click="modal=false">X</button>
                            <div class="text-center" style="background:lightgray;margin-top:10px;border:1px solid white;box-shadow:1px 1px 1px black;">
                                <span style="color:black;font-weight:bold;font-family:times new roman;">EDIT</span>
                            </div>
                            <hr>
                            <form action="" @submit.prevent="Edit">
                                <div class="sm-form " v-for="(item,key, index) in dataTerpilih" :key="index">
                                    <section>
                                        <span style="font-family:times new roman;margin-left:10px;text-transform:capitalize;">{{key}} <strong>:</strong></span>
                                        <input 
                                        :type="key=='password'?'password':key=='email'?'email':'text'" 
                                        class="form-control form-control-sm" :value="item" @keyup="editData($event,key)">
                                    </section>
                                </div>
                                <hr>
                                <div class="text-center">
                                    <p style="font-size:10px;">Klik simpan untuk mengubah data</p>
                                    <input type="submit" name="submiter" value="Simpan" class="btn btn-sm btn-outline-success" placeholder="Simpan">
                                    <section class="">
                                    <hr>
                                    <p style="font-size:10px;">Klik hapus untuk menghapus data</p>
                                    <button class="btn btn-sm btn-outline-danger"  @click="Delete(null)">Hapus</button>
                                    </section>
                                </div>
                            </form>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </transition>
        </section>
         <section id="modal2">
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <div :class="['modalDialog','animated']" v-show="modal2" @mouseover="closeModal">
            <div class="modalBody">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <button type="button" class="btn btn-sm btn-danger" style="position:absolute;right:10px;top:10px" @click="modal2=false">X</button>
                            <br>
                            <hr>
                            <form action="" @submit.prevent="Save">
                                <div class="sm-form " v-for="(item, index) in dataSaveFields" :key="index">
                                    <section v-if="true"><!-- cek jika type nya ingin berbeda -->
                                        <label :for="item">{{item}}</label>
                                        <input 
                                        :type="item=='password'?'password':item=='email'?'email':'text'" 
                                        class="form-control form-control-sm" placeholder=" . . . " @keyup="saveData($event,item)">
                                    </section>
                                </div>
                                <div class="sm-form">
                                    <input type="submit" id="submiter" name="submiter" class="form-control" placeholder="submiter">
                                </div>
                            </form>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </transition>
        </section>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <section id="deleteModal" v-if="delModal" @mouseover="closeModal">
            <div class="modalDialog">
                <div class="delCon text-center">
                    <hr>
                    <h5 style="color:red;">
                        LANJUTKAN UNTUK DELETE ?
                    </h5>    
                    <hr>
                    <button type="button" @click="delModal=false" class="btn btn-sm btn-primary  ">NO</button>
                    &nbsp;
                    <button @click="hapus(delIndex)" type="button" class="btn btn-sm btn-danger  ">YA</button>
                </div>
            </div>
        </section>
        </transition>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <section id="filterModal" v-if="filterModal" @mouseover="closeModal">
            <div class="modalDialog">
                <div class="delCon text-center">
                <button type="button" @click="filterModal=false" class="btn btn-sm btn-danger rounded-circle " style="margin-left:70%;">X</button>
                    <hr>
                    <h4 style="color:red;">
                        Cari data antara :
                    </h4>    
                    <hr>
                   <div class="sm-form ">
                       <input type="text" name="test" class="form-control form-control-sm" placeholder="data 1"  v-model="filter1">
                   </div>
                    <div class="sm-form ">
                       <input type="text" name="test" class="form-control form-control-sm" placeholder="data 2"  v-model="filter2">
                   </div>
                   <button @click="clearFilter" style="margin-top:10px;" type="button" class="btn btn-sm btn-info ">Clear</button>
                   &nbsp;
                   <button @click="filtering" style="margin-top:10px;" type="button" class="btn btn-sm btn-primary ">OK</button>
                </div>
            </div>
        </section>
        </transition>
        <section id="buttonTable" class='table-header no-print'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-4 col-12 fixZ flexRow">
                        <JsonToExcel class="btn btn-sm btn-outline-success  waves-effect no-print" :data="filData"/>
                        <button type="button" @click="printIni"  class="btn btn-sm btn-outline-danger  waves-effect no-print"><i class="fas fa-print"></i><span style="font-size:10px;">Print</span></button>
                        <button type="button" class="btn btn-sm btn-outline-warning   waves-effect"
                           @click="antara"
                           ><i class="fas fa-search-plus"></i> <span style="font-size:10px;">Filter</span></button>
                        <section  v-if="mode==true">
                            <button type="button" @click="saveD"  class="btn btn-sm btn-outline-secondary  waves-effect no-print">+<span style="font-size:10px;">Tambah</span></button>
                        </section>
                        <section v-else style="">
                            <button type="button" class="btn btn-sm btn-outline-secondary  waves-effect no-print" @click="tambah=!tambah" style="z-index:-1;">+<span style="font-size:10px;">Tambah</span></button>
                        </section>
                    </div>
                    <div class="col-sm-6 searchField ">
                            <b-form-input type="text" style="width:300px;" class="zIndex form-control form-control-sm" placeholder="Pencarian " id='searchField' v-model="searchFields1"></b-form-input>
                    </div>
                    <div class="col-sm-2 d-none d-sm-block fixZ">
                           <button type="button" 
                           @click="changeMode"
                           class="btn btn-sm btn-outline-primary waves-effect"
                           >
                               OK
                           </button>
                           
                    </div>
                </div>
            </div>
        </section>
        <section id="mainTable">
         <div class="table-responsive-sm">
            <table class="table table-sm  table-bordered table-hover table-print">
                <!--Table head-->
                <thead class="mdb-color bg-dark text-white  table-print" id="tableKu1">
                    <tr class="text-black table-print  ">
                        <th class="th-sm table-print  taufik">#</th>
                        <th style="cursor:pointer;" class='taufik   table-print' @click="sort($event,key,$refs[key])" v-for="(value,key, index) in filData[0]" :key="index">{{key.toUpperCase()}} 
                            <span :ref="key" aria-hidden="true" style='display:none'><i class="fas fa-sort no-print"></i></span></th>
                    </tr>
                </thead>
                <!--Table head-->
                <!--Table body-->
                <tbody id="tbody">
                    <tr class=" table-print deletHvr" v-if="mode==false&&tambah==true">
                        <td style="font-size:21px;">+</td>
                        <td v-for="(item, index) in Object.keys(filData[0])" :key="index">
                           <form action="" @submit.prevent="Save">
                                <div class="sm-form ">
                                    <section v-if="true"><!-- cek jika type nya ingin berbeda -->
                                        <input 
                                        :type="item=='password'?'password':item=='email'?'email':'text'" 
                                        class="form-control form-control-sm" placeholder=" . . . " @keyup="saveData($event,item)">
                                    </section>
                                </div>
                            </form>
                        </td>
                    </tr>
                    <tr class=" table-print deletHvr" v-for="(item, index) in filData" :key="index">
                        <td class=" table-print" style="cursor:pointer;">{{index+1}}</td>
                        <td class=" table-print " style="cursor:pointer;" @click.stop="pilihan($event,item,index)" v-for="(item2,key, index2) in item" :key="index2">
                        <section v-if="mode==false" class="directInput">
                            <form action="" @submit.prevent="Edit">
                            <div class="sm-form">
                                <input 
                                :type="key=='password'?'password':key=='email'?'email':'text'" 
                                class="form-control form-control-sm" :value="item2" @keyup="editData($event,key)">
                            </div>
                            </form>
                        </section>
                            {{item2}} 
                            <button class="btn btn-sm btn-danger deleteBtn animated fadeInLeft" v-if="key==lastKey" @click="Delete(index)">X</button>
                        </td>
                    </tr>
                </tbody>
                <!--Table body-->
            </table>
            <section id="pagingNumber" class="no-print" >
                <select v-model="slice" @change="berubah" class='hoverable pagingNo'>
                    <option value="0" selected style="display: none;">5</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option> 
                    <option value="50">50</option> 
                    <option value="100">100</option> 
                    <option value="all">all</option> 
                </select>
                : records
            </section>
            <!-- NEXT PREV BUTTON -->
            <section class="no-print text-center" id="pageButton">
                    <button @click="nextPagination(-1)" type="button" 
                    class="btn btn-md btn-dark fadeING" :disabled="pagi1==0"><i class="fas fa-chevron-circle-left"></i></button>
                    &nbsp;
                    <button @click="nextPagination(1)" type="button" 
                    class="btn btn-md btn-dark fadeING" :disabled="pagi2>=dataTable.length"><i class="fas fa-chevron-circle-right"></i></button>
                    <!-- <button @click="nextPagination(index+1)" v-for="(key, index) in pagination" :key="index" type="button" class="btn btn-sm btn-outline-dark rounded-circle ">
                        {{index+1}}
                    </button> -->
            </section>
            <!--Table-->
        </div>
        </section>
        <br>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            searchFields1:'',
            slice:5,
            pagi1:0,
            pagi2:5,
            pagindex:0,
            sortnya:null,
            sortr:false,
            modal:false,
            modal2:false,
            dataTerpilih:null,
            dataEdit:{},
            dataSave:{},
            dataSaveFields:[],
            mode:true,
            tambah:false,
            delModal:false,
            delIndex:null,
            filterModal:false,
            filter1:null,
            filter2:null,
            fil1:null,
            fil2:null,
        }
    },
    props:['dataTable','unless'],
    methods:{
        changeMode(e){
            this.mode=!this.mode;
            e.target.classList.toggle('active');
            if(e.target.classList.contains('active')){
                e.target.innerHTML="NO"
            }else{
                e.target.innerHTML="OK"
            }
        },
        berubah(){
            this.pagi1=0;
            this.pagi2=5;
        },
        antara(){
            this.filterModal=true;
        },
        filtering(){
            this.filterModal=false;
        },
        nextPagination(index){
            console.log(index*this.slice);
            if(this.pagi1<0){
                this.pagi1=0;
                this.pagi2=5;
            }else{
                this.pagi1=this.pagi1+(index*Number(this.slice));
                this.pagi2=this.pagi2+(index*Number(this.slice));
            }
        },
        sort(event,data,ref){
            this.$el.querySelectorAll('#tableKu1 tr th').forEach(th=>{
                th.classList.remove('srtASC');
            })
            this.$el.querySelectorAll('#tableKu1 tr th span').forEach(th=>{
                th.style.display='YESne';
            })
            event.target.classList.toggle('srtASC');
            if(ref[0].style.display=='none'){
                ref[0].style.display=="none"
            }else{
                ref[0].style.display='initial';
            }
            this.sortr = !this.sortr;
            this.sortnya=data;
        },
        printIni(){
            window.print()
        },
        pilihan(e,data,index2){
            if(this.mode){
                if(!e.target.classList.contains('btn')){
                    this.modal=!this.modal;
                this.dataTerpilih=data;
                for(let key in this.dataTerpilih){
                    this.dataEdit[key] = this.dataTerpilih[key];
                }
                let index = this.dataTable.findIndex(e=>e==this.dataTerpilih);
                this.dataEdit.index = index;
                }
            }else{
                 if(!e.target.classList.contains('btn')){
                     // apabila memilih input element maka tidak di refresh
                    if(!e.target.classList.contains('form-control')){
                        this.$el.querySelectorAll('tbody section').forEach(el=>{
                            // menghapus semua input
                            el.classList.add('directInput');
                        });
                    }
                    // memunculkan satu baris di section input
                    e.target.parentNode.querySelectorAll('.directInput').forEach(el=>{
                        el.classList.remove('directInput')});
                    // memunculkan salah satu input di section input
                    // e.target.querySelector('.directInput').classList.remove('directInput');
                    this.dataTerpilih=data;
                    for(let key in this.dataTerpilih){
                        this.dataEdit[key] = this.dataTerpilih[key];
                    }
                    let index = this.dataTable.findIndex(e=>e==this.dataTerpilih);
                    this.dataEdit.index = index;
                }
            }
        },
        editData(event,key){
            this.dataEdit[key] = event.target.value;
        },
        Edit(){
            // let index = this.dataTable.findIndex(e=>e==this.dataTerpilih);
            this.$store.commit('editData',this.dataEdit);
            this.$nuxt.$emit('busyOn',true);
            setTimeout(() => {
                this.$el.querySelectorAll('tbody section').forEach(el=>{
                    el.classList.add('directInput');
                });
                this.modal=false;
                this.$nuxt.$emit('busyOn',false);
            }, 800);
        },
        closeModal(e){
            let that = this;
            function closeIt(e){
                if(e.keyCode=="27"){
                    that.modal=false;
                    that.modal2=false;
                    that.delModal=false;
                    that.filterModal=false;
                    window.removeEventListener('keyup',closeIt);
                }
            }
            window.addEventListener('keyup',closeIt);
        },
        saveD(){
            this.modal2=true;
            let keys = Object.keys(this.dataTable[0]);
            this.dataSaveFields = keys;

        },
        saveData(event,key){
            this.dataSave[key] = event.target.value;
            console.log(this.dataSave);
        },
        Save(){
            this.$store.commit('saveData',this.dataSave);
            this.$nuxt.$emit('busyOn',true);
            setTimeout(() => {
                this.tambah=false;
                this.modal=false;
                this.modal2=false;
                this.$nuxt.$emit('busyOn',false);
            }, 800);
        },
        Delete(index){
            this.delModal=true;
            let idx=index;
            if(index==null){
                idx=this.dataTable.findIndex(e=>e==this.dataTerpilih);
            }
            this.delIndex=idx;
        },
        hapus(index){
            this.delModal=false;
            this.$store.commit('deleteData',index);
        },
        clearFilter(){
            this.filter1=null;
            this.filter2=null;
            this.fil1=null;
            this.fil2=null;
        },
        cekData(){
            console.log(this.dataEdit);
        }
    },
    mounted(){
    },
    computed:{
        pagination(){
            //! mendapatkan jumlah tombol pagination
            let jumlah = this.dataTable.length;
            return Math.round(jumlah/this.slice);
        },
        lastKey(){
            let data = this.dataTable[0];
            let keys = Object.keys(data);
            data = keys[0];
            return data;
        },
        filData(){
            //! GANTI dataTable dengan data yang ingin digunakan 
            //! SEARCH BAR
            let keys = Object.keys(this.dataTable[0]);
            let hasilData = this.dataTable.filter((v,i,a)=>{
                let hasil=false;
                keys.filter(key=>{
                    if(typeof v[key] == 'string'){
                        if(v[key].toLowerCase().indexOf(this.searchFields1.toLowerCase())!=-1){
                            hasil = true;
                        }
                    }else{
                        if(v[key].toString().indexOf(this.searchFields1)!=-1){
                                hasil = true;
                            }
                        }
                });
                if(hasil)
                return v
            });
            if(this.filter1!=null && this.filter2!=null){
                let keys = Object.keys(hasilData[0]);
                let fil1 = hasilData.findIndex(e=>{
                    let hasil=false;
                    keys.forEach(key=>{
                        if(e[key]==this.filter1){
                            hasil=true;
                        }
                    });
                    return hasil
                });
                 let fil2 = hasilData.findIndex(e=>{
                    let hasil=false;
                    keys.forEach(key=>{
                        if(e[key]==this.filter2){
                            hasil=true;
                        }
                    });
                    return hasil
                });
                if(fil1!=-1){
                    this.fil1=fil1;
                }
                if(fil2!=-1){
                    this.fil2=fil2;
                }
            }
            if(this.fil1!=null && this.fil2 != null){
             hasilData= hasilData.slice(Number(this.fil1),Number(this.fil2+1));
            }
            // +Number(this.slice)==1?0:Number(this.slice)
            //! Pagination + slice
            hasilData= hasilData.slice(Number(this.pagi1),Number(this.pagi2)+Number(this.slice==5?0:this.slice=='all'?this.dataTable.length:this.slice-5));
            //! SORT
            let that = this;
            if(this.sortnya){
                if(this.sortr){
                    hasilData=hasilData.sort(function(a,b) {return (a[that.sortnya] > b[that.sortnya]) ? 1 : ((b[that.sortnya] > a[that.sortnya]) ? -1 : 0);} );
                }else{
                    hasilData=hasilData.sort(function(a,b) {return (a[that.sortnya] < b[that.sortnya]) ? 1 : ((b[that.sortnya] < a[that.sortnya]) ? -1 : 0);} );
                }
            }
            //! HASIL
            let nope = this.unless;
            if(this.unless){
                let kunci = that.$_.difference(keys,nope);
                hasilData = hasilData.map(e=>{
                let obj = {};
                kunci.forEach(k=>{
                    obj[k]=e[k];
                })
                return obj;
            });
            }

            // console.log(hasilData);
            return hasilData;
        }
    }
}
</script>

<style scoped>
    .flexRow{
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        display:flex;
    }
    .btn:disabled{
        z-index: -1;
        display:none;
    }
    .srtASC{
        background:white;
        color:black;
    }
    .table-header{
        background:#343A40;
        border:1px solid white;
        padding:5px;
    }
    .modalDialog{
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        display:flex;
        position: fixed;
        z-index:20;
        top:0;
        background:rgba(32, 27, 27, 0.699);
        height: 100%;
        width: 100%;
    }
    .modalBody{
        background:white;overflow:scroll;
        max-height:600px;box-shadow:1px 1px 1px black;
        min-width: 50%;
        max-width: 80%;
    }
    .delCon{
        width:20%;
        font-family: 'Times New Roman', Times, serif;
        height: 40%;
        background: rgb(214, 195, 143);
        padding: 10px;
        box-shadow: 1px 1px 1px black;
    }
    .pagingNo{
        box-shadow:1px 1px 1px 1px green;padding-left:5px;padding-right:5px;
        margin-left:10px;
        z-index: 1;
    }
    .directInput{
        display:none;
    }
    
    .fadeING{
        animation: fadeING2 0.4s ease-in-out    forward;
    }
    @keyframes fadeING2 {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    @media print{
        #tableKu1{
            top:500px;
            padding-top:500px;
            margin-top:500px;
        }
        th.taufik{
            color:black;
            background:white;
            border:1px solid black;
        }
    }
    #buttonFunction{
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        display:flex;
        margin-top:10px;
    }
    .buttonFunction2{
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        display:flex;
    }
    .deleteBtn{
        display:none;
        position: absolute;
        left:0px;
        margin-top:-5px;
    }
     .fixZ{
        position:static;
    }
    .inputEdit{}
    /* // Small devices (landscape phones, 576px and up) */
@media (min-width: 300px) { 
  .deletHvr:hover .deleteBtn{
        display:none;
    }
    .searchField{
        position:static;top:0px;
    }
 }
 @media (min-width: 576px) { 
  .deletHvr:hover .deleteBtn{
        display:initial;
    }
  .sectionDelete{
      display:none;
  }
  .searchField{
        position:static;top:0px;
    }
 }

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { 
    .searchField{
        position:static;
    }
 }

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
    .test{
      color:blue;
  } 
 }

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
    .test{
      color:orange;
  } 
 }
</style>