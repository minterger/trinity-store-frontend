<script setup>
import { ref } from "vue";

const imagenes_rangos = ref([
  {
    name: "Vip Redstone",
    imagen:
      "https://dunb17ur4ymx4.cloudfront.net/packages/images/f439bb9fbfdc920cc409185f7dd9ae03662dd114.png",
  },
  {
    name: "Vip Diamante",
    imagen:
      "https://dunb17ur4ymx4.cloudfront.net/packages/images/d0bf9a586189471109d60aa6cf93c449275e127e.png",
  },
  {
    name: "Vip Netherite",
    imagen:
      "https://dunb17ur4ymx4.cloudfront.net/packages/images/11dc5695831cfc2e944457fabfa477357bb44f5c.png",
  },
]);

const rangos = ref();
</script>

<template>
  <div id="rangos" class="grid grid-cols-3 gap-4 my-10 mb-20">
    <div
      v-for="n of imagenes_rangos"
      :key="n"
      class="backdrop-blur rounded-md bg-slate-700 bg-opacity-30 p-5 flex flex-col items-center gap-4 hover:scale-105 transition-all"
    >
      <img :src="n.imagen" alt="" class="h-28" />
      <h4 class="text-2xl">{{ n.name }}</h4>
      <p class="text-sm text-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore
        repudiandae excepturi...
      </p>
      <div class="place-self-end flex gap-4">
        <button
          class="bg-red-700 hover:bg-red-600 transition-colors px-3 py-2 rounded-sm"
        >
          Ver Mas
        </button>
        <button
          class="bg-green-900 hover:bg-green-800 transition-colors px-3 py-1 rounded-sm"
        >
          <span class="material-symbols-outlined text-base">
            add_shopping_cart
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
