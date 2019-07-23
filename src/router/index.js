import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Details from '@/pages/detail/Details'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    // 动态路由，代表前面的路径必须是/detail,后面的路径可以是/id
    path: '/detail/:id',
    name: 'Details',
    component: Details
  }]
})
