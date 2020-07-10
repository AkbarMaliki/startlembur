<template>
  <div>
    <template v-if="!multi">
      <div
        class="uploadContainer hoverable text-center flex flex-wrap flex-row"
        style="padding:10px;"
      >
        <div class="imgInputContainer" @click="upload" style="cursor:pointer;margin-left:0px;">
          <img
            v-for="(item, index) in imgList"
            :key="index"
            :src="item"
            :id="'imgKu'+index"
            class="imgInput myImage"
            style="height:90px;width:60px;z-index:100;"
            v-show="imgList.length>0"
            @click="hilang($event,index)"
          >
        </div>
        <div style="position:static;" class="text-center cursor-pointer">
          <label
            for="file"
            v-if="imgList.length<1"
            style="font-size:12px;color:black;position:absolute;margin-left:13px;margin-top:23px;"
          >Drag/Drop file</label>
          <!-- <label for="file" style="position:absolute;margin-left:50px;margin-top:30px;z-index:-1;color:#ffffff07;">test</label> -->
          <input
            class="cursor-pointer"
            id="file"
            type="file"
            @input.prevent="ambil($event)"
            :class="{'d-none':imgList.length>0}"
            ref="uploader"
          >
        </div>
        <section style="margin-left:20px;" class>
          <button
            type="button"
            class="btn btn-sm btn-outline-success waves-effect d-none"
            @click="upload"
          >Browse</button>
          <button
            type="button"
            class="btn btn-sm btn-outline-danger waves-effect"
            id="rest"
            v-show="imgList.length>0"
            @click="reset"
          >Reset</button>
        </section>
      </div>
    </template>
    <template v-else>
      <div
        class="uploadContainer hoverable text-center flex flex-wrap flex-row"
        style="padding:10px;"
      >
        <div class="imgInputContainer" @click="upload" style="cursor:pointer;margin-left:0px;">
          <img
            v-for="(item, index) in imgList"
            :key="index"
            :src="item"
            :id="'imgKu'+index"
            class="imgInput myImage"
            style="height:90px;width:60px;z-index:100;"
            v-show="imgList.length>0"
            @click="hilang($event,index)"
          >
        </div>
        <div style="position:static;" class="text-center cursor-pointer">
          <label
            for="file"
            v-if="imgList.length<1"
            style="font-size:12px;color:black;position:absolute;margin-left:13px;margin-top:23px;"
          >Drag/Drop file</label>
          <!-- <label for="file" style="position:absolute;margin-left:50px;margin-top:30px;z-index:-1;color:#ffffff07;">test</label> -->
          <input
            class="cursor-pointer"
            id="file"
            type="file"
            @input.prevent="ambil($event)"
            :class="{'d-none':imgList.length>0}"
            ref="uploader"
            multiple
          >
        </div>
        <section style="margin-left:20px;" class>
          <button
            type="button"
            class="btn btn-sm btn-outline-success waves-effect d-none"
            @click="upload"
          >Browse</button>
          <button
            type="button"
            class="btn btn-sm btn-outline-danger waves-effect"
            id="rest"
            v-show="imgList.length>0"
            @click="reset"
          >Reset</button>
        </section>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [],
      count: 0,
      imgFiles: [],
      imgs: []
    };
  },
  props: {
    multi: { type: Boolean, required: false, default: true }
  },
  watch: {
    imgList() {
      setTimeout(() => {
        if (this.imgList.length == 0) {
          this.$emit("resetInput", true);
        }
      }, 300);
    }
  },
  methods: {
    hilang(e, index) {
      let src = e.target.src;
      let indexnya = this.imgList.findIndex(list => {
        return list == src;
      });
      delete this.imgList[indexnya];
      let cou = 0;
      this.$el.querySelector("#imgKu" + index).classList.add("hilang");
      this.$el.querySelectorAll(".myImage").forEach(img => {
        if (img.classList.contains("hilang")) {
          cou++;
        }
      });
      if (cou > 0) {
        this.count++;
      }
      if (this.count == this.$el.querySelectorAll(".myImage").length) {
        setTimeout(() => {
          this.$el.querySelector("#rest").click();
        }, 300);
      }
    },
    reset() {
      this.$el.querySelector("#file").style.display = "initial";
      this.$el.querySelectorAll(".myImage").forEach(el => {
        el.style.display = "none";
      });
      this.imgList = [];
      this.count = 0;
    },
    upload(e) {
      let that = this;
      let click = 1;
      if (this.imgList.length > 0) {
        this.$el.querySelectorAll(".myImage").forEach(el => {
          if (e.target == el) {
            // console.log(el.src);
            click *= -100;
            return;
          } else {
            click += 1;
          }
        });
        if (click > 0) {
          this.$refs.uploader.click();
        }
      } else {
        this.$refs.uploader.click();
      }
      // if(e.target)
    },
    ambil(event) {
      // this.imgList=e.target.files;
      if (event.target.files[0].size > 10000000) {
        alert("File yang di upload tidak sesuai kriteria");
      } else {
        if (event.target.files.length > 0) {
          let img = [];
          let hasil = [];
          let compress = "null";
          let filenya;
          for (let i = 0; i < event.target.files.length; i++) {
            this.imgs.push(event.target.files[i]);
            var selectedFile = event.target.files[i];
            var reader = new FileReader();
            reader.onload = function(event) {
              img.push(event.target.result);
            };
            reader.readAsDataURL(selectedFile);
            filenya = event.target.files[i];
            compress =
              filenya.size < 1000000
                ? 30
                : filenya.size < 2000000
                ? 25
                : filenya.size < 3000000
                ? 20
                : filenya.size < 4000000
                ? 15
                : 10;
            this.$daycaca.compress(filenya, compress, data => {
              this.gambar = data;
              this.$urltofile(data, filenya.name, filenya.type).then(res => {
                hasil.push(res);
              });
            });
          }
          this.imgList = img;
          console.log(event.target);
          this.$emit("upload", hasil);
        }
      }
    }
  }
};
</script>

<!-- cara memakai 
        <Uploader @upload="img = $event"/>
-->