import { createRouter, createWebHistory } from "vue-router";
import store from '../store';
const Intro = () => import("../views/Intro/Intro.vue");
const Welcome = () => import("../views/Intro/Welcome.vue");
const Login = () => import("../views/Login/Login.vue");
const CreateAccount = () => import('../views/Login/CreateAccount.vue')
const Home = () => import("../views/Home/Home.vue");

const routes = [
    {
        name: 'Intro',
        path: '/',
        component: Intro
    },
    {
        name: 'Welcome',
        path: '/welcome',
        component: Welcome
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'CreateAccount',
        path: '/criar-conta',
        component: CreateAccount
    },
    {
        name: 'Home',
        path: '/home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {

    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'Login' });
    }

    next();
})

export default router;