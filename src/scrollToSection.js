/**
 * Scroll so the target sits below the fixed title bar with a consistent gap.
 */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return

  const bar = document.querySelector('.titlebar')
  const barH = bar?.offsetHeight ?? 64
  const gap =
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--titlebar-scroll-gap'
      )
    ) || 28

  const elTop = el.getBoundingClientRect().top + window.scrollY
  const top = elTop - barH - gap

  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  })
}
