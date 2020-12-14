<template>
  <div>
    <!-- MENU HILANG -->
    <div
      style="width:100%;height:40px;background:white;position:fixed;
      z-index:120;border-radius-bottom:10px;box-shadow:1px 1px 3px 2px black;padding:4px;"
      v-show="!isVisible"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <p class="font-times font-bold" style="font-size:21px;">PDAM BANJARMASIN</p>
          </div>
          <div class="col-sm-6">
            <div class="row">
              <div class="col-sm-9" style="height:30px;">
                <nav role="navigation">
                  <ul>
                    <!-- MENU 1 -->
                    <li class="btn-outline-primary">
                      <a href="#">One</a>
                    </li>
                    <!-- MENU 2 -->
                    <li class="btn-outline-primary">
                      <a href="#">Two</a>
                      <ul class="dropdown">
                        <li style="border-top:3px solid black;"></li>
                        <li>
                          <a href="#">Sub-1</a>
                        </li>
                        <li>
                          <a href="#">Sub-2</a>
                        </li>
                        <li>
                          <a href="#">Sub-3</a>
                        </li>
                      </ul>
                    </li>
                    <!-- MENU 3 -->
                    <li class="btn-outline-primary">
                      <a href="#">Three</a>
                    </li>
                    <!-- MENU 4 -->
                    <li class="btn-outline-primary">
                      <a href="#">Four</a>
                      <ul class="dropdown">
                        <li style="border-top:3px solid black;"></li>
                        <li>
                          <a href="#">Sub-1</a>
                        </li>
                        <li>
                          <a href="#">Sub-2</a>
                        </li>
                        <li>
                          <a href="#">Sub-3</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-sm-3">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-primary font-times rounded-full"
                >F</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- MENU HILANG END -->
    <div class="container-fluid font-times">
      <div class="row">
        <div class="col-sm-12" style="height:200px;">
          <div class="row">
            <div class="col-sm-6 pl-5 pt-5 pr-5">
              <!-- #HEADER KIRI -->
              <p class="font-times font-bold" style="font-size:21px;">PDAM BANJARMASIN</p>
            </div>
            <div class="col-sm-6">
              <!-- MENU KANAN ATAS 1 -->
              <div class="row">
                &nbsp;&nbsp;
                > Saran
                &nbsp;&nbsp;
                > Pengaduan
                &nbsp;&nbsp;
                <span
                  class="typcn typcn-arrow-left"
                ></span>
                +62 82251970006
                &nbsp;&nbsp;
                <span
                  style="width:200px;"
                >
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">@</div>
                    </div>
                    <input
                      type="text"
                      class="form-control py-0 rounded-lg"
                      id="search"
                      placeholder="search ..."
                    />
                  </div>
                </span>
              </div>
              <!-- MENU KANAN ATAS 2 -->
              <div class="row">
                <div class="col-sm-9" style="height:30px;">
                  <nav role="navigation" v-observe-visibility="visibilityChanged">
                    <ul>
                      <!-- MENU 1 -->
                      <li class="btn-outline-primary">
                        <a href="#">One</a>
                      </li>
                      <!-- MENU 2 -->
                      <li class="btn-outline-primary">
                        <a href="#">Two</a>
                        <ul class="dropdown">
                          <li style="border-top:3px solid black;"></li>
                          <li>
                            <a href="#">Sub-1</a>
                          </li>
                          <li>
                            <a href="#">Sub-2</a>
                          </li>
                          <li>
                            <a href="#">Sub-3</a>
                          </li>
                        </ul>
                      </li>
                      <!-- MENU 3 -->
                      <li class="btn-outline-primary">
                        <a href="#">Three</a>
                      </li>
                      <!-- MENU 4 -->
                      <li class="btn-outline-primary">
                        <a href="#">Four</a>
                        <ul class="dropdown">
                          <li style="border-top:3px solid black;"></li>
                          <li>
                            <a href="#">Sub-1</a>
                          </li>
                          <li>
                            <a href="#">Sub-2</a>
                          </li>
                          <li>
                            <a href="#">Sub-3</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="col-sm-3">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-primary font-times rounded-full"
                  >F</button>
                </div>
              </div>
            </div>
            <div class="col-sm-12 bg-black font-times" style="min-height:100px;color:white;">
              <!-- LINK BAWAH BACKGROUND HITAM -->
              <hr class="style13" style="margin:0;padding:0;" />
              <p class="p-2">Home > Profile</p>
              <p class="p-4 font-bold text-lg">PROFILE</p>
            </div>
            <div class="col-sm-12">
              <hr class="style13" style="margin:0;padding:0;" />
              <br />
             
            </div>
            <div class="col-sm-12">
              <hr class="style13" />Content
              <!-- HEIGHT -->
              <div style="height:1000px;"></div>
            </div>
            <div class="row mt-2" style="width:100%;background:#0E0E0E;height:200px;">
              <!-- FOOTER -->
              <div
                class="col-sm-4 text-center p-2"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit vel voluptas beatae impedit dolorum aperiam laudantium sed? Eum sequi corrupti voluptatibus ab optio accusantium exercitationem ipsam sunt totam! Debitis!</div>
              <div
                class="col-sm-4 text-center p-2"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit vel voluptas beatae impedit dolorum aperiam laudantium sed? Eum sequi corrupti voluptatibus ab optio accusantium exercitationem ipsam sunt totam! Debitis!</div>
              <div
                class="col-sm-4 text-center p-2"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit vel voluptas beatae impedit dolorum aperiam laudantium sed? Eum sequi corrupti voluptatibus ab optio accusantium exercitationem ipsam sunt totam! Debitis!</div>
            </div>
            <div class="row text-center" style="background:#000000;height:70px;width:100%;">
              <div class="col-sm-12">
                <p class="text-center font-times">Copyright &copy;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Share from "@/components/Single/Share.vue";

export default {
  data() {
    return {
      componentId: "comp1",
      isVisible: false
    };
  },
  components: {
    Share,
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible;
      console.log(entry);
    }
  }
};
</script>
<style scoped>
/* DROPDOWN */
a {
  text-decoration: none;
}

nav {
  font-family: "Times New Roman", Times, serif;
}

ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

li {
  padding: 4px;
  color: black;
  display: block;
  float: left;
  z-index: 100;
  text-align: center;
  min-width: 60px;
  margin-left: 5px;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
}

li a {
  color: blue;
}

li:hover {
  background: lightblue;
  cursor: pointer;
}
li:hover a {
  color: black;
}

ul li ul {
  background: orange;
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1px;
  left: 0;
  display: none;
}

ul li:hover > ul,
ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

ul li ul li {
  margin-left: 1px;
  clear: both;
  width: 100%;
}
/* DROPDOWN */
</style>