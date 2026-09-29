<script setup>
import { profile } from '../data/profile'
import BaseSection from './BaseSection.vue'

const paragraphs = profile.about.split('\n\n')
</script>

<template>
  <BaseSection id="about" title="About Me">
    <div class="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
      <div v-fade-in class="flex-1 space-y-4">
        <p v-for="(paragraph, i) in paragraphs" :key="i" class="leading-relaxed text-muted">
          {{ paragraph }}
        </p>
      </div>

      <div
        v-fade-in="150"
        class="grid shrink-0 grid-cols-3 gap-3 lg:w-64 lg:grid-cols-1 lg:gap-4"
      >
        <div
          v-for="stat in profile.stats"
          :key="stat.value"
          class="rounded-xl border border-border bg-surface p-4 text-center"
        >
          <p class="text-lg font-bold text-accent sm:text-xl">{{ stat.value }}</p>
          <p class="mt-1 text-[11px] text-muted sm:text-xs">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </BaseSection>
</template>
