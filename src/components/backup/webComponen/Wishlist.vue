<template>
    <div id="mainContainer">
        <div class="itemList">
                <section style="width:100%;padding:10px;height:50px;" class="text-right">
                <label class="sr-only" for="search">Cari Barang</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">?</div>
                        </div>
                        <input type="text" class="form-control py-0" id="search" v-model="searchFields1" placeholder="Cari Barang">
                    </div>
                </section>
            <div class="listItem" v-if="barangs.length>0"> 
                <div class="items text-justify wow flipInY   " v-for="(item, index) in barangs" :key="index" >
                    <div class="text-right">
                        <button class="btn btn-sm btn-dark" style="color:red;font-weight:bold;font-size:10px;"
                        @click="deleteWish(item._id)">
                            Delete
                        </button>
                    </div>
                     <div class="pull-left" style="font-size:10px;">
                         <nuxt-link to="/"> 
                         {{item.toko}}
                         </nuxt-link>
                     </div>
                     <div class="pull-right" style="font-size:10px;">
                         {{item.kota}}
                     </div>
                    <nuxt-link :to="`/shop/${item._id}`" style="text-decoration:none;" >
                    <img :src="item.img[0]" :key="item._id" v-compressja
                    class="img-thumbnail imgItem"
                    style="min-height:100px"
                     alt="">
                     <div class="descItem">
                        <div 
                        style="height:40px;"
                        >
                         {{item.nama}}
                        </div> 
                        <hr>
                        <p>{{rupiah(item.harga)}}</p>    
                        <div style="position:static;">
                            <span class="pull-left">
                                <i class="fas fa-star" style="color:yellow;"></i>
                                {{item.star1+item.star2+item.star3+item.star4+item.star5}}
                            </span>
                            <span class="pull-right">
                                <i class="far fa-heart" style="color:red;"></i>
                                {{item.disukai.length}}
                            </span>
                        </div>
                        <br>
                       
                     </div>
                    </nuxt-link>
                    <!-- <button type="button" class="btn btn-sm btn-primary" @click="refresh">refresh</button> -->
                    </div>
                    <!-- <button type="button" class="btn btn-sm btn-primary" @click="refresh">refresh</button> -->
            </div>
            <div class="barangKosong" v-else>
                <div>
                    WISHLIST KOSONG
                </div>
            </div>
                    <button type="button" id="loadMore" class="btn btn-md btn-outline-secondary  btn-block waves-effect" @click="loadMore+=20">Load More</button>
        </div>
    </div>
</template>
<script>
// import WOW from 'wowjs';
import axios from 'axios'
// import '../../assets/hr.css';

