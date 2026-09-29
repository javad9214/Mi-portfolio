<script setup>
import { profile } from '../data/profile'
import BaseSection from './BaseSection.vue'
</script>

<template>
  <BaseSection id="experience" title="Experience">
    <ol class="relative space-y-12 border-l border-border pl-6 sm:pl-8">
      <li v-for="job in profile.experience" :key="`${job.company}-${job.date}`" class="relative">
        <span
          class="absolute -left-6 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-bg sm:-left-8"
        ></span>

        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 class="font-semibold text-text">{{ job.title }}</h3>
          <p class="text-xs text-muted">{{ job.date }} · {{ job.duration }}</p>
        </div>
        <p class="mt-1 text-sm font-medium text-accent">
          {{ job.company }} <span class="font-normal text-muted">· {{ job.employmentType }}</span>
        </p>
        <ul class="mt-4 space-y-2">
          <li
            v-for="(point, i) in job.description"
            :key="i"
            class="flex gap-2.5 text-sm leading-relaxed text-muted"
          >
            <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70"></span>
            <span>{{ point }}</span>
          </li>
        </ul>
      </li>
    </ol>
  </BaseSection>
</template>
