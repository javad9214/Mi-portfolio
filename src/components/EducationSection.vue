<script setup>
import { profile } from '../data/profile'
import BaseSection from './BaseSection.vue'
</script>

<template>
  <BaseSection id="education" title="Education">
    <div class="grid gap-4 sm:grid-cols-2">
      <article
        v-for="edu in profile.education"
        :key="edu.school"
        class="rounded-xl border border-border bg-surface p-5"
      >
        <h3 class="font-semibold text-text">{{ edu.school }}</h3>
        <p class="mt-1 text-sm text-accent">{{ edu.degree }} — {{ edu.fieldOfStudy }}</p>
        <p class="mt-3 text-xs text-muted">{{ edu.date }}</p>
      </article>
    </div>
  </BaseSection>
</template>
