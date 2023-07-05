<script setup>
import { reactive, ref } from "vue";
import { useAuthStore } from "../stores/authStore";
import { useRouter } from "vue-router";

const authStore = useAuthStore();

const router = useRouter();

const message = ref("");

const user = reactive({
  email: "",
  password: "",
});

const login = async () => {
  try {
    const data = await authStore.login(user);
    if (data.token) {
      router.push("/dashboard");
    } else {
      message.value = data.message;
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="flex justify-center py-20 px-2 w-full">
    <div
      class="backdrop-blur rounded-md bg-slate-700 bg-opacity-30 p-5 w-full max-w-sm flex flex-col gap-3"
    >
      <h4
        class="text-2xl font-semibold text-center border-b pb-4 border-slate-700"
      >
        Iniciar Sesion
      </h4>
      <span v-if="message" class="font-semibold text-red-700 text-center">{{
        message
      }}</span>
      <form action="" @submit.prevent="login" class="flex flex-col">
        <label class="text-sm text-slate-200 mb-1" for="email"> Email </label>
        <input
          type="email"
          v-model="user.email"
          class="bg-slate-600 backdrop-blur bg-opacity-30 rounded-sm py-1 px-2 mb-3"
          id="email"
        />
        <label class="text-sm text-slate-200 mb-1" for="password">
          Contraseña
        </label>
        <input
          type="password"
          v-model="user.password"
          class="bg-slate-600 backdrop-blur bg-opacity-30 rounded-sm py-1 px-2 mb-6"
          id="password"
        />

        <button
          class="bg-red-700 hover:bg-red-600 transition-colors px-3 py-2 rounded-sm"
        >
          <template v-if="authStore.loading">
            <span class="material-symbols-outlined text-base">
              cached
            </span></template
          >
          <template v-else> Entrar </template>
        </button>
      </form>
    </div>
  </div>
</template>
