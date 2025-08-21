import { cn } from '@/lib/utils'
import React from 'react'

export default function StepHeading({text, className}) {
    return (
        <h3 className={cn("text-sm md:text-base lg:text-lg font-semibold text-gray", className)}>
            {text}
        </h3>
    )
}
