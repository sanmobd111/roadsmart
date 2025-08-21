import combinedClasses from '@/utils/tailwind'
import React from 'react'

export default function SideLocation({ className }) {
    return (

        <div className={combinedClasses("w-fit mx-auto", className)}>
            <h3 className="text-gray-400 text-xl">Location</h3>
            <p className="text-gray-300">15 Blue Stare Road <br />
                23 CA New York City <br />
                NY345678</p>
        </div>
    )
}
