<script setup>
import { computed, reactive, ref } from 'vue'
import BaseIcon from './BaseIcon.vue'

const props = defineProps({
  job: { type: Object, required: true },
  index: { type: Number, required: true },
})

const failedLogos = reactive({})

const initials = (company) =>
  company
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

const isCurrent = computed(() => props.job.date.includes('until now'))
const expanded = ref(false)
const visiblePoints = computed(() =>
  expanded.value ? props.job.description : props.job.description.slice(0, 3),
)
const hasMore = computed(() => props.job.description.length > 3)
</script>

<template>
  <li v-fade-in="Math.min(index, 2) * 150" class="relative">
    <span
      class="left-4 top-6 z-10 -translate-x-1/2 rounded-full bg-accent ring-4 ring-bg absolute h-3 w-3 sm:left-1/2"
      aria-hidden="true"
    ></span>

    <article
      class="ml-12 rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_30px_rgba(45,212,191,0.15)] sm:ml-0 sm:w-[calc(50%-0.75rem)]"
      :class="index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'"
    >
      <div class="flex items-start gap-4">
        <div
          v-if="job.logo && !failedLogos[index]"
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5"
          :style="job.logoBg && { backgroundColor: job.logoBg }"
        >
          <img
            :src="job.logo"
            :alt="`${job.company} logo`"
            class="h-full w-full object-contain"
            @error="failedLogos[index] = true"
          />
        </div>
        <div
          v-else
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-sm font-bold text-accent"
        >
          {{ initials(job.company) }}
        </div>

        <div class="min-w-0 flex-1">
          <h3 class="font-bold text-text">{{ job.title }}</h3>
          <p class="mt-0.5 text-sm font-medium text-accent">{{ job.company }}</p>
          <div class="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span class="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted">
              {{ job.employmentType }}
            </span>
            <span
              v-if="isCurrent"
              class="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent"
            >
              Current
            </span>
            <span class="text-xs text-muted">{{ job.date }} · {{ job.duration }}</span>
          </div>
        </div>
      </div>

      <ul class="mt-4 space-y-2">
        <li
          v-for="(point, i) in visiblePoints"
          :key="i"
          class="flex gap-2.5 text-sm leading-relaxed text-muted"
        >
          <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70"></span>
          <span>{{ point }}</span>
        </li>
      </ul>

      <button
        v-if="hasMore"
        class="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-text"
        :aria-expanded="expanded"
        @click="expanded = !expanded"
      >
        {{ expanded ? 'Show less' : 'Show more' }}
        <BaseIcon
          name="chevron"
          class="h-4 w-4 transition-transform"
          :class="expanded && 'rotate-180'"
        />
      </button>
    </article>
  </li>
</template>
