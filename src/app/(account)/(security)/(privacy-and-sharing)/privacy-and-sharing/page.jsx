"use client"

import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn UI select is available
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'; // Assuming Shadcn UI tabs are available
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import Container from '@/components/shared/container/Container';


export default function App() {
    const [currentSection, setCurrentSection] = useState("data")
    return (
        <Container className="min-h-screen bg-white font-sans text-gray-900 p-6 flex items-start justify-center">
            <div className="w-full space-y-6">
                {/* Breadcrumb Navigation */}
                <nav className="text-sm text-gray-500 mb-6">
                    <a href="#" className="hover:underline">Account</a> &gt;{" "}
                    <span className="font-semibold text-gray-700">Privacy & Sharing</span>
                </nav>

                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200">
                    Privacy and Sharing
                </h1>

                {/* Sub-tabs */}
                <Tabs defaultValue="data" className="w-full mb-8">
                    <TabsList className="mb-6 bg-transparent justify-start p-0">
                        <TabsTrigger
                            value="data"
                            className="px-0 py-2 text-gray-400 data-[state=active]:text-gray-600 !shadow-none"
                        >
                            Data
                        </TabsTrigger>
                        <TabsTrigger
                            value="sharing"
                            className="px-0 py-2 text-gray-400 data-[state=active]:text-gray-600 !shadow-none mx-4"
                        >
                            Sharing
                        </TabsTrigger>
                        <TabsTrigger
                            value="services"
                            className="px-0 py-2 text-gray-400 data-[state=active]:text-gray-600 !shadow-none"
                        >
                            Services
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="data" >
                        {
                            currentSection === "data" && <Data setCurrentSection={setCurrentSection} />
                        }

                        {
                            currentSection === "delete-account" && <DeleteAccount setCurrentSection={setCurrentSection} />
                        }
                    </TabsContent>

                    <TabsContent value="sharing">
                        <PrivacyAndSharing setCurrentSection={setCurrentSection} />
                    </TabsContent>

                    <TabsContent value="services">
                        <div className="text-center text-gray-500 py-10">
                            No services to display.
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </Container>
    );
}

function Data({ setCurrentSection }) {
    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className='flex-1'>
                {/* Request your personal data Section */}
                <div className="mb-8 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Request your personal data</h2>
                    <p className="text-base text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Button
                        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                    >
                        Request
                    </Button>
                </div>

                {/* Delete your account Section */}
                <div className="py-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Delete your account</h2>
                    <p className="text-base text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Button
                        onClick={() => setCurrentSection("delete-account")}
                        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                    >
                        Delete
                    </Button>
                </div>
            </div>
            {/* Sidebar Content */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-6 rounded-lg shadow-sm self-start">
                {/* Committed to privacy */}
                <div className="mb-6 pb-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Committed to privacy</h3>
                    <p className="text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                {/* Give feedback */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Give feedback</h3>
                    <p className="text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    )
}

function DeleteAccount({ setCurrentSection }) {
    return (
        <div>
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200">
                Delete your account
            </h1>

            {/* Main Content Area */}
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <p className="text-base text-gray-600 mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <p className="text-base text-gray-600 mb-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                    {/* About account deletion requests Section */}
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">About account deletion requests</h2>
                    <ul className="list-disc pl-5 space-y-2 mb-8">
                        <li className="text-base text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</li>
                        <li className="text-base text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</li>
                        <li className="text-base text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</li>
                    </ul>

                    {/* Select Country */}
                    <div className="mb-6">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                            Select your country
                        </label>
                        <Select defaultValue="united-states">
                            <SelectTrigger id="country" className="w-full max-w-md !h-12">
                                <SelectValue placeholder="United States" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="united-states">United States</SelectItem>
                                <SelectItem value="canada">Canada</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                                {/* Add more countries as needed */}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* State or Province */}
                    <div className="mb-6">
                        <label htmlFor="stateProvince" className="block text-sm font-medium text-gray-700 mb-1">
                            State or province
                        </label>
                        <Select defaultValue="alaska">
                            <SelectTrigger id="stateProvince" className="w-full max-w-md !h-12">
                                <SelectValue placeholder="Alaska" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="alaska">Alaska</SelectItem>
                                <SelectItem value="california">California</SelectItem>
                                <SelectItem value="new-york">New York</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Why are you deleting your account? */}
                    <div className="mb-8">
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                            Why are you deleting your account?
                        </label>
                        <Select defaultValue="">
                            <SelectTrigger id="reason" className="w-full max-w-md !h-12">
                                <SelectValue placeholder="Select reason (Optional)" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="reason1">Reason 1</SelectItem>
                                <SelectItem value="reason2">Reason 2</SelectItem>
                                <SelectItem value="reason3">Reason 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-start gap-4">
                        <Button
                            variant="outline"
                            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                        >
                            Back
                        </Button>
                        <Button
                            className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function PrivacyAndSharing({ setCurrentSection }) {
    return (
        <div className='flex gap-8'>
            <div className='flex-1'>
                <div className="mb-8 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Activity Sharing</h2>
                    <p className="text-base text-gray-600 mb-4">It is a long established fact that a reader will be distracted by the readable content</p>

                    {/* Read receipts */}
                    <div className="py-3">
                        <div className="flex items-center gap-4 mb-1">
                            <h3 className="text-base font-medium text-gray-800">Read receipts</h3>
                            <Switch checked={true} />
                        </div>
                        <p className="text-sm text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                    </div>

                    {/* Include my listings in search engine */}
                    <div className="py-3">
                        <div className="flex items-center gap-4 mb-1">
                            <h3 className="text-base font-medium text-gray-800">Include my listings in search engine</h3>
                            <Switch checked={true} />
                        </div>
                        <p className="text-sm text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="py-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Reviews</h2>
                    <p className="text-base text-gray-600 mb-4">It is a long established fact that a reader will be distracted by the readable content</p>

                    {/* Show my city and country */}
                    <div className="py-3">
                        <div className="flex items-center gap-4 mb-1">
                            <h3 className="text-base font-medium text-gray-800">Show my city and country</h3>
                            <Switch checked={true} />
                        </div>
                        <p className="text-sm text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                    </div>

                    {/* Show my trip type */}
                    <div className="py-3">
                        <div className="flex items-center gap-4 mb-1">
                            <h3 className="text-base font-medium text-gray-800">Show my trip type</h3>
                            <Switch checked={true} />
                        </div>
                        <p className="text-sm text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 p-6 rounded-lg shadow-sm self-start">
                {/* Committed to privacy */}
                <div className="mb-6 pb-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Committed to privacy</h3>
                    <p className="text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                {/* Give feedback */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Give feedback</h3>
                    <p className="text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    )
}
