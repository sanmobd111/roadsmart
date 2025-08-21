import combinedClasses from '@/utils/tailwind'
import React from 'react'

export default function Container({ className, children }) {
    return (
        <div className={combinedClasses('max-w-[1600px] mx-auto space-y-10 md:space-y-16 lg:space-y-20 my-10 md:my-16 lg:my-20 flex justify-center items-center p-4 md:p-6 lg:p-0', className)}>
            {children}
        </div>
    )
}
