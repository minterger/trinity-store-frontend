<script setup>
import { ref, watch } from "vue";
import { useAuthStore } from "../stores/authStore";

import stevepng from "../assets/steve.png";

const authStore = useAuthStore();

const imagen = ref("");

const traerImg = () => {
  if (!!authStore.user.uuid) {
    imagen.value = `https://crafatar.com/renders/body/${authStore.user.uuid}?scale=10&default=MHF_Steve&overlay`;
  } else {
    imagen.value = stevepng;
  }
};

traerImg();

watch(() => authStore.user.uuid, traerImg);
</script>

<template>
  <div
    class="flex justify-center md:justify-between relative items-center mb-44 mt-8 md:my-8 h-96 md:h-auto"
  >
    <div class="flex flex-col items-center">
      <h2 class="max-w-xl text-5xl text-center font-bold uppercase">
        Un Servidor que asegura tu <span class="text-red-600">diversión</span>
      </h2>
      <p class="max-w-md text-center mt-6 text-lg">
        Tenemos un Survival con mobs Niveleados, SlimeFun y muchas otras cosas
        para que te diviertas
      </p>
    </div>
    <img
      :src="imagen"
      class="h-96 m-20 absolute md:static top-72 sm:top-64 block drop-shadow-2xl -scale-x-100"
      alt=""
    />
  </div>
</template>
