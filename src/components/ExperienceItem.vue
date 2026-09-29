<script setup>
import { computed, ref } from 'vue'
import BaseIcon from './BaseIcon.vue'

const props = defineProps({
  job: { type: Object, required: true },
  index: { type: Number, required: true },
})

const isCurrent = computed(() => props.job.date.includes('until now'))
const expanded = ref(false)
const visiblePoints = computed(() =>
  expanded.value ? props.job.description : props.job.description.slice(0, 3),
)
const hasMore = computed(() => props.job.description.length > 3)
</script>

<template>
  <li v-fade-in class="relative">
    <span
      class="left-4 top-6 z-10 -translate-x-1/2 rounded-full bg-accent ring-4 ring-bg absolute h-3 w-3 sm:left-1/2"
      aria-hidden="true"
    ></span>

    <article
      class="ml-12 rounded-xl border border-border bg-surface p-5 sm:ml-0 sm:w-[calc(50%-0.75rem)]"
      :class="index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'"
    >
      <h3 class="font-semibold text-text">{{ job.title }}</h3>

      <div class="mt-1 flex flex-wrap items-center gap-2">
        <p class="text-sm font-medium text-accent">{{ job.company }}</p>
        <span class="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted">
          {{ job.employmentType }}
        </span>
        <span
          v-if="isCurrent"
          class="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent"
        >
          Current
        </span>
      </div>

      <p class="mt-2 text-xs text-muted">{{ job.date }} · {{ job.duration }}</p>

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
