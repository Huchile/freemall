import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../pages/cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cart',
    component: Cart
  },
  {
      path:'/address',
      name:'address',
      component:() => import('../pages/address.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
