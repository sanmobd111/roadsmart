import combinedClasses from '@/utils/tailwind'
import React from 'react'

export default function BackGroundColorDiv({children, className}) {
    return (
        <div className={combinedClasses('bg-secondary  flex justify-center items-center rounded-lg', className)}>
            {children}
        </div>
    )
}
