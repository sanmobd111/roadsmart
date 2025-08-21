"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import combinedClasses from "@/utils/tailwind"
import {
  X
} from "lucide-react"

export default function Modal({ isModalOpen, setIsModalOpen, children, title, contentContainerClassName, containerClassName, backBtnClassName, headerClassName }) {

  const closeModal = () => {
    setIsModalOpen(false)
  }
  if (!isModalOpen) return null

  return (
    <div
      onClick={closeModal}
      className={combinedClasses("fixed inset-0 z-50 flex items-center justify-center bg-black/70")}
    >
      <Card
        onClick={(e) => e.stopPropagation()}
        className={combinedClasses("min-w-xs md:min-w-3xl max-w-5xl w-fit bg-white rounded-lg shadow-xl", containerClassName)}
      >
        <CardHeader >
          <div className={cn("flex flex-row items-center justify-between pr-4", headerClassName)}>
            {
              title ?
                <h3 className="text-2xl font-medium text-gray-900">{title}</h3> : null
            }
            <div></div>
            <button onClick={closeModal} className={cn("text-gray-400 hover:text-gray-600 transition-colors", backBtnClassName)}>
              <X className="w-5 h-5 text-red-400 cursor-pointer" />
            </button>
          </div>
        </CardHeader>

        <CardContent className={combinedClasses("px-8 max-h-[70vh] overflow-y-auto custom-scroll", contentContainerClassName)}>
          {children}
        </CardContent>
      </Card>
    </div>
  )
}
