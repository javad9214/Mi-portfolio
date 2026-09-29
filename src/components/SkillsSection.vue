<script setup>
import { profile } from '../data/profile'
import BaseSection from './BaseSection.vue'
</script>

<template>
  <BaseSection id="skills" title="Skills">
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="group in profile.skillGroups"
        :key="group.title"
        class="rounded-xl border border-border bg-surface p-5"
      >
        <h3 class="mb-4 text-sm font-semibold text-text">{{ group.title }}</h3>
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="skill in group.skills"
            :key="skill"
            class="rounded-full border border-border bg-bg px-3 py-1 text-xs text-muted"
          >
            {{ skill }}
          </li>
        </ul>
      </article>
    </div>
  </BaseSection>
</template>
