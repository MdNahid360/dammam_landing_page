"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // When the pathname changes, scroll to top
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    // Enable browser's built-in scroll restoration for back/forward navigation
    if (typeof window !== "undefined" && "scrollRestoration" in history) {
      // Auto is the default and will restore scroll position on back/forward
      history.scrollRestoration = "auto"
    }
  }, [])

  return null
}
