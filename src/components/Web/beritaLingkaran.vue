<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <!-- top left -->
          <div
            class="p-3 rounded-lg"
            style="width:300px;height:140px;position:absolute;left:15%;border-left:1px solid gray;"
          >
            <img
              src="http://cdn.i.ntere.st/p/10141066/image"
              class="kinoLightBox img-fluid z-depth-1 float-right"
              style="height:120px;width:120px;border:10px solid white;"
            />
            <p style="font-size:16px;" class="font-bold">Judul 1</p>
            <p style="font-size:14px;">ini adalah isi dari menu 1 judul 1</p>
          </div>
          <!-- top right -->
          <div
            class="p-3 rounded-lg"
            style="width:300px;height:140px;position:absolute;right:15%;border-right:1px solid gray;"
          >
            <img
              src="http://cdn.i.ntere.st/p/10141066/image"
              class="kinoLightBox img-fluid z-depth-1 float-left"
              style="height:120px;width:120px;border:10px solid white;"
            />
            <p style="font-size:16px;" class="font-bold">Judul 2</p>
            <p style="font-size:14px;">ini adalah isi dari menu 2 judul 2</p>
          </div>
          <!-- middle left -->
          <div
            class="p-3 rounded-lg"
            style="width:300px;height:140px;position:absolute;left:9%;top:35%;border-left:1px solid gray;"
          >
            <img
              src="http://cdn.i.ntere.st/p/10141066/image"
              class="kinoLightBox img-fluid z-depth-1 float-right"
              style="height:120px;width:120px;border:10px solid white;"
            />
            <p style="font-size:16px;" class="font-bold">Judul 3</p>
            <p style="font-size:14px;">ini adalah isi dari menu 3 judul 3</p>
          </div>
          <!-- middle right -->
          <div
            class="p-3 rounded-lg"
            style="width:300px;height:140px;position:absolute;right:9%;top:35%;border-right:1px solid gray;"
          >
            <img
              src="http://cdn.i.ntere.st/p/10141066/image"
              class="kinoLightBox img-fluid z-depth-1 float-left"
              style="height:120px;width:120px;border:10px solid white;"
            />
            <p style="font-size:16px;" class="font-bold">Judul 4</p>
            <p style="font-size:14px;">ini adalah isi dari menu 4 judul 4</p>
          </div>
          <!-- bottom left -->
          <div
            class="p-3 rounded-lg"
            style="width:300px;height:140px;position:absolute;left:15%;top:70%;border-left:1px solid gray;"
          >
            <img
              src="http://cdn.i.ntere.st/p/10141066/image"
              class="kinoLightBox img-fluid z-depth-1 float-right"
              style="height:120px;width:120px;border:10px solid white;"
            />
            <p style="font-size:16px;" class="font-bold">Judul 5</p>
            <p style="font-size:14px;">ini adalah isi dari menu 5 judul 5</p>
          </div>
          <!-- bottom right -->
          <div
            class="p-3 rounded-lg"
            style="width:300px;height:140px;position:absolute;right:15%;top:70%;border-right:1px solid gray;"
          >
            <img
              src="http://cdn.i.ntere.st/p/10141066/image"
              class="kinoLightBox img-fluid z-depth-1 float-left"
              style="height:120px;width:120px;border:10px solid white;"
            />
            <p style="font-size:16px;" class="font-bold">Judul 6</p>
            <p style="font-size:14px;">ini adalah isi dari menu 6 judul 6</p>
          </div>
          <!-- END -->
          <img
            src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/SHX5arbLxixqdx0ls/videoblocks-heaps-of-retro-antique-tv-in-dark-room-noise-tv-realistic-4k-animation_s3qq14osx_thumbnail-full01.png"
            class="kinoLightBox img-fluid rounded-2 z-depth-2 rounded-circle"
            style="width:550px;height:550px;display:block;margin:auto;"
            alt
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    tests() {
      alert("y");
    }
  },
  props: {
    beritas: {
      type: Array,
      required: true,
      default: () => ["_id"]
    }
  }
};
</script>