// v-fade-in: reveals the element with a fade/slide when it scrolls into view.
// Optional value is a delay in milliseconds: v-fade-in="150"
export const vFadeIn = {
  mounted(el, binding) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    el.classList.add('fade-scroll')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`

    el.__fadeInObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            el.__fadeInObserver.disconnect()
          }
        }
      },
      // reveal when the element's top edge passes 90% of the viewport height,
      // so tall elements (taller than the viewport) still trigger
      { rootMargin: '0px 0px -10% 0px', threshold: 0 },
    )
    el.__fadeInObserver.observe(el)
  },

  unmounted(el) {
    el.__fadeInObserver?.disconnect()
  },
}
