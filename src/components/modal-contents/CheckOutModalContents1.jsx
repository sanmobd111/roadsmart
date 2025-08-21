"use client"

import { useState } from "react"
import { X, CreditCard, Smartphone, Building2 } from "lucide-react"

export default function PaymentMethodModal({ isOpen = true, onClose, onSelectPayment }) {
    const [selectedMethod, setSelectedMethod] = useState("visa1")

    const paymentMethods = [
        {
            id: "visa1",
            type: "visa",
            label: "Visa.....1234",
            details: "Expiry: 12/24",
            icon: "VISA",
            selected: true,
        },
        {
            id: "visa2",
            type: "visa",
            label: "Visa.....1234",
            details: "Expiry: 12/24",
            icon: "VISA",
        },
        {
            id: "paypal",
            type: "paypal",
            label: "Lorem Ipsum",
            details: "lorem.lpsum@gmail.com",
            icon: "PayPal",
        },
        {
            id: "googlepay",
            type: "googlepay",
            label: "Lorem Ipsum",
            details: "lorem.lpsum@gmail.com",
            icon: "G Pay",
        },
        {
            id: "debit",
            type: "debit",
            label: "Debit Card",
            details: "Davy Nanduba\n22222222.......44445555\nExpiry: 12/24",
            icon: "card",
        },
        {
            id: "credit",
            type: "credit",
            label: "Credit Card",
            details: "Davy Nanduba\n22222222.......44445555\nExpiry: 12/24",
            icon: "card",
        },
        {
            id: "bank",
            type: "bank",
            label: "Bank Account",
            details: "Davy Nanduba\n000000000000\nEastern Bank",
            icon: "bank",
        },
        {
            id: "mobile",
            type: "mobile",
            label: "Mobile Pay",
            details: "Davy Nanduba\n+222222222222\nAirtel",
            icon: "mobile",
        },
    ]

    const getIcon = (type, iconText) => {
        if (type === "visa") {
            return <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold">VISA</div>
        }
        if (type === "paypal") {
            return <div className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-bold">PayPal</div>
        }
        if (type === "googlepay") {
            return <div className="bg-gray-600 text-white px-2 py-1 rounded text-sm font-bold">G Pay</div>
        }
        if (type === "debit" || type === "credit") {
            return <CreditCard className="w-8 h-8 text-red-500" />
        }
        if (type === "bank") {
            return <Building2 className="w-8 h-8 text-red-500" />
        }
        if (type === "mobile") {
            return <Smartphone className="w-8 h-8 text-red-500" />
        }
        return <CreditCard className="w-8 h-8 text-gray-500" />
    }

    if (!isOpen) return null

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {paymentMethods.map((method) => (
                <div
                    key={method.id}
                    className="flex items-start gap-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => setSelectedMethod(method.id)}
                >
                    <input
                        type="radio"
                        name="paymentMethod"
                        checked={selectedMethod === method.id}
                        onChange={() => setSelectedMethod(method.id)}
                        className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500 mt-1 accent-red-500"
                    />

                    <div className="flex items-start gap-3 flex-1">
                        <div className="flex-shrink-0">{getIcon(method.type, method.icon)}</div>

                        <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-800 mb-1">{method.label}</div>
                            <div className="text-sm text-gray-600 whitespace-pre-line">{method.details}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
