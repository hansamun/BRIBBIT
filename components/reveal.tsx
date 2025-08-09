"use client"

import React from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  delay?: number // ms
  duration?: number // ms
  x?: number // initial translateX
  y?: number // initial translateY
  once?: boolean
}

export default function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  duration = 600,
  x = 0,
  y = 16,
  once = true,
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    // Respect user motion preferences
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  const Comp = as as any

  return (
    <Comp
      ref={ref as any}
      className={cn("will-change-[opacity,transform]", className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : `translate3d(${x}px, ${y}px, 0)`,
        transitionProperty: "opacity, transform",
        transitionTimingFunction: "cubic-bezier(0.2, 0.65, 0.3, 1)",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Comp>
  )
}
