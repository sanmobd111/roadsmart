import { cn } from '@/lib/utils'
import React from 'react'

export default function DriverWrapper({ title, children, className }) {
    return (
        <div>
            <h1 className={cn('text-xl font-bold text-gray text-center mb-4 lg:mb-8 relative')}>{title}</h1>
            {children}
        </div>
    )
}
