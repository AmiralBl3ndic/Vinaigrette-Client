import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from '@/components/PageNotFound.vue'
import Home from '@/views/Home.vue'
import Play from '@/views/Play.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/play',
    name: 'Play',
    component: Play
  },
  { // Handle 404 errors
    path: '*',
    name: 'Page not found',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
