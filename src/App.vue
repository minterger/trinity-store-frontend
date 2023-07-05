<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import DisordButton from "./components/DisordButton.vue";
import { useAuthStore } from "./stores/authStore";

const authStore = useAuthStore();

authStore.getUser();
</script>

<template>
  <div class="min-h-screen relative pb-10 overflow-hidden">
    <Navbar />
    <router-view v-slot="{ Component, route }">
      <transition name="slide-fade">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <Footer />
    <DisordButton class="fixed bottom-8 right-8" />
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  position: absolute;
  left: 0;
  right: 0;
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
