import { createRouter, createWebHistory } from "vue-router";
const Intro = () => import("../views/Intro/Intro.vue");
const Welcome = () => import("../views/Intro/Welcome.vue");
const Login = () => import("../views/Login/Login.vue");
const CreateAccount = () => import('../views/Login/CreateAccount.vue')

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
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;