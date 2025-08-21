import { cn } from '@/lib/utils'
import React from 'react'

export default function Path({ children, className }) {
    return (
        <p className={cn("text-[10px] md:text-xs xl:text-sm mb-2 xl:mb-4 text-center lg:text-left", className)}>{children}</p>
    )
}
