import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: '404'
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
