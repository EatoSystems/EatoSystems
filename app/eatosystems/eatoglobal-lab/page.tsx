"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function EatoGlobalLabRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the main EatoGlobal lab page
    router.replace("/eatoglobal-lab")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to EatoGlobal Lab...</p>
      </div>
    </div>
  )
}
