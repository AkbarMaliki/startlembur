<template>
    <div>
         <button
      type="button"
      @click="$router.push('/lembur')"
      class="btn btn-sm btn-style1 font-bold text-uppercase underline"
      style="position:absolute;z-index:100;"
    >
      <span class="text-xl typcn typcn-arrow-left"></span> Kembali
    </button>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="animated fadeInDown">
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,256L60,256C120,256,240,256,360,229.3C480,203,600,149,720,106.7C840,64,960,32,1080,69.3C1200,107,1320,213,1380,266.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
    </svg>
    <div v-if="ttdnya.length>0" class="text-center mx-auto">
      <img :src="ttdnya" class="kinoLightBox img-fluid rounded-lg text-center mx-auto" v-viewer style="height:250px;border:1px solid grey;" alt="">
    </div>
    <p class="p-2 font-bold font-times">Tanda Tangan : </p>
    <div class="bg-white p-2  shadow-inner"  >
     
        <VueSignaturePad width="100%" height="400px" ref="signaturePad" style="border:1px solid black;" />
        <br>
        <div class="row">
            <div class="col-6 text-center">
                <button class="btn btn-sm btn-danger" @click="undo">Undo</button>
            </div>
            <div class="col-6 text-center">
                <button class="btn btn-sm btn-primary" @click="save">Save</button>
            </div>
        </div>
    </div>        
    </div>        
</template>
<script>
import axios from 'axios'
import firebase from 'firebase'
let db = firebase.firestore()
export default {
  layout:'lembur',
  data(){
      return{
          ttd:"",
          ttdnya:""
      }
  },
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    b64toBlob(b64Data, contentType, sliceSize) {
            contentType = contentType || '';
            sliceSize = sliceSize || 512;

            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);

                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }

                var byteArray = new Uint8Array(byteNumbers);

                byteArrays.push(byteArray);
            }

        var blob = new Blob(byteArrays, {type: contentType});
        return blob;
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
        var ImageURL = data;
        var block = ImageURL.split(";");
        var contentType = block[0].split(":")[1];// In this case "image/gif"
        var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."
        var blob = this.b64toBlob(realData, contentType);
        db.collection('users').doc(this.$store.state.users.uid).collection('ttd').doc('pertama').set({ttd:data},{merge:true}).then(res=>{
          alert('Berhasil daftarkan tanda tangan digital.')
            this.$router.push('/lembur')
        })
    }
  },
  mounted() {
    alert("Edit Tanda tangan digital!")
    if(this.$store.state.users){
      db.collection('users').doc(this.$store.state.users.uid).collection('ttd').doc('pertama').get().then(res=>{
        let data = res.data()
        console.log(data)
        this.ttdnya = data.ttd
        this.$forceUpdate()
      })
    }else{
      this.$router.push('/')
    }
  },
};
</script>