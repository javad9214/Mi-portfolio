<script setup>
import { profile } from '../data/profile'
import BaseIcon from './BaseIcon.vue'
import BaseSection from './BaseSection.vue'

const year = new Date().getFullYear()

const lastSegment = (url) => new URL(url).pathname.split('/').filter(Boolean).pop()

const items = [
  { label: 'Email', value: profile.contact.email, href: `mailto:${profile.contact.email}`, icon: 'mail' },
  { label: 'Phone', value: profile.contact.phone, href: `tel:${profile.contact.phone}`, icon: 'phone' },
  { label: 'Telegram', value: `@${lastSegment(profile.contact.telegram)}`, href: profile.contact.telegram, icon: 'send', external: true },
  { label: 'GitHub', value: lastSegment(profile.links.github), href: profile.links.github, icon: 'code', external: true },
  { label: 'LinkedIn', value: lastSegment(profile.links.linkedin), href: profile.links.linkedin, icon: 'external', external: true },
]
</script>

<template>
  <BaseSection id="contact" title="Contact">
    <p class="mb-8 leading-relaxed text-muted">
      Feel free to reach out — my inbox is always open.
    </p>
    <div class="grid gap-3 sm:grid-cols-2">
      <a
        v-for="item in items"
        :key="item.label"
        :href="item.href"
        :target="item.external ? '_blank' : undefined"
        :rel="item.external ? 'noopener noreferrer' : undefined"
        class="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/60"
      >
        <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bg text-accent">
          <BaseIcon :name="item.icon" class="h-5 w-5" />
        </span>
        <span class="min-w-0">
          <span class="block text-xs text-muted">{{ item.label }}</span>
          <span class="mt-0.5 block truncate text-sm font-medium text-text">{{ item.value }}</span>
        </span>
      </a>
    </div>
  </BaseSection>

  <footer class="border-t border-border/60">
    <p class="mx-auto max-w-4xl px-4 py-8 text-center text-xs text-muted sm:px-6">
      © {{ year }} {{ profile.name }}
    </p>
  </footer>
</template>
