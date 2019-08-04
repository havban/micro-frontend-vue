import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/pages/Home')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
      {
        path: '/',
        component: Home
      }
  ],
  mode: 'history'
})

export default router
