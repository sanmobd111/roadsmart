import React from 'react'
import { Button } from './button'
import combinedClasses from '@/utils/tailwind'
import { ChevronRight } from 'lucide-react'

export default function PrimaryBtn({ className, text, disabled, onClick, hasIcon = true }) {
    return (
        <Button
            disabled={disabled}
            onClick={onClick || null}
            className={combinedClasses("bg-primary cursor-pointer !px-10 flex hover:bg-primary text-white py-4 lg:py-6 rounded-lg font-medium disabled:bg-gray-300 disabled:text-black", className)}
        // disabled={selectedForService.length === 0}
        >
            {text}
            {
                hasIcon && <ChevronRight className="w-5 h-5" />
            }
        </Button >
    )
}