export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8],
      sortable: 0,
      loadMore: 20,
      sortButton: '',
      searchFields1: '',
      listKategori: []
    }
  },
  // async asyncData(con){
  //     let {data} = await axios.get(process.env.HOST_URL+'/api/data/barang');
  //     console.log('barang',data);
  //     return {
  //         barang: data.data
  //         }
  // },
  methods: {
    rupiah(angka) {
      var rupiah = ''
      var angkarev = angka
        .toString()
        .split('')
        .reverse()
        .join('')
      for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.'
      return (
        'Rp. ' +
        rupiah
          .split('', rupiah.length - 1)
          .reverse()
          .join('')
      )
    },
    deleteWish(item) {
      let datanya = {}
      datanya.disukai = this.$auth.user._id
      this.$axios
        .put('/api/barang/sukai/' + item, datanya, {
          headers: {
            Authorization: localStorage.getItem('auth._token.local')
          }
        })
        .then(res => {
          console.log(res)
          this.$store.dispatch('refreshData')
        })
        .catch(err => {
          this.$store.dispatch('refreshData')
          console.log(err)
        })
      // alert('sukai');
      // alert(item);
    },
    refresh() {
      this.$forceUpdate()
    },
    sorta(event, number) {
      this.sortable = number
      event.target.classList.add('active')
      this.$el.querySelectorAll('.btnSortable').forEach(el => {
        if (el != event.target) {
          el.classList.remove('active')
        }
      })
    },
    addKategori(data) {
      if (this.listKategori.length > 0) this.listKategori = []
      this.listKategori.push(data)
    },
    onItemChanged(event, curr, last) {
      console.log('curr')
    }
  },
  computed: {
    myId() {
      return this.$auth.user._id
    },
    widthImg() {
      return 100
    },
    listKategoris() {
      let data = this.listKategori
      data = this.$_.uniqBy(data, 'kategori')
      return data
    },
    barangs() {
      let hasilData
      if (this.$store.state.barang.length > 0) {
        let keys = Object.keys(this.$store.state.barang[0])
        hasilData = this.$store.state.barang.filter((v, i, a) => {
          let hasil = false
          keys.filter(key => {
            if (typeof v[key] == 'string') {
              if (
                v[key]
                  .toLowerCase()
                  .indexOf(this.searchFields1.toLowerCase()) != -1
              ) {
                hasil = true
              }
            } else {
              if (v[key].toString().indexOf(this.searchFields1) != -1) {
                hasil = true
              }
            }
          })
          if (hasil) return v
        })
        switch (this.sortable) {
          case 1:
            hasilData = hasilData.sort((a, b) => {
              let star1 = a.star1 + a.star2 + a.star3 + a.star4 + a.star5
              let star2 = b.star1 + b.star2 + b.star3 + b.star4 + b.star5
              return star1 < star2
            })
            break
          case 2:
            hasilData = this.$_.orderBy(hasilData, ['createdAt'], ['asc'])
            break
          case 3:
            hasilData = this.$_.orderBy(hasilData, ['harga'], ['asc'])
            break
          case 4:
            hasilData = this.$_.orderBy(hasilData, ['harga'], ['desc'])
            break
          default:
          // console.log('nothing');
        } // data = data.sort();
        if (this.listKategori.length != 0) {
          this.listKategoris.forEach(kat => {
            hasilData = hasilData.filter(data => {
              if (data.kategori.indexOf(kat) != -1) return true
            })
          })
          console.log('nope')
        }

        hasilData = hasilData.filter((e, index) => {
          return index < this.loadMore
        })
        // console.log(hasilData.filter(e=>e.disukai.indexOf(x=>x==this.myId)));
        hasilData = hasilData.filter(e => {
          console.log(e.disukai.find(x => x == this.myId))
          return e.disukai.find(x => x == this.myId)
        })
        // console.log(data);
      } else {
        hasilData = []
      }
      hasilData = hasilData.filter((e, index) => {
        return e.aktif == true
      })
      return hasilData
    }
  },
  mounted() {
    if (this.$route.query.search) {
      // alert('yes');
    }
    var wow = new WOW({
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    })
    wow.init()
  }
}
</script>
<style scoped>
.barangKosong {
  font-family: 'Times New Roman', Times, serif;
  height: 200px;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  display: flex;
}
#mainContainer {
  width: 100%;

  margin-top: 20px;
}
.namaToko {
  margin: auto auto;
  display: none;
  height: 100px;
  background: black;
  color: white;
}
.descItem:hover > .namaToko {
  display: initial;
  margin-top: 12px;
  height: 100px;
  background: black;
  color: white;
}
.hide {
  display: none;
}
.menuList {
  margin-left: 10px;
}
.listKategori {
  list-style: none;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;
  border-radius: 10%;
  cursor: pointer;
  display: block;
}
.listKat {
  box-shadow: 1px 1px 1px black;
}
.listMenu {
  background: white;
  box-shadow: 1px 1px 1px black;
  min-height: 300px;
}
.itemList {
  background: white;
  margin-right: 10px;
  box-shadow: 1px 1px 1px black;
}
.sortable {
  padding: 15px;
  background: whitesmoke;
}
.items {
  padding: 3px;
  font-size: 13px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  transition: all ease-in-out 0.5s;
  cursor: pointer;
  border-radius: 3%;
  padding: 5px;
  box-shadow: 1px 2px 4px black;
}
.descItem {
  /* padding: 5px 10px 0px 10px; */
  /* line-height:0.8; */
  color: rgba(0, 0, 0, 0.568);
  text-decoration: none;
}
.items:hover {
}
.imgItem:hover {
  transition: all ease-in-out 0.5s;
  transform: scale(1.1);
}
.listItem {
  width: 100%;
  padding: 10px;
  grid: auto-flow / 1fr 1fr;
  grid-auto-rows: minmax(auto, auto); /*minimal tinggi dan auto lebar*/
  place-items: stretch stretch;
  grid-gap: 10px 10px;
  margin-top: 20px;
  display: grid;
}
/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  #mainContainer {
    grid: auto-flow / 1fr 4fr;
  }
  .listItem {
    grid: auto-flow / 1fr 1fr;
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  #mainContainer {
    grid: auto-flow / 1fr 4fr;
  }
  .listItem {
    grid: auto-flow / 1fr 1fr 1fr;
  }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .listItem {
    grid: auto-flow / 1fr 1fr 1fr 1fr;
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .listItem {
    grid: auto-flow / 1fr 1fr 1fr 1fr 1fr;
  }
}
</style>