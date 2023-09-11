<script setup>
import { useItemStore } from "../stores/itemStore";

const itemStore = useItemStore();
</script>

<template>
  <div
    id="rangos"
    class="grid sm:grid-cols-2 md:grid-cols-3 place-content-center gap-4 pb-20"
  >
    <div
      v-for="n of itemStore.items"
      :key="n"
      class="backdrop-blur rounded-md max-w-full md:max-w-md bg-slate-700 bg-opacity-30 p-5 flex flex-col items-center gap-4 hover:scale-105 transition-all"
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
            @click="itemStore.openMoreShowInfo(n)"
          >
            Ver Mas
          </button>
          <button
            class="bg-emerald-800 hover:bg-emerald-700 transition-colors px-3 py-2 rounded-sm flex"
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
