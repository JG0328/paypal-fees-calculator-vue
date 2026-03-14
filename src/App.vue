<script setup lang="ts">
import { ref } from 'vue'

const feePercent = ref(5.4)
const feeFixed = ref(0.30)
</script>

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
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1">
            <input v-model="feePercent" type="number" min="0" step="0.1"
              class="w-20 bg-zinc-800 text-white text-center rounded-lg px-2 py-1.5 border border-zinc-700 focus:outline-none focus:border-zinc-500" />
            <span class="text-zinc-400">%</span>
          </div>
          <span class="text-zinc-500">+</span>
          <div class="flex items-center gap-1">
            <span class="text-zinc-400">$</span>
            <input v-model="feeFixed" type="number" min="0" step="0.01"
              class="w-20 bg-zinc-800 text-white text-center rounded-lg px-2 py-1.5 border border-zinc-700 focus:outline-none focus:border-zinc-500" />
          </div>
        </div>
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
