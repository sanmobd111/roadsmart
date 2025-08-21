"use client"

import RemoveModalContents from '@/components/modal-contents/payments/RemoveModalContents';
import Container from '@/components/shared/container/Container';
import Modal from '@/components/shared/modal/Modal';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'; // Assuming Shadcn UI dropdown menu is available
import { MoreHorizontal } from 'lucide-react'; // For the three dots icon
import { useState } from 'react';

export default function page() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const paymentMethods = [
        {
            id: 1,
            type: "card",
            logo: "https://placehold.co/40x25/FFFFFF/000000?text=VISA", // Placeholder for VISA logo
            details: "Visa....1234",
            status: "DEFAULT",
            expiry: "12/24",
        },
        {
            id: 2,
            type: "mobile",
            logo: "https://placehold.co/40x40/FF0000/FFFFFF?text=Mobile", // Placeholder for Mobile Money icon
            details: "+260 97XXXX48",
            provider: "Airtel",
        },
        {
            id: 3,
            type: "bank",
            logo: "https://placehold.co/40x40/FFFFFF/000000?text=Bank", // Placeholder for Bank icon
            details: "00000000000",
            provider: "Eastern Bank",
        },
    ];

    return (
        <Container className="min-h-screen bg-white font-sans text-gray-900 p-6 flex items-start justify-center">
            <div className="w-full space-y-6 bg-white p-8 rounded-lg shadow-sm">
                {/* Breadcrumb Navigation */}
                <nav className="text-sm text-gray-500 mb-6">
                    <a href="#" className="hover:underline">Account</a> &gt;{" "}
                    <a href="#" className="hover:underline">Payments & Payouts</a> &gt;{" "}
                    <span className="font-semibold text-gray-700">Your payment methods</span>
                </nav>

                {/* Header */}
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-800">Your Payment Methods</h1>
                    <button className="text-primary hover:text-primary text-sm font-medium">+ Add payment method</button>
                </div>

                {/* Payment methods section */}
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment methods</h2>
                <p className="text-base text-gray-600 mb-8">
                    Add a payment method using our secure payment system, then start planning your next trip.
                </p>

                {/* List of Payment Methods */}
                <div className="space-y-4 mb-8">
                    {paymentMethods.map((method, index) => (
                        <div key={method.id} className={`flex items-center justify-between py-4 ${index < paymentMethods.length - 1 ? 'border-b border-gray-200' : ''}`}>
                            <div className="flex items-center space-x-4">
                                <img src={method.logo} alt={`${method.type} logo`} className="h-8 object-contain" />
                                <div>
                                    <p className="text-base font-medium text-gray-800">
                                        {method.details}{" "}
                                        {method.status && (
                                            <span className="ml-2 text-xs font-semibold text-gray-500 border border-gray-400 px-2 py-0.5 rounded-sm">
                                                {method.status}
                                            </span>
                                        )}
                                    </p>
                                    {method.expiry && <p className="text-sm text-gray-500">Expiry: {method.expiry}</p>}
                                    {method.provider && <p className="text-sm text-gray-500">{method.provider}</p>}
                                </div>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                        <span className="sr-only">Open menu</span>
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Set Default</DropdownMenuItem>
                                    <div onClick={() => setIsModalOpen(true)}>
                                        <DropdownMenuItem className="text-primary">Remove</DropdownMenuItem>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    ))}
                </div>

                {/* Add Payment Method Button at bottom */}
                <Button
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                >
                    Add payment method
                </Button>
            </div>

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <RemoveModalContents />
            </Modal>
        </Container>
    );
}
