import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Dashboard from '../views/Dashboard';
import Nodos from '../views/Nodos';
import Alarmas from '../views/Alarmas';
import Monitor from '../views/Monitor';
import Seguimiento from '../views/Seguimiento';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/nodos',
        name: 'Nodos',
        component: Nodos
    },
    {
        path: '/alarmas',
        name: 'Alarmas',
        component: Alarmas
    },
    {
        path: '/monitor',
        name: 'Monitor',
        component: Monitor
    },
    {
        path: '/seguimiento',
        name: 'Seguimiento',
        component: Seguimiento
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
