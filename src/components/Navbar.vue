<script setup>
import TrinityImg from "../assets/logo.png";
</script>

<template>
  <div class="w-full h-10">
    <div class="px-2 max-w-screen-lg mx-auto w-full h-full flex justify-end">
      <a href="" class="flex items-center"
        ><span class="material-symbols-outlined text-md mr-1 text-slate-400">
          shopping_cart
        </span>
        Ver Carrito</a
      >
    </div>
  </div>
  <nav
    class="w-full h-16 border-t border-b backdrop-blur bg-slate-700 bg-opacity-30 border-slate-700"
  >
    <div
      class="px-2 max-w-screen-lg mx-auto w-full h-full flex justify-between items-center"
    >
      <RouterLink class="text-xl font-bold flex items-center" to="/"
        ><img :src="TrinityImg" class="h-12 rounded-md" alt="" />
        <!-- TRINITY<span class="text-yellow-500">MC</span> -->
      </RouterLink>

      <ul class="flex gap-4">
        <li>
          <RouterLink to="" class="hover:underline transition-colors p-1"
            >Kits</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/#rangos"
            class="hover:underline transition-colors p-1"
            >Rangos</RouterLink
          >
        </li>
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
      </ul>
    </div>
  </nav>
</template>
