import combinedClasses from '@/utils/tailwind'
import React from 'react'

export default function DriverStepContainer({ children, className }) {
    return (
        <div className={combinedClasses("custom-shadow p-6 lg:p-10 rounded-xl", className)}>{
            children
        }</div>
    )
}
