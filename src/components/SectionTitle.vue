<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <div class="mb-8 sm:mb-10">
    <h2 class="text-2xl font-bold tracking-tight text-text sm:text-3xl">{{ title }}</h2>
    <span class="mt-3 block h-1 w-10 rounded-full bg-accent"></span>
  </div>
</template>
