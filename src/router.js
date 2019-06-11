import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/room',
      name: 'room',
      component: () => import(/* webpackChunkName: "room" */ './views/Room.vue')
    },
    {
      path: '/activitie',
      name: 'activitie',
      component: () => import(/* webpackChunkName: "activitie" */ './views/Activitie.vue')
    },
    {
      path: '/activitie/create',
      name: 'create_activitie',
      component: () => import(/* webpackChunkName: "create_activitie" */ './views/Create_Activitie.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})