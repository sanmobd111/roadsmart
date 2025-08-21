import React from 'react'
import { Button } from './button'
import combinedClasses from '@/utils/tailwind'
import { ChevronRight } from 'lucide-react'

export default function SecondaryBtn({ className, text, disabled }) {
    return (
        <Button
            disabled={disabled}
            className={combinedClasses("bg-white hover:text-black hover:bg-transparent border cursor-pointer border-gray-400 text-black py-4 lg:py-6 rounded-lg font-medium disabled:bg-gray-300 disabled:text-black !px-10", className)}
        >
            <ChevronRight className="w-5 h-5 rotate-180" />
            {text}
        </Button >
    )
}
