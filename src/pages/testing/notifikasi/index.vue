<template>
    <div>
        <button type="button" @click="notifikasi(23,'/driver/req-driver','Permintaan Di Approve')" 
        class="btn btn-sm btn-primary  ">notifikasi</button>
    </div>
</template>
<script>
import axios from "axios";
import socket from "@/plugins/socket.io.js";
import uniqid from "uniqid";
export default {
  methods: {
    notifikasi(ids,link,text) {
        let fd = new FormData()
        fd.append('data', `insert into notifikasi (id_user,link,text,dibaca,app,button,tanggal)
         VALUES ('${ids}','${link}','${text}','false','driver','1','${new Date()}')`)
        fd.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
               let message = {
                    id: uniqid(),
                    target_id: ids,
                    app: 'driver',
                    text:text,
                    link:link,
                    dibaca: 'false'
                };
                socket.emit("send-message", message);
                 let that = this
                
        })
     
    },
  }
};
</script>