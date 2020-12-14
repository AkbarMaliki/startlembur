import Vue from 'vue'
import Router from 'vue-router'
import routes from 'vue-auto-routing'
import {
  createRouterLayout
} from 'vue-router-layout'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)
Vue.use(Router)

const RouterLayout = createRouterLayout(layout => {
  return import('@/layouts/' + layout + '.vue')
})

export default new Router({
  mode: 'hash', // history/hash , hash apabila cordova, history apabila web + public html <base href="/" /> ON
  routes: [{
    path: '/',
    component: RouterLayout,
    children: routes
  }]
})
