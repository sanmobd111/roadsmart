import combinedClasses from '@/utils/tailwind'
import React from 'react'

export default function SectionHeading({ text, className }) {
    return (
        <h1 className={combinedClasses("text-xl text-[#343434] font-semibold", className)}>{text}</h1>
    )
}
