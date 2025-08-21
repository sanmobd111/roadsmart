import React from 'react'
import PrimaryBtn from '../ui/PrimaryBtn'
import SecondaryBtn from '../ui/SecondaryBtn'
import combinedClasses from '@/utils/tailwind'

export default function NextPrevBtn({ className }) {
    return (
        <div className={combinedClasses("flex justify-center gap-4", className)}>
            <SecondaryBtn text={"Back"} />
            <PrimaryBtn text={"Next"} />
        </div>
    )
}
