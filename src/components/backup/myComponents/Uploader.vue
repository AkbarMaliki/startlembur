<template>
    <div>
        <!-- cara memakai 
        <Uploader @upload="img = $event"/>
         -->
        <div class="uploadContainer hoverable" style="padding:10px;">
            <div class="imgInputContainer" @click="upload" style="cursor:pointer;margin-left:0px;">
                <img v-for="(item, index) in imgList" :key="index" :src="item" :id="'imgKu'+index" class="imgInput myImage" style="height:90px;width:60px;z-index:100;" v-show="imgList.length>0" @click="hilang($event,index)">
                <div class="teksPos ">
                    <span style="font-size:15px;position:absolute;margin-top:40px;color:gray;" class="fixZ" v-if="imgList.length==0">CLICK/DRAG FILE</span>
                    <span style="font-size:15px;position:absolute;margin-top:60px;color:gray;" class="fixZ" v-if="imgList.length==0">UNTUK GANTI GAMBAR</span>
                </div>
            </div>
            <input id="file" type="file" @input.prevent="ambil($event)" :class="{'d-none':imgList.length>0}" ref="uploader"/>
            <section style="margin-left:20px;">
                <button type="button" class="btn btn-sm btn-outline-success   waves-effect d-none" @click="upload">Browse</button>
                <button type="button" class="btn btn-sm btn-outline-danger   waves-effect" id="rest" v-show="imgList.length>0" @click="reset" >Reset</button>
            </section>
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [],
      count: 0,
      imgFiles: []
    }
  },
  methods: {
    hilang(e, index) {
      let src = e.target.src
      let indexnya = this.imgList.findIndex(list => {
        return list == src
      })
      delete this.imgList[indexnya]
      let cou = 0
      this.$el.querySelector('#imgKu' + index).classList.add('hilang')
      this.$el.querySelectorAll('.myImage').forEach(img => {
        if (img.classList.contains('hilang')) {
          cou++
        }
      })
      if (cou > 0) {
        this.count++
      }
      if (this.count == this.$el.querySelectorAll('.myImage').length) {
        setTimeout(() => {
          this.$el.querySelector('#rest').click()
        }, 300)
      }
    },
    reset() {
      this.$el.querySelector('#file').style.display = 'initial'
      this.$el.querySelectorAll('.myImage').forEach(el => {
        el.style.display = 'none'
      })
      this.imgList = []
      this.count = 0
    },
    upload(e) {
      let that = this
      let click = 1
      if (this.imgList.length > 0) {
        this.$el.querySelectorAll('.myImage').forEach(el => {
          if (e.target == el) {
            // console.log(el.src);
            click *= -100
            return
          } else {
            click += 1
          }
        })
        if (click > 0) {
          this.$refs.uploader.click()
        }
      } else {
        this.$refs.uploader.click()
      }
      // if(e.target)
    },
    ambil(e) {
      // this.imgList=e.target.files;
      // console.dir(e.target.files[0])
      if (e.target.files[0].size > 2000000) {
        alert('File yang di upload tidak sesuai kriteria')
      } else {
        console.log((e.target.style.display = 'none'))
        if (event.target.files.length > 0) {
          let img = []
          for (let i = 0; i < event.target.files.length; i++) {
            var selectedFile = event.target.files[i]
            var reader = new FileReader()
            reader.onload = function(event) {
              img.push(event.target.result)
            }
            reader.readAsDataURL(selectedFile)
          }
          this.imgList = img
          this.$emit('upload', event.target.files)
        }
      }
    }
  }
}
</script>
