<script setup>
import SectionTitle from './SectionTitle.vue'

defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <section :id="id" class="scroll-mt-16 border-t border-border/60">
    <div class="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionTitle :title="title" />
      <slot />
    </div>
  </section>
</template>
