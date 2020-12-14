<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 bg-blue" style="padding:0;margin:0;height:140px;">
          <!-- GARIS KIRI ATAS -->
          <img src="@/static/icon.png" class="img-fluid z-depth-1" style />
          <span class="absolute" style="right:10px;;top:0;color:White;">
            <a href="#" style="margin-left:10px;">> ABC</a>
            <a href="#" style="margin-left:10px;">> ABC</a>
            <a href="#" style="margin-left:10px;">> ABC</a>
          </span>
          <!-- GARIS KIRI ATAS END -->
          <!-- LOGO -->
          <img
            src="@/static/icon.png"
            class="img-fluid z-depth-1 absolute"
            style="width:60px;left:30px;top:50px;"
          />
          <span class="absolute font-times" style="left:110px;top:50px;font-size:25px;color:white;">
            HULU SUNGAI SELATAN
            <br />Hello there
          </span>
          <!-- LOGO END-->
          <!-- MENU KANAN BAWAH -->
          <img
            src="@/static/icon.png"
            class="absolute img-fluid z-depth-1"
            style="top:110px;right:0;"
          />
          <nav role="navigation" class="absolute" style="z-index:10;right:1em;top:110px;">
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
                  <li class="hover:bg-red anim">
                    <a href="#">Sub-1</a>
                  </li>
                  <li class="hover:bg-red anim">
                    <a href="#">Sub-2</a>
                  </li>
                  <li class="hover:bg-red anim">
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
                  <li class="hover:bg-red anim">
                    <a href="#">Sub-1</a>
                  </li>
                  <li class="hover:bg-red anim">
                    <a href="#">Sub-2</a>
                  </li>
                  <li class="hover:bg-red anim">
                    <a href="#">Sub-3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <!-- MENU KANAN BAWAH END -->
        </div>
        <div class="col-sm-12" style="padding:0;margin:0;">
          <hr class="style13" style="margin:0;padding:0;" />
          <div style="height:40px;background:#363B40;"></div>
        </div>
        <div class="col-sm-12 p-3">
          <!-- CONTENT -->
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo unde ipsa perferendis minus eius id voluptatem! Commodi dolor accusantium animi. Perspiciatis deserunt autem provident beatae asperiores, sit debitis aspernatur dolorem.
          <br />
          <div class="row">
            <div class="col-sm-3">
              <br />
              <hr class="style13" />
              <!-- MENU -->
              <b-menu class="pl-2">
                <b-menu-list label="Menu">
                  <b-menu-item icon="information-outline" label="Info"></b-menu-item>
                  <!-- ONE MENU -->
                  <b-menu-item icon="settings" active>
                    <template slot="label" slot-scope="props">
                      <span class="typcn typcn-user"></span>
                      Administrator
                      <span
                        class="float-right"
                        v-if="props.expanded"
                      >UP</span>
                      <span class="float-right" v-else>Down</span>
                    </template>
                    <!-- MENU EXPAND -->
                    <b-menu-item icon="account" label="Users"></b-menu-item>
                    <b-menu-item icon="cellphone-link" label="Devices"></b-menu-item>
                    <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
                    <!-- MENU EXPAND END -->
                  </b-menu-item>
                  <!--  -->
                  <b-menu-item icon="settings" active>
                    <template slot="label" slot-scope="props">
                      <span class="typcn typcn-user"></span>
                      Acount
                      <span class="float-right" v-if="props.expanded">UP</span>
                      <span class="float-right" v-else>Down</span>
                    </template>
                    <b-menu-item icon="account" label="Uang"></b-menu-item>
                  </b-menu-item>
                  <!--  -->
                </b-menu-list>
                <b-menu-list>
                  <b-menu-item label="Back" @click="$router.push('../')"></b-menu-item>
                </b-menu-list>
                <b-menu-list label="Actions">
                  <b-menu-item label="Logout"></b-menu-item>
                </b-menu-list>
              </b-menu>
            </div>
            <div class="col-sm-9">
              <br />CONTENT
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height:300px;"></div>
    <!-- FOOTER -->
    <div class="container-fluid" style="margin:0;padding:0;width:100%;">
      <div class="row" style="margin:0;padding:0;">
        <div class="col-sm-12 bg-black">
          <!-- footer -->
          <div class="row">
            <div
              class="col-sm-4"
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam at provident temporibus earum quisquam, dolor possimus soluta ipsa rem sed sunt distinctio vel tenetur ullam, officia voluptatum odit ad quis.</div>
            <div
              class="col-sm-4"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta libero repudiandae totam placeat nemo facilis, iste in doloribus impedit repellendus ad nisi quam magni? Neque tempore sit dolore aliquid numquam.</div>
            <div
              class="col-sm-4"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, in? Quod accusantium possimus harum nesciunt eos aut, aspernatur velit asperiores voluptates, placeat tempora similique quia consectetur sequi ducimus. Tempora, exercitationem.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vdata: {}
    };
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

nav > ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

nav > ul > li {
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

nav > ul > li a {
  color: blue;
}

nav > ul > li:hover {
  background: lightblue;
  cursor: pointer;
}
nav > ul > li:hover a {
  color: black;
}

nav > ul li ul {
  background: orange;
  visibility: hidden;
  opacity: 0;
  min-width: 100%;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1px;
  left: 0;
  display: none;
}

nav > ul li:hover > ul,
nav > ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

nav > ul li ul li {
  margin-left: 1px;
  clear: both;
  width: 100%;
  padding:5px;

}
/* DROPDOWN */
</style>