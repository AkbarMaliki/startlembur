<template>
  <div>
    <!-- <li class="linya">menu2
        <ul class="ulnya" :style="{'width':mwidth+'px'}">
          <li>test1</li>
        </ul>
    </li>-->
    <ul
      class="ulnya"
      v-show="mshow"
      style="display:block;margin-top:0;"
      :style="{'width':mwidth+'px'}"
    >
      <li>menu1</li>

      <li class="linya">
        menu2
        <ul class="ulnya" :style="{'width':mwidth+'px'}">
          <li>test1</li>

          <li class="linya">
            menu2
            <ul class="ulnya" :style="{'width':mwidth+'px'}">
              <li>test1</li>

              <li class="linya">
                bom
                <ul class="ulnya mdiff" :style="{'width':300+'px','height':'400px','top':'-50px'}">
                  <li class="p-4 shadow-lg">wohooo</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>menu3</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mshow: true,
      mwidth: 144,
      mpadding: 4
    };
  },
  mounted() {
    this.$el.querySelectorAll(".ulnya>li").forEach(li => {
      li.style.padding = this.mpadding + "px";
    });
    this.$el.querySelectorAll("li.linya>ul.ulnya").forEach(ul => {
      ul.style.position = "absolute";
      ul.style.marginLeft = this.mwidth - this.mpadding + "px";
    });
  }
};
</script>
<style>
/* DIGUNAKAN UNTUK STYLE CHILD DROPDOWN */
.ulnya {
  position: static;
  text-decoration: none;
  list-style: none;
  padding: 0;
  display: none;
  margin-top: -28px;
}

/* BENTUK BUTTON */
.ulnya > li {
  cursor: pointer;
  box-shadow: 1px 2px 4px black;
  border-radius: 4px;
}
.ulnya > li:hover {
  background: gray;
}

.mdiff {
  position: absolute;
}
.mdiff > li:hover {
  background: initial;
  cursor: initial;
}
.mdiff > li {
  height: 100%;
}

.linya:hover > ul.ulnya {
  display: block;
}
</style>