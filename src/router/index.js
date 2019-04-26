/*
    路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import msite from '../pages/Msite/Msite.vue'
import order from '../pages/Order/Order.vue'
import profile from '../pages/Profile/Profile.vue'
import search from '../pages/Search/Search.vue'
import login from '../pages/Login/Login.vue'
import message from '../components/Login/message.vue'
import password from '../components/Login/password.vue'
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes: [
        {
            path: '/',
            component: msite,
            meta: {
                showRouter: true
            }
        },
        {
            path: '/msite',
            component: msite,
            meta: {
                showRouter: true
            }
        },
        {
            path: '/order',
            component: order,
            meta: {
                showRouter: true
            }
        },
        {
            path: '/profile',
            component: profile,
            meta: {
                showRouter: true
            }
        },
        {
            path: '/search',
            component: search,
            meta: {
                showRouter: true
            }
        },
        {
            path: '/login',
            component: login,
            redirect: '/login/password',
            children: [
                {
                    path: 'message',
                    component: message
                },
                {
                    path: 'password',
                    component: password
                }
            ]
        }
    ]
})