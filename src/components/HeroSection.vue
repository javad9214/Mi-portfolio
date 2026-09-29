<script setup>
import { ref } from 'vue'
import { profile } from '../data/profile'
import BaseIcon from './BaseIcon.vue'

const socials = [
  { label: 'GitHub', icon: 'github', href: profile.links.github },
  { label: 'LinkedIn', icon: 'linkedin', href: profile.links.linkedin },
  { label: 'Telegram', icon: 'send', href: profile.contact.telegram },
]

const photoLoaded = ref(true)
</script>

<template>
  <section id="home" class="relative flex min-h-screen items-center justify-center overflow-hidden">
    <div class="glow" aria-hidden="true"></div>

    <div
      class="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-10 px-4 py-28 text-center sm:px-6 lg:flex-row lg:gap-16 lg:text-left"
    >
      <div v-if="profile.photo && photoLoaded" class="fade-in fade-1 relative shrink-0 lg:order-2">
        <div class="absolute -inset-3 rounded-[2rem] bg-accent/20 blur-2xl" aria-hidden="true"></div>
        <img
          :src="profile.photo"
          :alt="profile.name"
          class="relative h-36 w-36 rounded-3xl border border-accent/60 object-cover sm:h-44 sm:w-44 lg:h-60 lg:w-60"
          @error="photoLoaded = false"
        />
      </div>

      <div class="flex-1">
        <p class="fade-in fade-1 text-sm font-medium uppercase tracking-widest text-muted">Hi, I'm</p>
        <h1 class="fade-in fade-2 mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
          {{ profile.name }}
        </h1>
        <p class="fade-in fade-3 mt-4 text-xl font-semibold text-accent sm:text-2xl">{{ profile.title }}</p>
        <p class="fade-in fade-4 mx-auto mt-5 max-w-2xl leading-relaxed text-muted lg:mx-0">{{ profile.tagline }}</p>

        <p class="fade-in fade-5 mt-7 inline-flex items-center gap-1.5 text-sm text-muted">
          <BaseIcon name="pin" class="h-4 w-4 text-accent" />
          {{ profile.location }}
        </p>

        <div class="fade-in fade-6 mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <a
            href="#contact"
            class="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent/85"
          >
            Contact Me
          </a>
          <a
            href="/cv.pdf"
            download
            class="rounded-lg border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            Download CV
          </a>
        </div>

        <div class="fade-in fade-7 mt-8 flex items-center justify-center gap-3 lg:justify-start">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.label"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <BaseIcon :name="social.icon" class="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(42rem 42rem at 75% 15%, rgb(45 212 191 / 0.12), transparent 70%),
    radial-gradient(36rem 36rem at 20% 85%, rgb(45 212 191 / 0.07), transparent 70%);
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  opacity: 0;
  animation: fade-up 0.7s ease-out forwards;
}

.fade-1 { animation-delay: 0.05s; }
.fade-2 { animation-delay: 0.15s; }
.fade-3 { animation-delay: 0.25s; }
.fade-4 { animation-delay: 0.35s; }
.fade-5 { animation-delay: 0.45s; }
.fade-6 { animation-delay: 0.55s; }
.fade-7 { animation-delay: 0.65s; }
</style>
