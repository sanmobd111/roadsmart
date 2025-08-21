import combinedClasses from '@/utils/tailwind'
import React from 'react'

export default function Title({ text, className }) {
  return (
    <h1 className={combinedClasses('text-xl lg:text-3xl font-bold text-gray-black', className)} dangerouslySetInnerHTML={{ __html: text }} />
  )
}
