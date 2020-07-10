import Vue from 'vue'
// import VueTailwind from 'vue-tailwind'
import VueSignaturePad from 'vue-signature-pad';
Vue.use(VueSignaturePad);
//! https://github.com/egoist/vue-no-ssr
import NoSSR from 'vue-no-ssr'
Vue.component('no-ssr', NoSSR)
import VueTouchFix from 'vue-touch-hotfix'
Vue.use(VueTouchFix)
// import Toasted from 'vue-toasted'
import VueCarousel from 'vue-carousel'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Buefy from 'buefy'
Vue.use(VueCarousel)
Vue.use(Viewer)
Vue.use(Buefy)
import 'buefy/dist/buefy.css'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';
import VueDragscroll from 'vue-dragscroll'
Vue.use(VueDragscroll)
// import RadialProgressBar from 'vue-radial-progress'


// import JsonEditor from 'vue-json-edit'
// Vue.use(JsonEditor)

// import PortalVue from "portal-vue";
// Vue.use(PortalVue);
// Vue.use(VueTailwind)
// Vue.use(Toasted)
import VueLazyComponent from '@xunlei/vue-lazy-component'
import VRuntimeTemplate from 'v-runtime-template'
Vue.component('v-runtime-template', VRuntimeTemplate)

Vue.use(VueLazyComponent)
// Vue.component('RadialProgressBar', RadialProgressBar)

// import vueCookie from 'vue-cookie'
// Vue.use(vueCookie)
// import BootstrapVue from 'bootstrap-vue'
// Vue.use(BootstrapVue)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import '@/node_modules/vue-wysiwyg/dist/vueWysiwyg.css'

//! =========================================
// import '@/assets/css/fontawesome.css'

//! https://github.com/SortableJS/Vue.Draggable
// import draggable from 'vuedraggable'
// Vue.component('draggable', draggable)

//! https://github.com/jbaysolutions/vue-grid-layout
// import VueGridLayout from 'vue-grid-layout'
// Vue.component('grid-layout', VueGridLayout.GridLayout)
// Vue.component('grid-item', VueGridLayout.GridItem)



// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: '../static/loading.gif',
//   loading: '../static/loading.gif',
//   attempt: 1
// })

// import '../static/vueWysiwyg.css'


// VUE CAROUSEL

// //VUE TREE
// import { VTree, VSelectTree } from 'vue-tree-halower'
// Vue.use (VTree)
// Vue.use (VSelectTree)

// VUE TAG INPUT
// import VoerroTagsInput from '@voerro/vue-tagsinput';
// Vue.component('tags-input', VoerroTagsInput);



// import * as VueGoogleMaps from 'vue2-google-maps'



// ! WEBSOCKET
// const url = require('../application-keys.json')
// if (url.ws == 'false') {

// } else {

//   let ws = new WebSocket(url.ws)
//   Object.defineProperty(Vue.prototype, '$ws', {
//     value: ws
//   })
// }


// import '../assets/css/fontawesome.css'

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyDwT1Qr7uqQk-jOMd3mMz-pfhzQRyrq7Gk',
//     libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    /// / If you want to set the version, you can do so:
    // v: '3.26',
  // }

  /// / If you intend to programmatically custom event listener code
  /// / (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  /// / instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  /// / you might need to turn this on.
  // autobindAllEvents: false,

  /// / If you want to manually install components, e.g.
  /// / import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  /// / Vue.component('GmapMarker', GmapMarker)
  /// / then disable the following:
  // installComponents: true,
// })


// ! ==================
//! https://github.com/eddiemf/vue-scrollactive
// import VueScrollactive from 'vue-scrollactive'
// Vue.use(VueScrollactive)
// import VueDragTree from 'vue-drag-tree'
// import 'vue-drag-tree/dist/vue-drag-tree.min.css'
// Vue.use(VueDragTree)
// import VueTreeNavigation from 'vue-tree-navigation'
// Vue.use(VueTreeNavigation)

// import VueObserveVisibility from 'vue-observe-visibility'
// Vue.use(VueObserveVisibility)