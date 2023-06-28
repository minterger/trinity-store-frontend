<script setup>
import { ref } from "vue";

const rangos = ref([
  {
    name: "Vip Redstone",
    image:
      "https://dunb17ur4ymx4.cloudfront.net/packages/images/f439bb9fbfdc920cc409185f7dd9ae03662dd114.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore repudiandae excepturi...",
    list: [""],
    price: 300,
  },
  {
    name: "Vip Diamante",
    image:
      "https://dunb17ur4ymx4.cloudfront.net/packages/images/d0bf9a586189471109d60aa6cf93c449275e127e.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore repudiandae excepturi...",
    list: [""],
    price: 600,
  },
  {
    name: "Vip Netherite",
    image:
      "https://dunb17ur4ymx4.cloudfront.net/packages/images/11dc5695831cfc2e944457fabfa477357bb44f5c.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore repudiandae excepturi...",
    list: [""],
    price: 900,
  },
]);
</script>

<template>
  <div id="rangos" class="grid md:grid-cols-3 place-content-center gap-4 pb-20">
    <div
      v-for="n of rangos"
      :key="n"
      class="backdrop-blur rounded-md max-w-md bg-slate-700 bg-opacity-30 p-5 flex flex-col items-center gap-4 hover:scale-105 transition-all"
    >
      <img :src="n.image" alt="" class="h-28" />
      <h4 class="text-2xl">{{ n.name }}</h4>
      <p class="text-sm text-slate-300">
        {{ n.description }}
      </p>
      <div class="flex w-full items-center justify-between gap-4">
        <span> ${{ n.price }}</span>
        <div class="flex items-center gap-4">
          <button
            class="bg-red-700 hover:bg-red-600 transition-colors px-3 py-2 rounded-sm"
          >
            Ver Mas
          </button>
          <button
            class="bg-emerald-800 hover:bg-emerald-700 transition-colors px-3 py-2 rounded-sm"
          >
            <span class="material-symbols-outlined text-base">
              add_shopping_cart
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
