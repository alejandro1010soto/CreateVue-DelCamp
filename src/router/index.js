import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import helloword from '../components/HelloWorld.vue'
import Login from '../components/Login.vue'
import LoginFarmerVue from '@/components/Farmer/LoginFarmer.vue'
import ProfileFarmer from '@/components/Farmer/ProfileFarmer.vue'
import RegisterFarmer from '@/components/Farmer/RegisterFarmer'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/loginFarmer',
    name: 'loginFar',
    component: LoginFarmerVue
  },
  {
    path: '/ProfileFarmer',
    name: 'ProfileFarmer',
    component: ProfileFarmer
  },
  {
    path: '/RegisterFarmer',
    name: 'Register',
    component: RegisterFarmer
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
