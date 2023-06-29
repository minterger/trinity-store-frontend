<script setup>
import { ref } from "vue";

const imagen = ref();

async function buscarUUID(nombreJugador) {
  try {
    const response = await fetch(
      `https://playerdb.co/api/player/minecraft/${nombreJugador}`
    );
    const data = await response.json();

    const id = data.data.player.raw_id;

    imagen.value = `https://crafatar.com/renders/body/${id}?size=4&default=MHF_Steve&overlay`;

    if (response.ok) {
      console.log(imagen.value);
    } else {
      console.log("No se encontró el jugador");
    }
  } catch (error) {
    console.error("Error al buscar el UUID del jugador:", error);
    imagen.value =
      "https://crafatar.com/renders/body/35e1b689be7a45cb9109671ea3901f43?size=4&default=MHF_Steve&overlay";
  }
}

buscarUUID("");
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
      class="h-96 m-20 absolute md:static top-72 sm:top-64 block drop-shadow-2xl"
      alt=""
    />
  </div>
</template>
