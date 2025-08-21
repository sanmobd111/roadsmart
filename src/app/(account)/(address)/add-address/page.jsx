import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn UI select is available
import { Checkbox } from '@/components/ui/checkbox'; // Assuming Shadcn UI checkbox is available
import Link from 'next/link';
import Container from '@/components/shared/container/Container';

export default function App() {
    return (
        <Container className="lg:!my-16">
            <div className="w-full space-y-6 bg-white">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                    Add Address
                </h1>

                <div className='lg:w-[90%] mx-auto'>
                    {/* Address Add Form */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-x-20 mb-8">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Marcos"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                            />
                        </div>
                        <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                                Country
                            </label>
                            <Select defaultValue="united-states">
                                <SelectTrigger id="country" className="w-full !h-12">
                                    <SelectValue placeholder="United State" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="united-states">United States</SelectItem>
                                    <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                                    <SelectItem value="zambia">Zambia</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">
                                Street address
                            </label>
                            <Input
                                id="streetAddress"
                                type="text"
                                placeholder=""
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                            />
                        </div>
                        <div>
                            <label htmlFor="streetAddress2" className="block text-sm font-medium text-gray-700 mb-1">
                                Street address 2
                            </label>
                            <Input
                                id="streetAddress2"
                                type="text"
                                placeholder=""
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
                                placeholder=""
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                            />
                        </div>
                        <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                                State
                            </label>
                            <Select defaultValue="">
                                <SelectTrigger id="state" className="w-full !h-12">
                                    <SelectValue placeholder="Select your state" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="west-sussex">West Sussex</SelectItem>
                                    <SelectItem value="new-york">New York</SelectItem>
                                    <SelectItem value="california">California</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                                Zip code
                            </label>
                            <Input
                                id="zipCode"
                                type="text"
                                placeholder=""
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                            />
                        </div>
                        <div>
                            <label htmlFor="countryOrRegionCode" className="block text-sm font-medium text-gray-700 mb-1">
                                Country or region
                            </label>
                            <Select defaultValue="+260">
                                <SelectTrigger id="countryOrRegionCode" className="w-full !h-12">
                                    <SelectValue placeholder="+260" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="+1">
                                        <div className="flex items-center">
                                            <img src="https://flagcdn.com/us.svg" alt="US Flag" className="w-5 h-auto mr-2" />
                                            +1
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="+44">
                                        <div className="flex items-center">
                                            <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="w-5 h-auto mr-2" />
                                            +44
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="+260">
                                        <div className="flex items-center">
                                            <img src="https://flagcdn.com/zm.svg" alt="Zambia Flag" className="w-5 h-auto mr-2" />
                                            +260
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-start gap-4 mb-4">
                        <Link href={"/shipping-addresses-by-status"}>
                            <Button
                                variant="outline"
                                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                            >
                                Save
                            </Button>
                        </Link>
                        <Link href={"/shipping-addresses-by-status"}>
                            <Button
                                className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                            >
                                Cancel
                            </Button>
                        </Link>
                    </div>

                    {/* Save as primary address checkbox */}
                    <div className="flex items-center space-x-2">
                        <Checkbox id="savePrimary" />
                        <label
                            htmlFor="savePrimary"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Save as primary address
                        </label>
                    </div>
                </div>
            </div>
        </Container>
    );
}
