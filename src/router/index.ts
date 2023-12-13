import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import businessListView from '../views/businessListView.vue'
import loginView from '../views/loginView.vue'
import orderView from '../views/orderView.vue'
import meView from '../views/meView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/businessInfo',
      name: 'businessInfo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/businessInfoView.vue')
    },
    {
      path: '/businessList',
      name: 'businessList',
      component:businessListView
    },
    {
      path: '/login',
      name: 'login',
      component:loginView
    },{
      path: '/order',
      name: 'order',
      component:orderView
    },{
      path: '/me',
      name: 'me',
      component:meView
    }

  ]
})

export default router
