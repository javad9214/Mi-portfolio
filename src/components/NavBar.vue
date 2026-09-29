<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { profile } from '../data/profile'
import BaseIcon from './BaseIcon.vue'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const sections = ['home', ...links.map((link) => link.id)]
const activeId = ref('home')
const open = ref(false)

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeId.value = entry.target.id
      }
    },
    // active = section crossing the middle band of the viewport
    { rootMargin: '-40% 0px -55% 0px' },
  )

  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  }
})

onBeforeUnmount(() => observer.disconnect())
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-border/60 bg-bg/80 backdrop-blur">
    <nav class="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
      <a href="#home" class="font-semibold text-accent">{{ profile.shortName }}</a>

      <div class="hidden items-center gap-7 sm:flex">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          class="text-sm transition-colors"
          :class="activeId === link.id ? 'text-accent' : 'text-muted hover:text-text'"
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
          :key="link.id"
          :href="`#${link.id}`"
          class="block rounded-lg px-3 py-2.5 text-sm transition-colors"
          :class="activeId === link.id ? 'bg-surface text-accent' : 'text-muted hover:bg-surface hover:text-text'"
          @click="open = false"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
