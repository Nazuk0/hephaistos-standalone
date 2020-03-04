import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Teacher from '../components/Teacher.vue'
import store from '../store/index'

Vue.use(VueRouter)

async function beforeEnter (_to, _from, next) {
  if (!store.getters['user/isAuthenticated']) {
    await store.dispatch('user/fetchUser')
  }
  if (store.getters['user/isAuthenticated']) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: Teacher,
    beforeEnter
  }
]

export default new VueRouter({
  routes
})
