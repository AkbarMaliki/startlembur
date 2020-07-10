<template>
  <div>
    <div class="uploadContainer hoverable text-center flex flex-wrap flex-row" style>
      <div class="text-center" @click="upload" style="cursor:pointer;">
        <img
          v-for="(item, index) in imgList"
          :key="index"
          :src="item"
          :id="'imgKu'+index"
          class="imgInput myImage imgSize"
          style="z-index:100;margin-left:10%;"
          v-show="imgList.length>0"
          @click="zoomIn($event)"
        >
      </div>
      <div style="position:static;" class="text-center cursor-pointer">
        <label
          for="file2"
          class="cursor-pointer"
          v-if="imgList.length<1"
          style="font-size:12px;color:black;position:absolute;margin-left:5px;margin-top:0px;"
        >
          <img src="@/assets/svg/image.svg">
        </label>
        <!-- <label for="file" style="position:absolute;margin-left:50px;margin-top:30px;z-index:-1;color:#ffffff07;">test</label> -->
        <input
          class="cursor-pointer"
          id="file2"
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
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      imgList: [],
      count: 0,
      imgFiles: [],
      imgs: []
    };
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
    zoomIn(e) {
      console.log(e.target.classList.toggle("zoomIn"));
    },
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
      this.$el.querySelector("#file2").style.display = "initial";
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
      let that = this;
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
                let fd = new FormData();
                let array = [];
                array[0] = res;
                fd.append("file", res);
                axios
                  .post("http://localhost:3000/api/data/upload", fd, {
                    headers: {
                      Authorization: localStorage.getItem("auth._token.local")
                    }
                  })
                  .then(output => {
                    // hasil.push(res);
                    hasil.push(`${that.$store.state.url}${output.data.data}`);
                  });
              });
            });
          }
          this.imgList = img;
          console.log(event.target);
          setTimeout(() => {
            this.$emit("upload", hasil);
          }, 1000);
        }
      }
    }
  }
};
</script>
<style>
input#file2 {
  display: inline-block;
  width: 40px;
  cursor: pointer;
  padding: 20px 0 0 0;
  height: 20px;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 1px 1px 4px gray;
}
.imgSize {
  height: 90px;
  width: 60px;
}
.zoomIn {
  position: fixed;
  top: 0;
  width: 60%;
  height: 90%;
  margin-top: 10px;
  z-index: 1000;
}
</style>
<!-- cara memakai 
        <Uploader @upload="img = $event"/>
-->