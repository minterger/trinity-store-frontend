<script setup>
import Main from "../components/Main.vue";
import Rangos from "../components/Rangos.vue";
import Caracteristicas from "../components/Caracteristicas.vue";
import MoreInfoItem from "../components/MoreInfoItem.vue";
</script>

<template>
  <main class="max-w-screen-lg px-2 mx-auto flex flex-col">
    <Main />
    <Caracteristicas />
    <Rangos />
    <MoreInfoItem />
  </main>
</template>
