import { createRouter, createWebHistory } from "vue-router";
import store from '../store';
import Category from '../views/Category/Category.vue';
const Intro = () => import("../views/Intro/Intro.vue");
const Welcome = () => import("../views/Intro/Welcome.vue");
const Login = () => import("../views/Login/Login.vue");
const CreateAccount = () => import('../views/Login/CreateAccount.vue')
const Home = () => import("../views/Home/Home.vue");
const Task = () => import("../views/Task/Task.vue");
const Focus = () => import("../views/Focus/Focus.vue");

const routes = [
    {
        name: 'Intro',
        path: '/',
        component: Intro,
        meta: {
            visitedGuard: true
        }
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
    },
    {
        name: 'Category',
        path: '/category',
        component: Category
    },
    {
        name: 'Task',
        path: '/task/:id',
        component: Task
    },
    {
        name: 'Focus',
        path: '/focus',
        component: Focus
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

    if (to.meta.visitedGuard && store.state.user.visited) {
        next({name: 'Welcome'});
    }

    next();
    
});

export default router;