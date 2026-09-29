<script setup>
import { reactive } from 'vue'
import { profile } from '../data/profile'
import BaseSection from './BaseSection.vue'

const failedLogos = reactive({})

const initials = (school) =>
  school
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
</script>

<template>
  <BaseSection id="education" title="Education">
    <div class="grid gap-4 sm:grid-cols-2">
      <article
        v-for="(edu, index) in profile.education"
        :key="edu.school"
        v-fade-in="index * 150"
        class="rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_30px_rgba(45,212,191,0.15)]"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-border bg-bg p-2">
            <img
              v-if="edu.logo && !failedLogos[edu.school]"
              :src="edu.logo"
              :alt="`${edu.school} logo`"
              class="h-full w-full object-contain"
              @error="failedLogos[edu.school] = true"
            />
            <span v-else class="text-lg font-bold text-accent">{{ initials(edu.school) }}</span>
          </div>

          <span class="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {{ edu.date }}
          </span>
        </div>

        <h3 class="mt-5 font-bold text-text">{{ edu.school }}</h3>
        <p class="mt-1 text-sm font-medium text-accent">{{ edu.degree }}</p>
        <p class="mt-1 text-sm text-muted">{{ edu.fieldOfStudy }}</p>
      </article>
    </div>
  </BaseSection>
</template>
