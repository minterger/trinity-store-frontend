<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="min-h-screen relative pb-10">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
