import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import helloword from '../components/HelloWorld.vue'
import LoginBuyer from '../components/buyer/LoginBuyer.vue'
import RegisterBuyer from '../components/buyer/RegisterBuyer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Helloword',
    name: 'home',
    component: helloword
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login-buyer',
    name: 'login-buyer',
    component: LoginBuyer
  },
  {
    path: '/register-buyer',
    name: 'register-buyer',
    component: RegisterBuyer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
