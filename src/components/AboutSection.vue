<script setup>
import { profile } from '../data/profile'
import BaseSection from './BaseSection.vue'

const paragraphs = profile.about.split('\n\n')
</script>

<template>
  <BaseSection id="about" title="About">
    <div class="space-y-4">
      <p v-for="(paragraph, i) in paragraphs" :key="i" class="leading-relaxed text-muted">
        {{ paragraph }}
      </p>
    </div>
  </BaseSection>
</template>
