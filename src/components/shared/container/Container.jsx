import combinedClasses from '@/utils/tailwind'
import React from 'react'

export default function Container({ children, className }) {
    return (
        <div className={combinedClasses('max-w-[1600px] overflow-hidden mx-auto flex justify-center items-center space-y-6 md:space-y-8 xl:space-y-10 my-4 lg:my-6 p-4 md:p-6 xl:p-0 [&>div]:mx-auto', className)}>
            {children}
        </div>
    )
}
