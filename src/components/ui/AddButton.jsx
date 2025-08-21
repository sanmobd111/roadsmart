"use client"
import combinedClasses from '@/utils/tailwind'
import { Button } from './button'

export default function AddButton({ handleNext, text, className }) {
  return (
      <Button
        onClick={handleNext || (() => { })}
        
        className={combinedClasses('text-[#5E5E5E] bg-white lg:text-[18px] hover:bg-transparent cursor-pointer w-full px-4 h-14 lg:px-8 lg:h-16 rounded-lg font-medium custom-shadow', className)}
      >
        {`+ ${text}`}
      </Button>
  )
}
