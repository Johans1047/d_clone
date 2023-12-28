import AdminPanel from "@/views/AdminPanel.vue";
import TestView from "@/views/TestView.vue";
import UserPanel from "@/views/UserPanel.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Admin Panel", component: AdminPanel },
    { path: "/users", name:"Users", component: UserPanel },
    { path: "/test", name: "Test View", component: TestView }, //remove this route
  ]
});

export default router;
