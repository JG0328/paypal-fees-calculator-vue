<script setup lang="ts">
import { ref, computed } from 'vue'

const feePercent = ref(5.4)
const feeFixed = ref(0.30)
const amountToReceive = ref<number | null>(null)

const amountToSend = computed(() => {
  if (!amountToReceive.value) return null
  return ((amountToReceive.value + feeFixed.value) / (1 - feePercent.value / 100)).toFixed(2)
})

const totalFees = computed(() => {
  if (!amountToSend.value) return null
  return (parseFloat(amountToSend.value) - amountToReceive.value!).toFixed(2)
})
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
        <div class="flex items-center justify-center gap-2">
          <div class="flex items-center gap-1">
            <input v-model="feePercent" type="number" min="0" step="0.1"
              class="w-24 bg-zinc-800 text-white text-center rounded-lg px-2 py-1.5 border border-zinc-700 focus:outline-none focus:border-zinc-500 text-lg" />
            <span class="text-zinc-400 text-lg">%</span>
          </div>
          <span class="text-zinc-500 text-lg">+</span>
          <div class="flex items-center gap-1">
            <span class="text-zinc-400 text-lg">$</span>
            <input v-model="feeFixed" type="number" min="0" step="0.01"
              class="w-24 bg-zinc-800 text-white text-center rounded-lg px-2 py-1.5 border border-zinc-700 focus:outline-none focus:border-zinc-500 text-lg" />
          </div>
        </div>

        <div class="mt-6 flex flex-col gap-4">
          <div class="flex items-center justify-between gap-4">
            <span class="text-zinc-300 whitespace-nowrap text-lg">To get:</span>
            <div class="flex items-center gap-1">
              <span class="text-zinc-300 text-lg">$</span>
              <input v-model="amountToReceive" type="number" min="0" step="0.01" placeholder="0.00"
                class="w-32 bg-zinc-800 text-white text-center rounded-lg px-2 py-1.5 border border-zinc-700 focus:outline-none focus:border-zinc-500 text-lg" />
            </div>
          </div>
          <div class="flex items-center justify-between gap-4">
            <span class="text-zinc-300 whitespace-nowrap text-lg">You must send:</span>
            <span class="text-white font-semibold text-xl">
              {{ amountToSend ? `$${amountToSend}` : '—' }}
            </span>
          </div>
          <div v-if="totalFees" class="flex items-center justify-between gap-4">
            <span class="text-zinc-500 whitespace-nowrap text-sm">Total fees:</span>
            <span class="text-zinc-500 text-sm">-${{ totalFees }}</span>
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
