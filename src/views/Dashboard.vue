<script setup>
import { computed, ref, watch } from "vue";
import { useAuthStore } from "../stores/authStore";
import { useRoute, useRouter } from "vue-router";
import Perfil from "../components/DashboardPerfil.vue";
import DashboardRanks from "../components/DashboardRanks.vue";
const authStore = useAuthStore();

const route = useRoute();
const router = useRouter();

const open = (s) => {
  router.push({ query: { s } });
};

const view = ref("perfil");

watch(
  () => route.query.s,
  (query) => {
    view.value = query;
  }
);

const avatarUrl = computed(() => {
  return (
    "https://www.gravatar.com/avatar/" + authStore.user.avatar + "?d=mp&s=130"
  );
});

const menuDash = ref(false);

const toggleMenuDash = () => {
  menuDash.value = !menuDash.value;
};
</script>

<template>
  <div class="max-w-screen-lg px-2 mx-auto flex md:gap-4 relative">
    <nav
      class="absolute md:static md:max-w-xs md:w-full md:mr-0 rounded-md my-4 min-h-screen backdrop-blur md:backdrop-blur-none bg-slate-700 bg-opacity-30 transition-all md:transition-none ease-in z-10"
      :class="[menuDash ? ' w-2/3 sm:w-1/2' : 'w-0 ']"
    >
      <div
        class="flex my-4 items-center overflow-hidden justify-center gap-2 md:gap-4"
      >
        <img
          :src="avatarUrl"
          class="rounded-full h-14 w-14 md:h-24 md:w-24"
          alt=""
        />

        <span class="block text-lg font-bold text-center">{{
          authStore.user.username
        }}</span>
      </div>
      <ul class="overflow-hidden">
        <li
          class="m-2 p-2 bg-slate-600 hover:bg-slate-700 bg-opacity-30 rounded-md cursor-pointer transition-all text-slate-200 whitespace-nowrap overflow-hidden"
          @click="open('perfil')"
        >
          Perfil
        </li>
        <li
          class="m-2 p-2 bg-slate-600 hover:bg-slate-700 bg-opacity-30 rounded-md cursor-pointer transition-all text-slate-200 whitespace-nowrap overflow-hidden"
          @click="open('historial')"
        >
          Historial
        </li>
        <li
          class="m-2 p-2 bg-slate-600 hover:bg-slate-700 bg-opacity-30 rounded-md cursor-pointer transition-all text-slate-200 whitespace-nowrap overflow-hidden"
          @click="open('hgeneral')"
        >
          Historial General
        </li>
        <li
          class="m-2 p-2 bg-slate-600 hover:bg-slate-700 bg-opacity-30 rounded-md cursor-pointer transition-all text-slate-200 whitespace-nowrap overflow-hidden"
          @click="open('config')"
        >
          Configuración
        </li>
      </ul>
      <!-- boton panel lateral en el dashboard -->
      <button
        @click="toggleMenuDash"
        class="m-2 top-0 -right-14 md:hidden rounded-full h-10 w-10 grid place-content-center bg-slate-600 absolute"
      >
        <Transition>
          <span v-if="!menuDash" class="material-symbols-outlined text-3xl">
            menu
          </span>
          <span v-else class="material-symbols-outlined text-3xl"> close </span>
        </Transition>
      </button>
    </nav>
    <aside
      class="w-full rounded-md my-4 min-h-screen bg-slate-700 bg-opacity-30 relative"
    >
      <template v-if="view === 'perfil'">
        <Perfil />
      </template>
      <template v-else-if="view === 'ranks'">
        <DashboardRanks />
      </template>
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
