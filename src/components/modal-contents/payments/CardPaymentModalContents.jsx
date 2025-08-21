import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Lock } from 'lucide-react'; // For the lock icon
import Link from 'next/link';

export default function CardPaymentModalContents({ setStep }) {
    return (
        <div className="bg-white font-sans text-gray-900 p-6 flex items-start justify-center">
            <div className="w-full max-w-2xl space-y-6 bg-white">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">Add credit or debit card</h1>
                        <p className="text-base text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="https://placehold.co/40x25/FFFFFF/000000?text=VISA" alt="VISA Logo" className="h-6 object-contain" />
                        <img src="https://placehold.co/40x25/FFFFFF/000000?text=MC" alt="MasterCard Logo" className="h-6 object-contain" />
                    </div>
                </div>

                {/* Card Details Form */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label htmlFor="cardHolderName" className="block text-sm font-medium text-gray-700 mb-1">
                            Card holder name
                        </label>
                        <Input
                            id="cardHolderName"
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                    <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Credit/debit card number
                        </label>
                        <Input
                            id="cardNumber"
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                    <div>
                        <label htmlFor="expiration" className="block text-sm font-medium text-gray-700 mb-1">
                            Expiration month and year
                        </label>
                        <Input
                            id="expiration"
                            type="text"
                            placeholder="MM/YY"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                    <div>
                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                            CVC
                        </label>
                        <Input
                            id="cvc"
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                </div>

                {/* Billing Address */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Billing Address</h2>
                    <p className="text-base text-gray-800">
                        Extesy, Unit E<br />
                        Kendal House, Victoria<br />
                        Way Burgess Hill<br />
                        West Sussex RH15 9NF<br />
                        United Kingdom
                    </p>
                    <button onClick={() => setStep("edit-address")} className="text-primary hover:underline text-sm mt-2">Edit address</button>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-start gap-4 mb-4">
                    <Button
                        variant="outline"
                        className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    >
                        Back
                    </Button>
                    <Link href={"/added-methods"}>
                        <Button
                            className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                        >
                            Add
                        </Button>
                    </Link>
                </div>

                {/* Secure and Private Indicator */}
                <div className="flex items-center text-sm text-gray-600">
                    <Lock size={16} className="mr-2 text-primary" />
                    <span>Secure and Private</span>
                </div>
            </div>
        </div>
    );
}
