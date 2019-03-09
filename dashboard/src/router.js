import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import axios from 'axios'

Vue.use(Router)

const logged = function(to, from ,next){
  return axios.post('http://localhost:3000/validate-token', {
    token: localStorage.getItem("token")
  })
  .then(res => {
    if (res.data == true) {
      return next()
    }
    else {
      return next({name: 'login'})
    }
  })
  // .catch(err => {

  // })
}

const auth = function(to, from, next){
  return axios.post('http://locahlhost:3000/validate-token', {
    token: localStorage.getItem("token")
  })
  .then(res => {
    if(res.data === true){
      return next();
    }
    else {
      return next({name: 'login'})
    }
  })
  // .catch(err =>{

  // })
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      // beforeEnter: logged,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      // beforeEnter: logged,
      component: () => import('./views/Register.vue')
    },
    {
      path: '/change-password',
      name: 'change-password',
      // beforeEnter: auth,
      component: () => import('./views/ChangePassword.vue')
    },
  ]
})
