<script setup>
import { watch } from "vue";
import { useItemStore } from "../stores/itemStore";
import { useRoute } from "vue-router";

const itemStore = useItemStore();
const route = useRoute();

watch(
  () => route.path,
  () => {
    itemStore.moreInfoShow = false;
  }
);
</script>

<template>
  <transition>
    <div
      :key="itemStore.itemShow"
      class="fixed backdrop-blur bg-slate-700 bg-opacity-30 h-screen overflow-y-auto overflow-x-hidden top-0 z-50 transition-all ease-in-out duration-500 w-full lg:w-1/4 md:w-2/5 sm:w-1/2"
      :class="[
        !itemStore.moreInfoShow
          ? ' -right-1/2 opacity-0 invisible'
          : ' right-0 opacity-100 visible',
      ]"
    >
      <button
        class="bg-red-700 m-4 h-10 w-10 grid place-content-center rounded-full cursor-pointer"
        @click="
          () => {
            itemStore.moreInfoShow = false;
          }
        "
      >
        <span class="material-symbols-outlined"> close </span>
      </button>
      <img :src="itemStore.itemShow.image" alt="" class="h-40 mx-auto mb-10" />
      <h3 class="text-center text-2xl font-semibold px-4">
        {{ itemStore.itemShow.name }}
      </h3>
      <p class="px-4 py-2 mt-5">
        {{ itemStore.itemShow.description }}
      </p>

      <ul class="px-2 py-2 mt-5 text-sm text-slate-300 font-semibold">
        <li
          class="p-1 align-middle"
          v-for="n of itemStore.itemShow.list"
          :key="n"
        >
          <span class="material-symbols-outlined align-middle text-slate-300">
            keyboard_double_arrow_right </span
          >{{ n }}
        </li>
      </ul>
      <p class="p-4">
        <span class="font-semibold">Precio:</span> ${{
          itemStore.itemShow.price
        }}
      </p>
      <div class="flex flex-col">
        <button
          class="bg-emerald-800 hover:bg-emerald-700 transition-colors px-3 py-2 rounded-sm m-4"
        >
          Añadir Al Carrito
        </button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  right: -50%;
  opacity: 0;
  visibility: hidden;
}
</style>
