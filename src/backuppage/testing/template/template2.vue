<template>
  <div>
    <div class="container-fluid" style="padding:0;margin:0;">
      <div class="row">
        <div class="col-sm-12 bg-blue-darker" id="header" style="height:50px;width:100%;">
          <!-- HEADER -->
          <p
            style="padding:10px;color:white;font-weight:bold;"
            class="float-left"
          >TAUFIK AKBAR MALIKI</p>
          <button
            type="button"
            @click="test()"
            class="btn btn-sm btn-outline-warning float-right"
            style="height:100%;color:white;"
          >
            <span class="typcn typcn-arrow-left"></span> Login
          </button>
          <button
            type="button"
            @click="test()"
            class="btn btn-sm btn-outline-warning float-right"
            style="height:100%;color:white;"
          >Status</button>
        </div>
        <div
          class="col-sm-12"
          id="header2"
          style="height:100px;width:100%;
background: rgb(201,219,231);
background: linear-gradient(0deg, rgba(201,219,231,1) 3%, rgba(57,77,130,0.5970763305322129) 71%);"
        >
          <!-- HEADER 2 -->
          <img
            src="@/static/icon.png"
            class="kinoLightBox img-fluid z-depth-1"
            style="width:100px;padding:10px;"
          />
          <h2
            class="font-times"
            style="position:absolute;font-size:21px;left:120px;top:10px;color:black;font-weight:bold;"
          >PROGRAM KANTOR PEDESAAN</h2>
        </div>
        <div class="col-sm-12">
          <br />
          <hr class="style2" />
          <div class="container-fluid">
            <div class="row">
              <div
                class="col-sm-6 font-times uppercase"
                style="box-shadow:1px 2px 4px 1px;padding:20px;"
              >
                <login />
              </div>
              <div class="col-sm-6">
                <carousel
                  v-show="ready"
                  class="animated fadeIn"
                  :per-page="1"
                  :autoplay="true"
                  :mouse-drag="true"
                  :loop="true"
                  :centerMode="true"
                  :adjustableHeight="true"
                  :paginationActiveColor="'blue'"
                  :speed="1000"
                >
                  <slide class="text-center">
                    <img
                      src="@/static/icon.png"
                      class="kinoLightBox img-thumbnail z-depth-2"
                      style="border-radius: 20px;height:300px;"
                      alt
                    />
                  </slide>
                  <slide class="text-center">
                    <img
                      src="@/static/icon.png"
                      class="kinoLightBox img-thumbnail z-depth-2"
                      style="border-radius: 20px;height:300px;"
                      alt
                    />
                  </slide>
                  <slide class="text-center">
                    <img
                      src="https://gerakanopensource.files.wordpress.com/2016/01/1.png"
                      class="kinoLightBox img-thumbnail z-depth-2"
                      style="border-radius: 20px;height:300px;"
                      alt
                    />
                  </slide>
                </carousel>
              </div>
              <div class="col-sm-12 p-3 bg-black font-times mt-4" style="color:white;">
                <!-- FOOTER  -->
                <p>Copyright &copy; 2019 By Taufik Akbar Maliki</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import login from "@/components/radio/login.vue";
export default {
  components: {
    login
  },
  data() {
    return {
      ready: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.ready = true;
    }, 1000);
  },
  head: {
    title: "hello",
    link: [
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      }
      // {}
    ]
    // script: [
    //   {
    //     src: "https://kit.fontawesome.com/3ed93e77b0.js"
    //   }
    // ]
  }
};
</script>