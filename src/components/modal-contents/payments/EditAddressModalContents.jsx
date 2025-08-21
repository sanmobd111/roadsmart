import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn UI select is available
import { Lock } from 'lucide-react'; // For the lock icon
import Link from 'next/link';

export default function EditAddressModalContents({ setStep }) {
    return (
        <div className=" bg-white font-sans text-gray-900 flex items-start justify-center">
            <div className="w-full space-y-6 bg-white">
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
                            placeholder="Lorem Ipsum"
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
                            placeholder="0000 0000 0000 0000"
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
                            placeholder="000"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                </div>

                {/* Billing Address */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Billing Address</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="countryRegion" className="block text-sm font-medium text-gray-700 mb-1">
                                Country or region
                            </label>
                            <Select defaultValue="united-kingdom">
                                <SelectTrigger id="countryRegion" className="w-full h-12">
                                    <SelectValue placeholder="Select a country or region" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                                    <SelectItem value="usa">United States</SelectItem>
                                    <SelectItem value="canada">Canada</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                                ZIP Code
                            </label>
                            <Input
                                id="zipCode"
                                type="text"
                                placeholder="RH15 9NF"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                            />
                        </div>
                        <div>
                            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">
                                Street address
                            </label>
                            <Input
                                id="streetAddress"
                                type="text"
                                placeholder="Extesy, Unit E"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                            />
                        </div>
                        <div>
                            <label htmlFor="streetAddress2" className="block text-sm font-medium text-gray-700 mb-1">
                                Street 2 (optional)
                            </label>
                            <Input
                                id="streetAddress2"
                                type="text"
                                placeholder="Kendal House, Victoria Way"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                                City
                            </label>
                            <Input
                                id="city"
                                type="text"
                                placeholder="Burgess Hill"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                            />
                        </div>
                        <div>
                            <label htmlFor="stateProvince" className="block text-sm font-medium text-gray-700 mb-1">
                                State/Province
                            </label>
                            <Input
                                id="stateProvince"
                                type="text"
                                placeholder="West Sussex"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                            />
                        </div>
                    </div>
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

                {/* Secure and Private Indicator */}
                <div className="flex items-center text-sm text-gray-600 mt-4">
                    <Lock size={16} className="mr-2 text-gray-500" />
                    <span>Secure and Private</span>
                </div>
            </div>
        </div>
    );
}
