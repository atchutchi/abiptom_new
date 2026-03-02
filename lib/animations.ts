'use client'

import { gsap, ScrollTrigger } from './gsap'

export function initHeaderColorChange(headerEl: HTMLElement) {
  const sections = document.querySelectorAll('[data-header-color]')
  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 80px',
      end: 'bottom 80px',
      onEnter: () => {
        const color = (section as HTMLElement).dataset.headerColor
        headerEl.setAttribute('data-color', color ?? 'transparent')
      },
      onEnterBack: () => {
        const color = (section as HTMLElement).dataset.headerColor
        headerEl.setAttribute('data-color', color ?? 'transparent')
      },
    })
  })
}

export function initHeroParallax(heroEl: HTMLElement) {
  ScrollTrigger.create({
    trigger: heroEl,
    start: 'top top',
    end: '+=100%',
    pin: true,
    pinSpacing: false,
    scrub: true,
  })
}

export function initSlideInHeadings() {
  gsap.utils.toArray<HTMLElement>('.slide-in-heading').forEach((el) => {
    gsap.fromTo(
      el,
      { x: 600, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      }
    )
  })
}

export function initFadeInContent() {
  gsap.utils.toArray<HTMLElement>('[data-animation="fade-in"]').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      }
    )
  })
}

export function initWorkSectionAnimation() {
  const leftEl = document.querySelector('.text-work-container')
  const rightEl = document.querySelector('.works-grid')
  if (leftEl && rightEl) {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: leftEl, start: 'top 70%', once: true },
    })
    tl.fromTo(
      leftEl,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
    tl.fromTo(
      rightEl,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
  }
}

export function initStaggerItems() {
  gsap.utils.toArray<HTMLElement>('.stagger-container').forEach((container) => {
    const items = container.querySelectorAll('.stagger-item')
    gsap.fromTo(
      items,
      { x: 280, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 75%',
          once: true,
        },
      }
    )
  })
}

export function animateNavOpen(
  menuEl: HTMLElement,
  linksEl: NodeListOf<Element>
) {
  const tl = gsap.timeline()
  tl.to(menuEl, { x: 0, duration: 0.6, ease: 'power3.inOut' })
  tl.fromTo(
    linksEl,
    { x: 80, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out' },
    '-=0.3'
  )
  return tl
}

export function animateNavClose(menuEl: HTMLElement) {
  return gsap.to(menuEl, {
    x: '100%',
    duration: 0.5,
    ease: 'power3.inOut',
  })
}
