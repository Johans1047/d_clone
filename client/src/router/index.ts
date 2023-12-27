import LoginForm from '@/views/LoginForm.vue';
import SignupForm from '@/views/SignupForm.vue';
import TestView from '@/views/TestView.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/users/login", name: "Log In", component: LoginForm },
        { path: "/users/signup", name: "Sign Up", component: SignupForm},
        { path: "/test", name: "Test", component: TestView }
    ], 
});

export default router;

