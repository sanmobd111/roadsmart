import combinedClasses from '@/utils/tailwind'
import React from 'react'

export default function Title({ text, className }) {
    return (
        <div className={combinedClasses('text-2xl lg:text-4xl font-bold', className)} dangerouslySetInnerHTML={{ __html: text }}></div>
    )
}
