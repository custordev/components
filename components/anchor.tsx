"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface AnchorProps {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
  absolute?: boolean
}

export default function Anchor({ href, children, className, activeClassName, absolute = false }: AnchorProps) {
  const pathname = usePathname()
  const isActive = absolute ? pathname === href : pathname.startsWith(href) && href !== "/"

  return (
    <Link href={href} className={cn(className, isActive && activeClassName)}>
      {children}
    </Link>
  )
}

