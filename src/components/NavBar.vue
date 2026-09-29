<script setup>
import { ref } from 'vue'
import { profile } from '../data/profile'
import BaseIcon from './BaseIcon.vue'

const open = ref(false)

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-border/60 bg-bg/80 backdrop-blur">
    <nav class="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
      <a href="#top" class="font-semibold text-text">{{ profile.shortName }}</a>

      <div class="hidden items-center gap-7 sm:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm text-muted transition-colors hover:text-text"
        >
          {{ link.label }}
        </a>
      </div>

      <button
        class="text-text sm:hidden"
        :aria-expanded="open"
        aria-label="Toggle navigation menu"
        @click="open = !open"
      >
        <BaseIcon :name="open ? 'close' : 'menu'" class="h-6 w-6" />
      </button>
    </nav>

    <div v-if="open" class="border-t border-border/60 sm:hidden">
      <nav class="mx-auto max-w-4xl px-4 py-2">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-text"
          @click="open = false"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
