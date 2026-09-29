<script setup>
import { profile } from '../data/profile'
import BaseSection from './BaseSection.vue'
import ExperienceItem from './ExperienceItem.vue'
</script>

<template>
  <BaseSection id="experience" title="Experience">
    <div class="relative">
      <div
        class="absolute inset-y-0 left-4 w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
        aria-hidden="true"
      ></div>
      <ol class="space-y-10">
        <ExperienceItem
          v-for="(job, index) in profile.experience"
          :key="`${job.company}-${job.date}`"
          :job="job"
          :index="index"
        />
      </ol>
    </div>
  </BaseSection>
</template>
