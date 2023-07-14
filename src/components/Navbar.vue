<script setup>
import { ref, watch } from "vue";
import TrinityImg from "../assets/logo.png";
import { useAuthStore } from "../stores/authStore";
import { useRoute } from "vue-router";

const authStore = useAuthStore();

const menuShow = ref(false);
const route = useRoute();

watch(
  () => route.path + route.hash,
  () => (menuShow.value = false)
);

const toggleMenu = () => {
  menuShow.value = !menuShow.value;
};
</script>

<template>
  <div class="w-full h-10">
    <div
      class="px-2 max-w-screen-lg mx-auto relative w-full h-full flex justify-end"
    >
      <a href="" class="flex items-center"
        ><span class="material-symbols-outlined text-md mr-1 text-slate-400">
          shopping_cart
        </span>
        Ver Carrito</a
      >
    </div>
  </div>
  <nav
    class="w-full h-16 border-t border-b bg-slate-600 bg-opacity-30 border-slate-700 relative z-50 backdrop-blur"
  >
    <div
      class="px-2 max-w-screen-lg mx-auto w-full h-full flex justify-between items-center"
    >
      <RouterLink class="text-xl font-bold flex items-center" to="/"
        ><img :src="TrinityImg" class="h-12 rounded-md" alt="" />
        <!-- TRINITY<span class="text-yellow-500">MC</span> -->
      </RouterLink>

      <!-- menu desktop -->
      <ul class="hidden md:flex gap-4">
        <li>
          <RouterLink to="/" class="hover:underline transition-colors p-1"
            >Inicio</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/#rangos"
            class="hover:underline transition-colors p-1"
            >Rangos</RouterLink
          >
        </li>
        <template v-if="!authStore.user.token">
          <li>
            <RouterLink to="/register" class="bg-slate-600 px-3 py-2 rounded-sm"
              >Registrarse</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/login"
              class="bg-red-700 hover:bg-red-600 transition-colors px-3 py-2 rounded-sm"
              >Entrar</RouterLink
            >
          </li>
        </template>
        <template v-else>
          <li>
            <RouterLink
              to="/dashboard"
              class="bg-red-700 hover:bg-red-600 transition-colors px-3 py-2 rounded-sm"
              >Panel</RouterLink
            >
          </li>
          <li>
            <a
              @click="authStore.closeSession"
              class="bg-red-700 hover:bg-red-600 transition-colors px-3 py-2 rounded-sm cursor-pointer"
            >
              Cerrar Sesion
            </a>
          </li>
        </template>
      </ul>

      <button class="mr-3 inline md:hidden" @click="toggleMenu">
        <span class="material-symbols-outlined text-3xl">
          {{ menuShow ? "menu_open" : "menu" }}
        </span>
      </button>

      <!-- menu mobile -->
      <ul
        :class="{ 'invisible opacity-0 translate-y-2': !menuShow }"
        class="flex flex-col absolute md:hidden max-w-xs w-full top-16 right-0 p-4 bg-slate-700 bg-opacity-30 gap-5 rounded-b-md transition-all z-50 backdrop-blur"
      >
        <li>
          <RouterLink
            to="/"
            class="hover:border-b-slate-700 border-b-transparent border-b-2 transition-colors p-1 block"
            >Inicio</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/#rangos"
            class="hover:border-b-slate-700 border-b-transparent border-b-2 transition-colors p-1 block"
            >Rangos</RouterLink
          >
        </li>
        <template v-if="!authStore.user.token">
          <li>
            <RouterLink
              to="/register"
              class="bg-slate-600 px-3 py-2 rounded-sm block"
              >Registrarse</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/login"
              class="bg-red-700 hover:bg-red-600 transition-colors px-3 py-2 rounded-sm block"
              >Entrar</RouterLink
            >
          </li>
        </template>
        <template v-else>
          <li>
            <RouterLink
              to="/dashboard"
              class="bg-red-700 hover:bg-red-600 transition-colors px-3 py-2 rounded-sm block"
              >Panel</RouterLink
            >
          </li>
          <li>
            <button
              class="bg-red-700 hover:bg-red-600 transition-colors px-3 py-2 rounded-sm w-full text-left"
              @click="authStore.closeSession"
            >
              Cerrar Sesion
            </button>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>
