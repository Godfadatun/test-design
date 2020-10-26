import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import routes from './route'

Vue.use(VueRouter)


const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,
  mode: 'history',
  base: process.env.BASE_URL
})

export default router
