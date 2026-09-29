<script setup>
import { profile } from '../data/profile'
import BaseIcon from './BaseIcon.vue'

const year = new Date().getFullYear()

const socials = [
  { label: 'GitHub', icon: 'github', href: profile.links.github },
  { label: 'LinkedIn', icon: 'linkedin', href: profile.links.linkedin },
]
</script>

<template>
  <footer class="border-t border-border/60">
    <div class="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-8 sm:px-6">
      <div class="flex items-center gap-5">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.label"
          class="text-muted transition-colors hover:text-accent"
        >
          <BaseIcon :name="social.icon" class="h-5 w-5" />
        </a>
      </div>
      <p class="text-center text-xs text-muted">© {{ year }} {{ profile.firstName }} {{ profile.lastName }}</p>
    </div>
  </footer>
</template>
