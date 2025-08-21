import combinedClasses from '@/utils/tailwind'
import Image from 'next/image'
import React from 'react'

export default function StepIndicator({ src, className }) {
    return (
        <div className={combinedClasses("flex items-center justify-center mb-8 lg:w-[90%] mx-auto", className)}>
            <Image src={src} alt="Progress Indicator" width={500} height={500} />
        </div>
    )
}
