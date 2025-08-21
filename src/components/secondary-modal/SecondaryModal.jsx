"use client"

import { X } from "lucide-react"

export default function NoPaymentModal({ isOpen = true, onClose, onAddPayment }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 relative">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-red-500 hover:text-primary transition-colors">
                    <X className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}
