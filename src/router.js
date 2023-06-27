import { createRouter, createWebHistory } from "vue-router";

const mainPage = () => import("./views/MainPage.vue");
const loginPage = () => import("./views/Login.vue");
const registerPage = () => import("./views/Register.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: mainPage,
  },
  {
    path: "/login",
    name: "Login",
    component: loginPage,
  },
  {
    path: "/register",
    name: "Register",
    component: registerPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
