<script setup>
import { ref } from "vue";

const hidden = ref(true);
</script>

<template>
  <div
    class="fixed backdrop-blur bg-slate-700 bg-opacity-30 h-screen overflow-y-scroll overflow-x-hidden right-0 top-0 z-50 transition-all"
    :class="[hidden ? 'w-0 md:w-0 invisible' : 'w-full md:w-1/4 visible']"
  >
    <button
      class="bg-red-700 m-4 h-10 w-10 grid place-content-center rounded-full cursor-pointer"
      @click="
        () => {
          hidden = !hidden;
        }
      "
    >
      <span class="material-symbols-outlined"> close </span>
    </button>
  </div>
</template>
