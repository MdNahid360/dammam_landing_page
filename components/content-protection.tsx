"use client"

import { useEffect, useRef } from "react"
import { toast } from "sonner"
import { AlertCircle } from "lucide-react"

export const ContentProtection = () => {
    const toastShownRef = useRef(false)

    useEffect(() => {
        const isAdmin = localStorage.getItem("isAdmin") === "true"
        if (isAdmin) return

        const disableSelection = (e: Event) => {
            e.preventDefault()
        }

        const showToast = () => {
            if (toastShownRef.current) return

            toastShownRef.current = true

            toast.custom(() => (
                <div
                    dir="ltr"
                    className="custom-toast flex items-center gap-2 px-4 py-2 rounded-md bg-red-50 text-red-700 text-xs border border-red-500 animate-border-fire shadow-md w-fit"
                >
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Alert: You are not allowed to access this content!</span>
                </div>
            ), { duration: 2000 })

            setTimeout(() => {
                toastShownRef.current = false
            }, 3500)
        }

        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault()
            showToast()
        }

        const handleDoubleClick = (e: MouseEvent) => {
            e.preventDefault()
            showToast()
        }

        const handleCopy = (e: ClipboardEvent) => {
            e.preventDefault()
            showToast()
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase()
            if (
                (e.ctrlKey && key === "u") ||
                (e.ctrlKey && key === "i") ||
                (e.ctrlKey && e.shiftKey && ["i", "c", "j"].includes(key)) ||
                key === "f12"
            ) {
                e.preventDefault()
                showToast()
            }
        }

        document.addEventListener("contextmenu", handleContextMenu)
        document.addEventListener("dblclick", handleDoubleClick)
        document.addEventListener("copy", handleCopy)
        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("selectstart", disableSelection)

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu)
            document.removeEventListener("dblclick", handleDoubleClick)
            document.removeEventListener("copy", handleCopy)
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("selectstart", disableSelection)
        }
    }, [])

    return null
}
