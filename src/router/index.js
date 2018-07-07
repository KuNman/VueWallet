import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'


Vue.use(Router)

const routes = [
  {
    // path: '/sign-in',
    path: '/',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "sign-in" */ 'src/views/SignIn'),
    beforeEnter: (to, from, next) => store.dispatch('auth/autoLogin')
        ? next()
        : false,
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import(/* webpackChunkName: "wallet" */ 'src/views/Wallet'),
      // tu powinien być getter ale nie wiem jak go wywołać
      // store.getters.auth.isLoggedIn zwraca undefined
    beforeEnter: (to, from, next) => store.state.auth.isLoggedIn
      ? next()
      : routes.push({ name: 'SignIn' }),
  },
]

const router = new Router({
  mode: 'history',
  routes,
})

export default router
