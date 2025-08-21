import { Button } from '@/components/ui/button'
import combinedClasses from '@/utils/tailwind'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export default function PrimaryButton({ onClick, btnText, className, hasIcon = false }) {
    return (
        <Button
            onClick={onClick || null}
            // type="submit"
            className={combinedClasses("w-full bg-primary hover:bg-primary text-white py-[22px] rounded-lg font-bold cursor-pointer", className)}
        >
            <span>{btnText}</span>
            {
                hasIcon && <IoIosArrowForward className="ml-2" />
            }
        </Button>
    )
}
