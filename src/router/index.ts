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
      component: HomeView,
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/businessInfo',
      name: 'businessInfo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/businessInfoView.vue'),
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/businessList',
      name: 'businessList',
      component:businessListView,
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/login',
      name: 'login',
      component:loginView,
      meta:{
        requireAuth:false
      }
    },{
      path: '/order',
      name: 'order',
      component:orderView,
      meta:{
        requireAuth:false
      }
    },{
      path: '/me',
      name: 'me',
      component:meView,
      meta:{
        requireAuth:false
      }
    }

  ]
})

//
// import {useUserStore} from "@/stores/config";
// let store=useUserStore();
// import {useRouter} from "vue-router";
//
// router.beforeEach((to, from) => {
//   // ...
//   // 返回 false 以取消导航
//   if(store.token!=''){
//     useRouter().push({path:'/login'})
//   }
//   return true
// })


export default router