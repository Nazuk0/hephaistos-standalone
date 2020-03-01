import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Teacher from '../components/Teacher.vue'

Vue.use(VueRouter)

function createRouter (state) {
  async function beforeEnter (to, from, next) {
    try {
      const { data: user } = await axios.get('http://localhost:3000/api/v1/me')
      state.user = user
      next()
    } catch (err) {
      console.log('err', err)
      next('/login') // redirect to login if user is not authenticated
    }
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

  return new VueRouter({
    routes
  })
}

export default createRouter
