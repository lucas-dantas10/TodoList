import { createRouter, createWebHistory } from "vue-router";
const Intro = () => import("../views/Intro/Intro.vue");
const Welcome = () => import("../views/Login/WelcomeLogin.vue")

const routes = [
    {
        name: 'Intro',
        path: '/',
        component: Intro
    },
    {
        name: 'Login',
        path: '/welcome',
        component: Welcome
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;