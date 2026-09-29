<script setup>
import { profile } from '../data/profile'
import BaseIcon from './BaseIcon.vue'
</script>

<template>
  <section id="top" class="mx-auto max-w-4xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-24">
    <p class="mb-4 text-sm font-medium tracking-wide text-accent">Hello, I'm</p>
    <h1 class="text-4xl font-bold tracking-tight text-text sm:text-5xl">{{ profile.name }}</h1>
    <p class="mt-4 text-xl font-medium text-muted sm:text-2xl">{{ profile.title }}</p>
    <p class="mt-5 max-w-2xl leading-relaxed text-muted">{{ profile.tagline }}</p>

    <div class="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
      <span class="inline-flex items-center gap-1.5">
        <BaseIcon name="pin" class="h-4 w-4 text-accent" />
        {{ profile.location }}
      </span>
      <span class="inline-flex items-center gap-1.5">
        <BaseIcon name="calendar" class="h-4 w-4 text-accent" />
        {{ profile.age }} years old
      </span>
    </div>

    <div class="mt-9 flex flex-wrap gap-3">
      <a
        :href="`mailto:${profile.contact.email}`"
        class="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent/85"
      >
        Email me
      </a>
      <a
        v-for="link in [
          { label: 'GitHub', href: profile.links.github },
          { label: 'LinkedIn', href: profile.links.linkedin },
        ]"
        :key="link.label"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
      >
        {{ link.label }}
        <BaseIcon name="arrow" class="h-4 w-4" />
      </a>
    </div>
  </section>
</template>
