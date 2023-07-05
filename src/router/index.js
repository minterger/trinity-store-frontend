import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/authStore";

const mainPage = () => import("../views/MainPage.vue");
const loginPage = () => import("../views/Login.vue");
const registerPage = () => import("../views/Register.vue");
const dashboardPage = () => import("../views/Dashboard.vue");

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
  {
    path: "/dashboard",
    name: "Dashboard",
    component: dashboardPage,
    meta: {
      requiredAuth: true,
    },
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

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const token = authStore.user?.token;

  if (to.matched.some((record) => record.meta.requiredAuth && !token)) {
    next({
      path: "/",
    });
  } else if (!!token && (to.name === "Login" || to.name === "Register")) {
    if (from.path) {
      next({
        path: from.path,
      });
    } else {
      next({
        path: "/",
      });
    }
  } else {
    next();
  }
});

export default router;
