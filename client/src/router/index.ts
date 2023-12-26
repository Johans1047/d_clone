import LoginForm from '@/views/LoginForm.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/users/login", name: "Log In", component: LoginForm }
    ], 
});

export default router;

