<template>
  <div>
    <button type="button" @click="bgmode" class="btn btn-sm btn-primary">background mode aktif</button>
    <button type="button" @click="cek" class="btn btn-sm btn-primary">cek</button>
    <button type="button" @click="test" class="btn btn-sm btn-warning">test</button>
  </div>
</template>
<script>
export default {
  methods: {
    bgmode() {
      document.addEventListener(
        "deviceready",
        function() {
          cordova.plugins.backgroundMode.enable();
          cordova.plugins.backgroundMode.moveToBackground();
          // cordova.plugins.backgroundMode is now available
        },
        false
      );
      //! ASKING IF NECESERY TO LET APPS TO RUN ON NOT OPTIMAZITION BATTERY MODE
    // document.addEventListener("deviceready", function() {
    //   cordova.plugins.DozeOptimize.RequestOptimizations(
    //     function(responce) {
    //       console.log(responce); // Will give "Optimizations Requested Successfully"
    //     },
    //     function(error) {
    //       console.error("BatteryOptimizations Request Error" + error);
    //     }
    //   );
    // });
    // ! RUN BACKGROUND PROCESS STILL ON
    window.powerManagement.dim(
      function() {
        console.log("Wakelock acquired");
      },
      function() {
        console.log("Failed to acquire wakelock");
      }
    );
    },
    test() {
      alert("y");
      localStorage.setItem("nobaru", this.something);
      // console.log(localStorage.getItem("nobaru"));

      document.addEventListener(
        "deviceready",
        function() {
          alert(
            JSON.stringify(cordova.plugins.backgroundMode.setEnabled(true))
          );
          cordova.plugins.backgroundMode.enable();
          cordova.plugins.backgroundMode.overrideBackButton();
          cordova.plugins.backgroundMode.moveToBackground();
          // cordova.plugins.backgroundMode is now available
        },
        false
      );
    },
    cek() {
      alert(JSON.stringify(cordova.plugins.backgroundMode.isActive()));
    }
  },
  mounted() {}
};
</script>