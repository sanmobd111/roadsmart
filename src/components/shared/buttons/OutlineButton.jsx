import { Button } from '@/components/ui/button'
import React from 'react'

export default function OutlineButton({ onClick, btnText }) {
    return (
        <Button
            onClick={onClick}
            // type="submit"
            className="w-full bg-white hover:bg-white text-gray border border-gray-tertiary py-[22px] rounded-lg font-medium cursor-pointer"
        >
            {btnText}
        </Button>
    )
}
