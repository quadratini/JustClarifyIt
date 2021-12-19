import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PostDetails from '../views/PostDetails.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: true
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/register',
        name: 'Register'
    },
    {
        path: '/user',
        name: 'User'
    },
    {
        path: '/post/:id',
        name: 'PostDetails',
        component: PostDetails
    },
    {
        path: '/post/create',
        name: 'CreatePost'
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
