import Vue from 'vue'
import VueRouter from 'vue-router'
import DelcampHeader from '../components/DelcampHeader.vue'
import DelcampFooter from '../components/DelcampFooter.vue'
import LandingPage from '../components/Landing-page.vue'
import Login from '../components/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/Landing-page',
    name: 'Landing-page',
    component: LandingPage

  },
  {
    path: '/Delcampfooter',
    name: 'Delcampfooter',
    component: DelcampFooter

  },
  {
    path: '/DelcampHeader',
    name: 'DelcampHeader',
    component: DelcampHeader
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
