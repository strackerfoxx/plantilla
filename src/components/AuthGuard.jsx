"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useClient } from "@/hooks/useClient"

export default function AuthGuard({ children, requireAuth = false, guestOnly = false, fallback = null }) {
  const { token, isTokenLoaded } = useClient()
  const router = useRouter()

  useEffect(() => {
    if (!isTokenLoaded) return

if (requireAuth && !token && !fallback) {
      router.replace("/")
      return
    }

    if (guestOnly && token) {
      router.replace("/")
    }
  }, [isTokenLoaded, token, requireAuth, guestOnly, router, fallback, router])

  if (!isTokenLoaded) return null
 if (requireAuth && !token) {
    if (fallback) return <>{fallback}</>
    return null
  }
  if (guestOnly && token) return null

  return <>{children}</>
}
