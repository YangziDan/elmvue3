import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import businessListView from '../views/businessListView.vue'
import loginView from '../views/loginView.vue'
import registerView from '../views/registerView.vue'
import orderView from '../views/orderView.vue'
import meView from '../views/meView.vue'
import payView from '../views/payView.vue'
import orderListView from "../views/orderListView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/businessInfo',
            name: 'businessInfo',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/businessInfoView.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/businessList',
            name: 'businessList',
            component: businessListView,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: loginView,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/register',
            name: 'register',
            component: registerView,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/order',
            name: 'order',
            component: orderView,
            meta: {
                requiresAuth: true
            }
        }, {
            path: '/me',
            name: 'me',
            component: meView,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/pay',
            name: 'pay',
            component: payView,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/orderList',
            name: 'orderList',
            component: orderListView,
            meta: {
                requiresAuth: false
            }
        }

    ]
})


export default router
