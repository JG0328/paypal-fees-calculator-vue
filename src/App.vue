<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex items-center justify-center p-6">
    <div class="bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-md flex flex-col">
      <header class="p-8 pb-4">
        <h1 class="text-center text-white text-4xl">
          PayPal Fees Calculator
        </h1>
      </header>
      <hr class="border-zinc-700" />
      <main class="p-8 flex-1">

      </main>
      <hr class="border-zinc-700" />
      <footer class="p-8 pt-4">
        <div class="w-full text-center text-sm text-gray-500">
          {{ `©${new Date().getFullYear()} Gammes Studio` }}
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
