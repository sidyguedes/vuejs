import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Site/Home.vue'),
    meta: { title: 'Blog - Inicial Page' }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Site/Home.vue'),
    meta: { title: 'Blog - Inicial Page' }
  },
  {
    path: '/lifestyle',
    name: 'Lifestyle',
    component: () => import(/* webpackChunkName: "about" */ '../views/Site/Lifestyle.vue'),
    meta: { title: 'Blog - Lifestyle' }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Site/About.vue'),
    meta: { title: 'Blog - About' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Site/Contact.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
  
})

export default router
