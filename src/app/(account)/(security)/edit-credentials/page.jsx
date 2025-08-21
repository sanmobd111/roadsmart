import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn UI select is available
import { Checkbox } from '@/components/ui/checkbox'; // Assuming Shadcn UI checkbox is available
import Container from '@/components/shared/container/Container';

export default function App() {
    return (
        <Container className="min-h-screen bg-white font-sans text-gray-900 p-6 flex items-start justify-center">
            <div className="w-full space-y-6 bg-white p-8 rounded-lg">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200">
                    Help us protect your account
                </h1>
                <p className="text-base text-gray-600 mb-8">
                    For a higher level of protection, make sure your personal info is up to date
                </p>

                <div className=' max-w-3xl '>
                    {/* Email Address Edit Section */}
                    <div className="py-4 border-b border-gray-200">
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Email address</h3>
                        <Input
                            id="emailAddress"
                            type="email"
                            placeholder="loremipsum@gmail.com"
                            className="w-xs border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12 mb-4"
                        />
                        <div className="flex justify-start gap-4">
                            <Button
                                variant="outline"
                                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                            >
                                Cancel
                            </Button>
                            <Button
                                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                            >
                                Save
                            </Button>
                        </div>
                    </div>

                    {/* Phone Number Edit Section */}
                    <div className="py-4">
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Phone number</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                                <label htmlFor="phoneType" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone type
                                </label>
                                <Select>
                                    <SelectTrigger id="phoneType" className="w-full !h-12">
                                        <SelectValue placeholder="Mobile" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="mobile">Mobile</SelectItem>
                                        <SelectItem value="home">Home</SelectItem>
                                        <SelectItem value="work">Work</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label htmlFor="countryRegion" className="block text-sm font-medium text-gray-700 mb-1">
                                    Country or region
                                </label>
                                <Select defaultValue="+260">
                                    <SelectTrigger id="countryRegion" className="w-full !h-12">
                                        <SelectValue placeholder="+260" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {/* Example country codes with flags - you'd expand this */}
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

                            <div>
                                <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                    Mobile
                                </label>
                                <Input
                                    id="mobileNumber"
                                    type="tel" // Use type="tel" for phone numbers
                                    placeholder="22222222"
                                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                                />
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 mb-8">
                            <Checkbox id="primaryNumber" />
                            <label
                                htmlFor="primaryNumber"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                This is your primary number
                            </label>
                        </div>

                        {/* Action Buttons for Phone Number */}
                        <div className="flex justify-start gap-4">
                            <Button
                                variant="outline"
                                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                            >
                                Cancel
                            </Button>
                            <Button
                                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
