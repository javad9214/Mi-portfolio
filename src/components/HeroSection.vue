<script setup>
import { computed, ref } from 'vue'
import { profile } from '../data/profile'
import BaseIcon from './BaseIcon.vue'

const socials = [
  { label: 'GitHub', icon: 'github', href: profile.links.github },
  { label: 'LinkedIn', icon: 'linkedin', href: profile.links.linkedin },
  { label: 'Telegram', icon: 'send', href: profile.contact.telegram },
]

const photoLoaded = ref(true)
const hasPhoto = computed(() => Boolean(profile.photo) && photoLoaded.value)

// glass card texts derived from the stats in profile.js
const experienceStat = profile.stats[0]
const stackStat = profile.stats[1]

const [yearsWord, ...experienceRest] = experienceStat.label.split(' ')
const experienceCard = {
  title: `${experienceStat.value} ${yearsWord}`, // "10+ Years"
  subtitle: experienceRest.join(' '), // "Experience"
}
const stackCard = { title: `${stackStat.value} · ${stackStat.label}` } // "Java · Spring Boot"
</script>

<template>
  <section id="home" class="relative flex min-h-screen items-center justify-center overflow-hidden">
    <div class="glow" aria-hidden="true"></div>

    <div
      class="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 py-28 text-center sm:px-6"
      :class="hasPhoto && 'lg:flex-row lg:items-center lg:gap-20 lg:text-left'"
    >
      <div v-if="hasPhoto" class="fade-in fade-1 relative shrink-0 lg:order-2">
        <div class="group relative">
          <div
            class="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-accent"
            aria-hidden="true"
          ></div>

          <img
            :src="profile.photo"
            :alt="`${profile.firstName} ${profile.lastName}`"
            class="relative aspect-[4/5] w-48 rounded-3xl object-cover saturate-[.75] transition-all duration-500 group-hover:scale-[1.03] group-hover:saturate-100 sm:w-56 lg:w-72"
            @error="photoLoaded = false"
          />

          <div class="fade-in fade-6 absolute -bottom-5 -left-4">
            <div class="float-slow rounded-xl border border-border bg-surface/70 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur-md">
              <p class="text-sm font-bold text-text">{{ experienceCard.title }}</p>
              <p class="text-xs text-muted">{{ experienceCard.subtitle }}</p>
            </div>
          </div>

          <div class="fade-in fade-7 absolute -right-4 -top-4">
            <div class="float-slower flex items-center gap-2 rounded-xl border border-border bg-surface/70 px-3.5 py-2.5 shadow-lg shadow-black/30 backdrop-blur-md">
              <span class="h-2 w-2 rounded-full bg-green-400" aria-hidden="true"></span>
              <p class="text-xs font-medium text-text">{{ stackCard.title }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <p class="fade-in fade-1 text-sm font-medium uppercase tracking-widest text-muted">Hi, I'm</p>

        <h1 class="fade-in fade-2 mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span class="block text-text">{{ profile.firstName }}</span>
          <span class="block text-accent">{{ profile.lastName }}</span>
        </h1>

        <p class="fade-in fade-3 mt-6 inline-flex items-center gap-3 text-lg font-medium text-text sm:text-xl">
          <span class="h-px w-10 bg-accent" aria-hidden="true"></span>
          {{ profile.title }}
        </p>

        <p class="fade-in fade-4 mt-5 inline-flex items-center gap-1.5 text-sm text-muted">
          <BaseIcon name="pin" class="h-4 w-4" />
          {{ profile.location }}
        </p>

        <p
          class="fade-in fade-5 mx-auto mt-5 max-w-[500px] leading-relaxed text-muted"
          :class="hasPhoto && 'lg:mx-0'"
        >
          {{ profile.tagline }}
        </p>

        <div class="fade-in fade-6 mt-9 inline-flex flex-wrap items-center justify-center gap-3">
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

        <div class="fade-in fade-7 mt-8 inline-flex items-center gap-3">
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

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.float-slow {
  animation: float 5s ease-in-out infinite;
}

.float-slower {
  animation: float 6.5s ease-in-out 0.8s infinite;
}

@media (prefers-reduced-motion: reduce) {
  .float-slow,
  .float-slower {
    animation: none;
  }
}
</style>
