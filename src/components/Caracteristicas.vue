<script setup>
import { ref } from "vue";

const isCopied = ref(false);
const ip = ref("trinitymc.com.ar");

const copyIp = () => {
  // Crea un elemento de texto temporal
  var elementoTemporal = document.createElement("textarea");

  // Asigna el texto al elemento temporal
  elementoTemporal.value = ip.value;

  // Asegúrate de que el elemento temporal no sea visible
  elementoTemporal.style.position = "fixed";
  elementoTemporal.style.opacity = 0;

  // Agrega el elemento temporal al cuerpo del documento
  document.body.appendChild(elementoTemporal);

  // Selecciona el texto del elemento temporal
  elementoTemporal.select();

  // Copia el texto al portapapeles
  document.execCommand("copy");

  // Elimina el elemento temporal
  document.body.removeChild(elementoTemporal);

  isCopied.value = true;

  setTimeout(() => {
    isCopied.value = false;
  }, 2000);
};
</script>

<template>
  <div
    class="bg-slate-700 bg-opacity-30 backdrop-blur p-5 w-full mb-20 pt-10 flex flex-col gap-10"
  >
    <h3 class="text-3xl">
      Caracteristicas que le dan valor a nuestro servidor
    </h3>
    <div class="grid grid-cols-2 gap-2 text-slate-300">
      <ul class="flex flex-col gap-2">
        <li class="flex items-center">
          <span class="material-symbols-outlined mr-2"> done </span>Slimefun
        </li>
        <li class="flex items-center">
          <span class="material-symbols-outlined mr-2"> done </span>Noche
          sangrienta
        </li>
        <li class="flex items-center">
          <span class="material-symbols-outlined mr-2"> done </span>Mobs con
          nivel
        </li>
      </ul>
      <ul class="flex flex-col gap-2">
        <li class="flex items-center">
          <span class="material-symbols-outlined mr-2"> done </span>Clanes
        </li>
        <li class="flex items-center">
          <span class="material-symbols-outlined mr-2"> done </span>Cajas de
          recompensas
        </li>
        <li class="flex items-center">
          <span class="material-symbols-outlined mr-2"> done </span>Piedras de
          protección
        </li>
      </ul>
    </div>
    <div class="flex items-center">
      <!-- <span
        class="pl-2 py-2 inline-block bg-slate-600 backdrop-blur bg-opacity-30 rounded-s-sm"
        >ip:</span
      > -->
      <input
        type="text"
        :value="[isCopied ? 'Copiada!' : ip]"
        class="p-2 bg-slate-600 backdrop-blur bg-opacity-30 border-none rounded-s-sm"
        disabled
      />
      <button
        @click="copyIp"
        class="px-3 py-2 bg-red-700 hover:bg-red-600 transition-colors rounded-e-sm"
      >
        <span class="material-symbols-outlined text-sm"> content_copy </span>
      </button>
    </div>
  </div>
</template>
