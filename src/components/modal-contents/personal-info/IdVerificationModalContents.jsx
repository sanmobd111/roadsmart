import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn UI select is available
import { Car, Book, CreditCard } from 'lucide-react'; // For car (driving license), book (passport), and credit card (ID card) icons

export default function IdVerificationModalContents({setCurrentModalContent}) {
    const idTypes = [
        { id: "driving-license", label: "Driving license", icon: Car, modal: "driver-license" },
        { id: "passport", label: "Passport", icon: Book, modal: "passport" },
        { id: "identity-card", label: "Identity card", icon: CreditCard, modal: "identity-card" },
    ];

    return (
        <div className="w-full max-w-2xl space-y-6 bg-white rounded-lg">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                Start by adding your ID
            </h1>

            {/* Description */}
            <p className="text-base text-gray-600 mb-8">
                We will use this to verify your identity and won't share it with others
            </p>

            <div className='lg:w-[40%]'>
                {/* Issuing Country */}
                <div className="mb-6">
                    <label htmlFor="issuingCountry" className="block text-sm font-medium text-gray-700 mb-1">
                        Issuing Country
                    </label>
                    <Select defaultValue="zambia">
                        <SelectTrigger id="issuingCountry" className="w-full h-12">
                            <SelectValue placeholder="Zambia" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="zambia">Zambia</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* ID Types */}
                <div className="space-y-4 mb-8">
                    {idTypes.map((type) => (
                        <button
                        onClick={()=> setCurrentModalContent(type.modal)}
                            key={type.id}
                            className="w-full flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors duration-200"
                        >
                            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                                <type.icon size={24} />
                            </div>
                            <span className="text-base font-medium text-gray-800">{type.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Continue Button */}
            <Button
                className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200 w-full"
            >
                Continue
            </Button>
        </div>
    );
}
