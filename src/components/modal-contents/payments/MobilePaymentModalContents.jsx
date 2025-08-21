import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'; // Assuming Shadcn UI radio group is available
import { Label } from '@/components/ui/label'; // Assuming Shadcn UI label is available
import { Smartphone } from 'lucide-react'; // For the mobile icon
import Link from 'next/link';

export default function MobilePaymentModalContents() {
    const mobileNetworks = [
        {
            id: "airtel",
            value: "airtel",
            label: "airtel",
            logo: "https://placehold.co/40x40/FF0000/FFFFFF?text=airtel", // Placeholder for Airtel logo
        },
        {
            id: "mtn",
            value: "mtn",
            label: "MTN",
            logo: "https://placehold.co/40x40/FFD700/000000?text=MTN", // Placeholder for MTN logo
        },
        {
            id: "zamtel",
            value: "zamtel",
            label: "Zamtel",
            logo: "https://placehold.co/40x40/008000/FFFFFF?text=Zamtel", // Placeholder for Zamtel logo
        },
    ];

    return (
        <div className="bg-white font-sans text-gray-900 p-6 flex items-start justify-center">
            <div className="w-full space-y-6 bg-white">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">Add mobile payment</h1>
                        <p className="text-base text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-md text-primary">
                        <Smartphone size={24} /> {/* Mobile payment icon */}
                    </div>
                </div>

                {/* Phone Number Input */}
                <div className="mb-6">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Enter your phone number
                    </label>
                    <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder="260XXXXXXXXX"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                </div>

                {/* Select Mobile Network */}
                <div className="mb-8">
                    <h2 className="text-sm font-medium text-gray-700 mb-2">Select mobile network</h2>
                    <RadioGroup defaultValue="airtel" className="flex flex-wrap gap-4">
                        {mobileNetworks.map((network) => (
                            <div key={network.id} className="flex items-center space-x-2">
                                <RadioGroupItem value={network.value} id={network.id} className="text-primary border-primary" />
                                <Label htmlFor={network.id} className="flex items-center cursor-pointer">
                                    <img src={network.logo} alt={`${network.label} logo`} className="h-8 object-contain mr-2" />
                                    <span className="text-base font-medium text-gray-800">{network.label}</span>
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
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
                    <button className="text-primary hover:underline text-sm mt-2">Edit address</button>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-start gap-4">
                    <Button
                        variant="outline"
                        className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    >
                        Back
                    </Button>
                    <Link
                        href={"/added-methods"}
                    >
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
