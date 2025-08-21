import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Banknote } from 'lucide-react'; // For the bank icon
import Link from 'next/link';

export default function BankPaymentModalContents({ setStep }) {
    return (
        <div className="bg-white font-sans text-gray-900 p-6 flex items-start justify-center">
            <div className="w-full space-y-6 bg-white">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">Add bank account</h1>
                        <p className="text-base text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-md text-primary">
                        <Banknote size={24} /> {/* Bank icon */}
                    </div>
                </div>

                {/* Bank Account Details Form */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-700 mb-1">
                            Account holder Name
                        </label>
                        <Input
                            id="accountHolderName"
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                    <div>
                        <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1">
                            Bank name
                        </label>
                        <Input
                            id="bankName"
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                    <div>
                        <label htmlFor="bankAccountNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Bank account number
                        </label>
                        <Input
                            id="bankAccountNumber"
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                    <div>
                        <label htmlFor="branchName" className="block text-sm font-medium text-gray-700 mb-1">
                            Branch name
                        </label>
                        <Input
                            id="branchName"
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                </div>

                {/* Billing Address */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Billing Address</h2>
                    <p className="text-base text-gray-800">
                        Billy Smith<br />
                        Lorem Ipsum is simply<br />
                        dummy text of the printing<br />
                        and typesetting industry.<br />
                        United States
                    </p>
                    <button onClick={() => setStep("edit-address")} className="text-primary hover:underline text-sm mt-2">Edit address</button>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-start gap-4">
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
            </div>
        </div>
    );
}
