import React from 'react'
import SectionHeading from './SectionHeading'

export default function SectionHeadingWithBottomBorder({ text }) {
    return (
        <SectionHeading className="border-b border-gray-400 mb-6 pb-2" text={text} />
    )
}
