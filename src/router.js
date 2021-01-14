import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import Home from './views/Home.vue'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const fb = require('./firebaseConfig.js')

Vue.use(Router)
Vue.use(VueHead)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
      
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '*',
      name: 'PageNotFound',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    }
  ]
})


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  

  if(requiresAuth && !currentUser){
    next('/login')
  }else if (requiresAuth && currentUser){
    next()
  }else if(to.path == '/login' && currentUser){
    next('/dashboard')
  }else{
    next()
  }
})

export default router
