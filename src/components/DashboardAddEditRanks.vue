<script setup>
import ModalAddEditRanks from "./ModalAddEditRanks.vue";
</script>

<template>
  <!-- contenido -->
  <h3 class="text-center text-xl font-bold py-4 b border-b border-slate-700">
    Editor de rangos
  </h3>

  <section class="m-4">
    <div class="w-full flex justify-center gap-4">
      <button
        class="bg-red-700 hover:bg-red-600 transition-colors px-3 py-2 rounded-sm"
      >
        Añadir Rango
      </button>
      <button
        class="bg-red-700 hover:bg-red-600 transition-colors px-3 py-2 rounded-sm"
      >
        Actualizar
      </button>
    </div>
  </section>

  <ModalAddEditRanks />
</template>
