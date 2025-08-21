import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'; // Assuming Shadcn UI radio group is available
import { Label } from '@/components/ui/label'; // Assuming Shadcn UI label is available
import { Lock } from 'lucide-react'; // For the lock icon

export default function AddPaymentMethodModalContents({ setStep }) {
    const paymentMethods = [
        {
            id: "credit-debit-card",
            value: "credit-debit-card",
            label: "Credit or debit card",
            icon: "https://placehold.co/40x25/FEE2E2/EF4444?text=VISA", // Placeholder for VISA icon
            selected: true,
        },
        {
            id: "mobile-pay",
            value: "mobile-pay",
            label: "Mobile pay",
            icon: "https://placehold.co/40x25/FEE2E2/EF4444?text=Mobile", // Placeholder for Mobile Pay icon
            selected: false,
        },
        {
            id: "google-pay",
            value: "google-pay",
            label: "Google pay",
            icon: "https://placehold.co/40x25/FEE2E2/EF4444?text=GPay", // Placeholder for Google Pay icon
            selected: false,
        },
        {
            id: "venmo",
            value: "venmo",
            label: "Venmo",
            icon: "https://placehold.co/40x25/FEE2E2/EF4444?text=Venmo", // Placeholder for Venmo icon
            selected: false,
        },
    ];

    return (
        <div className=" bg-white font-sans text-gray-900 p-6 flex items-start justify-center">
            <div className="w-full max-w-2xl space-y-6 bg-white">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Add Payment Method</h1>
                <p className="text-base text-gray-600 mb-8">
                    Check out faster when you add a payment method. Your payment details are secure and private.
                </p>

                {/* Payment Methods Options */}
                <RadioGroup defaultValue="credit-debit-card" className="space-y-4 mb-8">
                    {paymentMethods.map((method) => (
                        <div key={method.id} className="flex items-center space-x-3">
                            <RadioGroupItem value={method.value} id={method.id} className="text-primary border-primary" />
                            <Label htmlFor={method.id} className="flex items-center cursor-pointer flex-grow">
                                <img src={method.icon} alt={method.label} className="w-10 h-auto mr-3" />
                                <span className="text-base font-medium text-gray-800">{method.label}</span>
                            </Label>
                        </div>
                    ))}
                </RadioGroup>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-start gap-4 mb-4">
                    <Button
                        variant="outline"
                        className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    >
                        Back
                    </Button>
                    <Button
                        onClick={() => setStep("methods-details")}
                        className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                    >
                        Continue
                    </Button>
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
