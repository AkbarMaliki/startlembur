<template>
    <div>
           <div class="sm-form ">
            <input type="text" id="link" name="link" class="form-control form-control-sm" placeholder="link" v-model="link" >
        </div>    
          <div class="sm-form ">
            <input type="text" id="database" name="database" class="form-control form-control-sm" placeholder="database" v-model="database" >
        </div>    
        <br>
        <div class="sm-form ">
            <input type="text" id="table1" name="table1" class="form-control form-control-sm" placeholder="table1" v-model="vdata.table1" >
        </div>    
        
        <hr class="style2">
        <div class="sm-form ">
            <input type="text" id="table2" name="table2" class="form-control form-control-sm" placeholder="table2" v-model="vdata.table2" >
        </div>    
         <div class="sm-form ">
            <input type="text" id="id2" name="id2" class="form-control form-control-sm" placeholder="id2" v-model="vdata.id2" >
        </div>   
        <hr class="style2">
        <div class="sm-form ">
            <input type="text" id="table3" name="table3" class="form-control form-control-sm" placeholder="table3" v-model="vdata.table3" >
        </div>    
        <div class="sm-form ">
            <input type="text" id="id3" name="id3" class="form-control form-control-sm" placeholder="id3" v-model="vdata.id3" >
        </div>   
        <hr class="style2">
          <div class="sm-form ">
            <input type="text" id="table4" name="table4" class="form-control form-control-sm" placeholder="table4" v-model="vdata.table4" >
        </div>    
         <div class="sm-form ">
            <input type="text" id="id4" name="id4" class="form-control form-control-sm" placeholder="id4" v-model="vdata.id4" >
        </div>   
      
        <hr class="style2">
        <div class="sm-form ">
            <input type="text" id="table5" name="table5" class="form-control form-control-sm" placeholder="table5" v-model="vdata.table5" >
        </div>    
         <div class="sm-form ">
            <input type="text" id="id5" name="id5" class="form-control form-control-sm" placeholder="id5" v-model="vdata.id5" >
        </div>   
        <button type="button" @click="proses" class="btn btn-sm btn-primary  "><span class="typcn typcn-spanner-outline"></span> Proses</button>
        <br>
        <hr>
        <p>buat di form</p>
        <pre>
            <p>{{selects}}</p>
        </pre>
        <br>
        <p>buat di vdata</p>
        <p>{{datas}}</p>
        <br>
        <p>buat di refreshData()</p>
        <p>{{datanya}}</p>
        <br>
        <p>buat di mounted</p>
        <pre>
            <p>{{axios}}</p>
        </pre>
        <br>
    </div>
</template>
<script>
export default {
    data(){
        return{
            vdata:{},
            datanya:"",
            datas:"",
            selects:"",
            axios:"",
            link:"https://infolayanans.space",
            database:"infolay3_test",
        }
    },
    methods:{
        proses(){
            let data = `select * from ${this.vdata.table1} tb1 left join ${this.vdata.table2} tb2 on tb2.${this.vdata.id2}=tb1.${this.vdata.id2}`;
            let datas = ``;
            let axios = `
let fd = new FormData()
fd.append('data', \`select ${this.vdata.id1} from ${this.vdata.table1}\`)//database setting di server
fd.append('database','${this.database}')
axios.post('${this.link}/api/mysql/auto.php', fd
, {
headers: {
Authorization: localStorage.getItem('auth._token.local')
}
}).then(res => {
console.log(res)
this.${this.vdata.table1}=res.data
this.$forceUpdate()
})
let fd2 = new FormData()
fd2.append('data', \`select ${this.vdata.id2} from ${this.vdata.table2}\`)//database setting di server
fd2.append('database','${this.database}')
axios.post('${this.link}/api/mysql/auto.php', fd2
, {
headers: {
Authorization: localStorage.getItem('auth._token.local')
}
}).then(res => {
console.log(res)
this.${this.vdata.table2}=res.data
this.$forceUpdate()
})
            \n
            `;
            let selects = `
<select class='form-control' required v-model="vdata.${this.vdata.id2}">
<option v-for="(item, index) in ${this.vdata.table2}" :key="index+'${this.vdata.table2}'" :value="item.${this.vdata.id2}">{{item.${this.vdata.id2}}}</option>
</select>
            `;
            datas = `${this.vdata.table1}:"",${this.vdata.table2}`
            if(this.vdata.table3){
                data = data + ` left join ${this.vdata.table3} tb3 on tb3.${this.vdata.id3}=tb1.${this.vdata.id3}`;
                selects = selects + `\n\n 
<select class='form-control' required v-model="vdata.${this.vdata.id3}">
<option v-for="(item, index) in ${this.vdata.table3}" :key="index+'${this.vdata.table3}'" :value="item.${this.vdata.id3}">{{item.${this.vdata.id3}}}</option>
</select>`;
                datas = datas + `,${this.vdata.table3}:""`
                axios = axios + `
let fd3 = new FormData()
fd3.append('data', \`select ${this.vdata.id3} from ${this.vdata.table3}\`)//database setting di server
fd3.append('database','${this.database}')
axios.post('${this.link}/api/mysql/auto.php', fd3
, {
headers: {
Authorization: localStorage.getItem('auth._token.local')
}
}).then(res => {
console.log(res)
this.${this.vdata.table3}=res.data
this.$forceUpdate()
})
                \n
                `;
            }
             if(this.vdata.table4){
                 data = data + ` left join ${this.vdata.table4} tb4 on tb4.${this.vdata.id4}=tb1.${this.vdata.id4}`;
                 selects = selects + `\n\n 
<select class='form-control' required v-model="vdata.${this.vdata.id4}">
<option v-for="(item, index) in ${this.vdata.table4}" :key="index+'${this.vdata.table4}'" :value="item.${this.vdata.id4}">{{item.${this.vdata.id4}}}</option>
</select>`;
              datas = datas + `,${this.vdata.table4}:""`
              axios = axios + `
let fd4 = new FormData()
fd4.append('data', \`select ${this.vdata.id4} from ${this.vdata.table4}\`)//database setting di server
fd4.append('database','${this.database}')
axios.post('${this.link}/api/mysql/auto.php', fd4
, {
headers: {
Authorization: localStorage.getItem('auth._token.local')
}
}).then(res => {
console.log(res)
this.${this.vdata.table4}=res.data
this.$forceUpdate()
})
                \n
                `;
            }
             if(this.vdata.table5){
                 data = data + ` left join ${this.vdata.table5} tb5 on tb5.${this.vdata.id5}=tb1.${this.vdata.id5}`;
                 selects = selects + `\n\n 
<select class='form-control' required v-model="vdata.${this.vdata.id5}">
<option v-for="(item, index) in ${this.vdata.table5}" :key="index+'${this.vdata.table5}'" :value="item.${this.vdata.id5}">{{item.${this.vdata.id5}}}</option>
</select>`;
              datas = datas + `,${this.vdata.table5}:""`
              axios = axios + `
let fd5 = new FormData()
fd5.append('data', \`select ${this.vdata.id5} from ${this.vdata.table5}\`)//database setting di server
fd5.append('database','${this.database}')
axios.post('${this.link}/api/mysql/auto.php', fd5
, {
headers: {
Authorization: localStorage.getItem('auth._token.local')
}
}).then(res => {
console.log(res)
this.${this.vdata.table5}=res.data
this.$forceUpdate()
})
                \n
                `;
            }
            console.log(data)
            this.selects=selects
            this.datas = datas
            this.datanya=data
            this.axios=axios

        }
    }
}
</script>