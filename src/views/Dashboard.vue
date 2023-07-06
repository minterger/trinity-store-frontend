<script setup>
import { computed, ref } from "vue";
import { useAuthStore } from "../stores/authStore";
const authStore = useAuthStore();

const avatarUrl = computed(() => {
  return "https://www.gravatar.com/avatar/" + authStore.user.avatar + "?d=404";
});

const menuDash = ref(false);

const toggleMenuDash = () => {
  menuDash.value = !menuDash.value;
};
</script>

<template>
  <div class="max-w-screen-lg px-2 mx-auto flex md:gap-4">
    <nav
      class="max-w-xs md:w-full md:mr-0 rounded-md my-4 min-h-screen bg-slate-700 bg-opacity-30 transition-all md:transition-none"
      :class="[menuDash ? 'mr-3 w-full' : 'mr-0 w-0 overflow-hidden']"
    >
      <div class="flex my-4 items-center justify-center gap-4">
        <img :src="avatarUrl" class="rounded-full h-24 w-24" alt="" />

        <span class="block text-lg font-bold text-center">{{
          authStore.user.username
        }}</span>
      </div>
      <ul>
        <li
          class="m-2 p-2 bg-slate-600 hover:bg-slate-700 bg-opacity-30 rounded-md cursor-pointer transition-all text-slate-200"
        >
          Cuenta
        </li>
        <li
          class="m-2 p-2 bg-slate-600 hover:bg-slate-700 bg-opacity-30 rounded-md cursor-pointer transition-all text-slate-200"
        >
          Historial
        </li>
      </ul>
    </nav>
    <aside
      class="w-full rounded-md my-4 min-h-screen bg-slate-700 bg-opacity-30 relative"
    >
      asdasdasd
      <button
        @click="toggleMenuDash"
        class="m-4 top-0 md:hidden left-0 rounded-full h-10 w-10 grid place-content-center bg-slate-600 absolute"
      >
        <Transition>
          <span v-if="!menuDash" class="material-symbols-outlined text-3xl">
            menu
          </span>
          <span v-else class="material-symbols-outlined text-3xl"> close </span>
        </Transition>
      </button>
    </aside>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  position: absolute;
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
