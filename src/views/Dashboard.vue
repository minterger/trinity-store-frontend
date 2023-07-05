<script setup>
import { computed, ref } from "vue";
import { useAuthStore } from "../stores/authStore";
const authStore = useAuthStore();

const avatarUrl = computed(() => {
  return "https://www.gravatar.com/avatar/" + authStore.user.avatar + "?d=404";
});
</script>

<template>
  <div class="max-w-screen-lg px-2 mx-auto flex gap-4">
    <nav
      class="max-w-xs w-full rounded-md my-4 min-h-screen bg-slate-700 bg-opacity-30"
    >
      <img :src="avatarUrl" class="rounded-full mx-auto my-4 h-24" alt="" />
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
      class="w-full rounded-md my-4 min-h-screen bg-slate-700 bg-opacity-30"
    >
      asd
    </aside>
  </div>
</template>
