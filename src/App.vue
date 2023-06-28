<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import DisordButton from "./components/DisordButton.vue";
</script>

<template>
  <div class="min-h-screen relative pb-10">
    <Navbar />
    <RouterView />
    <Footer />
    <DisordButton class="fixed bottom-8 right-8" />
  </div>
</template>
