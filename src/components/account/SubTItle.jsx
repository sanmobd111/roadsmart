import combinedClasses from '@/utils/tailwind'
import React from 'react'

export default function SubTItle({ text, subText, subTextClassName, textClassName }) {
    return (
        <div>
            <h2 className={combinedClasses('mb-1 text-gray-500 text-xl font-semibold', textClassName)}>{text}</h2>
            <h3 className={combinedClasses('mb-4 text-gray-400', subTextClassName)}>{subText}</h3>
        </div>
    )
}
