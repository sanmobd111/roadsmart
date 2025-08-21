import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function StatusHeader({ Icon, title, subText, hasBtn, path, btnText, btnClick }) {
    return (
        <div className="space-y-4">
            <div className="bg-transparent border border-primary rounded-lg p-4 flex flex-col lg:flex-row items-center gap-4 transition-colors cursor-pointer my-4">
                {/* Green checkmark icon */}
                <div className="bg-secondary rounded-2xl p-3 flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary stroke-2" />
                </div>

                <div className="flex flex-col lg:flex-row gap-4 items-center justify-between flex-1 text-center md:text-left">
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                        <p className="text-sm text-gray-600">
                            {subText}
                        </p>
                    </div>
                    {
                        hasBtn && <Link href={path ? path : "#"} onClick={btnClick}>
                            <Button className="min-w-[200px] w-full bg-primary hover:bg-primary text-white text-sm px-8 py-2.5">{btnText}</Button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}
