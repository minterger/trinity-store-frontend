<template>
  <div class="flex justify-center py-20 px-2 w-full">
    <div
      class="backdrop-blur rounded-md bg-slate-700 bg-opacity-30 p-5 w-full max-w-sm flex flex-col gap-3"
    >
      <h4
        class="text-2xl font-semibold text-center border-b pb-4 border-slate-700"
      >
        Registrarse
      </h4>
      <form action="" class="flex flex-col">
        <label class="text-sm text-slate-200 mb-1" for="username">
          Usuario de Minecraft
        </label>
        <input
          type="text"
          class="bg-slate-600 backdrop-blur bg-opacity-30 rounded-sm py-1 px-2 mb-3"
          id="username"
          placeholder="Usuario de Minecraft"
        />
        <label class="text-sm text-slate-200 mb-1" for="email"> Email </label>
        <input
          type="email"
          class="bg-slate-600 backdrop-blur bg-opacity-30 rounded-sm py-1 px-2 mb-3"
          id="email"
        />
        <label class="text-sm text-slate-200 mb-1" for="password">
          Contraseña
        </label>
        <input
          type="password"
          class="bg-slate-600 backdrop-blur bg-opacity-30 rounded-sm py-1 px-2 mb-3"
          id="password"
        />
        <label class="text-sm text-slate-200 mb-1" for="confirmPassword">
          Confirmar Contraseña
        </label>
        <input
          type="password"
          class="bg-slate-600 backdrop-blur bg-opacity-30 rounded-sm py-1 px-2 mb-6"
          id="confirmPassword"
        />

        <button
          class="bg-red-700 hover:bg-red-600 transition-colors px-3 py-2 rounded-sm"
        >
          Registrarse
        </button>
      </form>
    </div>
  </div>
</template>
