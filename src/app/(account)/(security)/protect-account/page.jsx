"use client"

import Container from '@/components/shared/container/Container';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Checkbox } from '@/components/ui/checkbox'; // Assuming Shadcn UI checkbox is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn UI select is available
import Link from 'next/link';
import { useState } from 'react';

export default function page() {
    const [currentEditContent, setCurrentEditContent] = useState("");
    return (
        <Container>
            <div className="min-[60vh] bg-white font-sans text-gray-900 w-full">
                <div className="w-full max-w-3xl space-y-6 bg-white rounded-lg">
                    {/* Header */}
                    <h1 className="text-2xl font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200">
                        Help us protect your account
                    </h1>
                    <p className="text-base text-gray-600 mb-8">
                        For a higher level of protection, make sure your personal info is up to date
                    </p>

                    {/* Email Address Section */}
                    <div className="flex items-center justify-between py-4 border-b border-gray-200">
                        {
                            currentEditContent === "email-address" ? <div className="py-4 border-b border-gray-200">
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
                            </div> : <>
                                <div className="flex-1 pr-4">
                                    <h3 className="text-sm font-medium text-gray-700 mb-1">Email address</h3>
                                    <div className="flex items-center">
                                        <p className="text-base text-gray-800 mr-2">d*****y@gmail.com</p>
                                        <span className="text-red-500 text-xs font-semibold">Verified</span>
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <Button onClick={() => setCurrentEditContent("email-address")} variant="link" className="text-primary hover:text-primary p-0 h-auto">
                                        Edit
                                    </Button>
                                </div>
                            </>
                        }
                    </div>

                    {
                        currentEditContent === "phone-number" ? <div className="py-4">
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
                        </div> : <div className="flex items-center justify-between py-4 border-b border-gray-200">
                            <div className="flex-1 pr-4">
                                <h3 className="text-sm font-medium text-gray-700 mb-1">Phone number</h3>
                                <div className="flex items-center">
                                    <p className="text-base text-gray-800 mr-2">+22222222222</p>
                                    <span className="text-red-500 text-xs font-semibold">Verified</span>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <Button onClick={() => setCurrentEditContent("phone-number")} variant="link" className="text-primary hover:text-primary p-0 h-auto">
                                    Edit
                                </Button>
                            </div>
                        </div>
                    }

                    {/* Phone Number Section */}


                    {/* Action Button */}
                    <div className="flex justify-start mt-8">
                        <Link href="/signin-and-security">
                            <Button
                                className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                            >
                                Continue
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}


