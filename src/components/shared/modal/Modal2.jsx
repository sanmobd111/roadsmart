"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import combinedClasses from "@/utils/tailwind"
import {
    X
} from "lucide-react"
import { IoCloseCircleOutline } from "react-icons/io5"

export default function Modal2({ isModalOpen, setIsModalOpen, children, title, contentContainerClassName, containerClassName, CloseIcon = IoCloseCircleOutline, closeIconContainerClassName, closeIconClassName }) {

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
                className={combinedClasses("min-w-xs md:min-w-xl max-w-5xl w-fit bg-white rounded-lg shadow-xl", containerClassName)}
            >
                {/* <CardHeader className="flex flex-row items-center justify-between pr-4">
                    {
                        title ?
                            <h3 className="text-lg font-medium text-gray-900">{title}</h3> : <div></div>
                    }
                    <div></div>
                    <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <X className="w-5 h-5 text-red-400 cursor-pointer" />
                    </button>
                </CardHeader> */}

                <CardContent className={combinedClasses(" max-h-[70vh] overflow-y-auto scrollbar-hide px-0", contentContainerClassName)}>
                    <div className="flex items-center justify-between mb-4 px-12">
                        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                        <div className={closeIconContainerClassName}>
                            <CloseIcon className={cn("w-8 h-8 text-primary cursor-pointer", closeIconClassName)} onClick={closeModal} />
                        </div>
                    </div>
                    <hr className="my-4 border-gray-200" />
                    <div className="w-full px-12">
                        {children}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

import React, { useState } from 'react';



