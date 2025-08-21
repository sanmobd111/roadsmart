import combinedClasses from '@/utils/tailwind'
import React from 'react'

export default function ModalTitle({ title, className }) {
  return (
    <h3 className={combinedClasses("text-2xl font-bold text-gray-900 pb-4 mb-4 border-b", className)}>{title}</h3>
  )
}
