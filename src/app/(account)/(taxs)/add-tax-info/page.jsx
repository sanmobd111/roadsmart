"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'; // Assuming Shadcn UI tabs are available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn UI select is available
import Container from '@/components/shared/container/Container';
import Modal from '@/components/shared/modal/Modal';
import TaxPopUpContents from '@/components/modal-contents/tax/TaxPopUpContents';

const taxYears = [
    { year: 2023, status: "No tax document issued" },
    { year: 2022, status: "No tax document issued" },
    { year: 2021, status: "No tax document issued" },
];

export default function App() {
    const [currentSection, setCurrentSection] = useState("tax-info")
    const [openModal, setOpenModal] = useState(false)
    return (
        <Container className="">
            <div className="w-full space-y-6">
                {/* Breadcrumb Navigation */}
                <nav className="text-sm text-gray-500 mb-6">
                    <a href="#" className="hover:underline">Account</a> &gt;{" "}
                    <span className="font-semibold text-gray-700">Taxes</span>
                </nav>

                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200">
                    Taxes
                </h1>

                {/* Sub-tabs */}
                <Tabs defaultValue="taxpayers" className="w-full mb-8">
                    <TabsList className="mb-6 bg-transparent justify-start p-0">
                        <TabsTrigger
                            value="taxpayers"
                            className="px-0 py-2 text-gray-400 data-[state=active]:text-gray-600 !shadow-none mr-4"
                        >
                            Taxpayers
                        </TabsTrigger>
                        <TabsTrigger
                            value="tax-documents"
                            className="px-0 py-2 text-gray-400 data-[state=active]:text-gray-600 !shadow-none"
                        >
                            Tax documents
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="taxpayers">
                        {
                            currentSection === "tax-info" && <TaxInfo setCurrentSection={setCurrentSection} />
                        }
                        {
                            currentSection === "vat-info" && <VatInfo setOpenModal={setOpenModal} />
                        }
                    </TabsContent>

                    <TabsContent value="tax-documents">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {taxYears.map((yearData) => (
                                <div key={yearData.year} className="border border-gray-200 rounded-lg p-6 flex flex-col items-start">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{yearData.year}</h2>
                                    <p className="text-base text-gray-600">{yearData.status}</p>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            <Modal isModalOpen={openModal} setIsModalOpen={setOpenModal}>
                <TaxPopUpContents />
            </Modal>
        </Container>
    );
}


function TaxInfo({ setCurrentSection }) {
    return (
        < div className="py-4" >
            <h2 className="text-xl font-bold text-gray-800 mb-2">Add Tax Information</h2>
            <p className="text-base text-gray-600 mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            {/* Select Country */}
            <div className="mb-6">
                <label htmlFor="country" className="block text-base font-semibold text-gray-800 mb-2">
                    Select your country
                </label>
                <Select defaultValue="united-states">
                    <SelectTrigger id="country" className="w-full max-w-sm h-12">
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

            {/* Tax Payer Number */}
            <div className="mb-8">
                <label htmlFor="taxPayerNumber" className="block text-base font-semibold text-gray-800 mb-2">
                    Tax Payer Number
                </label>
                <Input
                    id="taxPayerNumber"
                    type="text"
                    className="w-full max-w-sm border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-start gap-4">
                <Button
                    variant="outline"
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => setCurrentSection("vat-info")}
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                >
                    Continue
                </Button>
            </div>
        </div >
    )
}

function VatInfo({ setOpenModal }) {
    return (
        <div className="py-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Add VAT ID Number</h2>
            <p className="text-base text-gray-600 mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* Select Country or Region */}
                <div>
                    <label htmlFor="countryOrRegion" className="block text-sm font-medium text-gray-700 mb-1">
                        Select your country or region
                    </label>
                    <Select defaultValue="united-states">
                        <SelectTrigger id="countryOrRegion" className="w-full !h-12">
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
                {/* Add VAT ID Number */}
                <div>
                    <label htmlFor="vatIdNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Add VAT ID Number
                    </label>
                    <Input
                        id="vatIdNumber"
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                </div>
                {/* Name on registration */}
                <div>
                    <label htmlFor="nameOnRegistration" className="block text-sm font-medium text-gray-700 mb-1">
                        Name on registration
                    </label>
                    <Input
                        id="nameOnRegistration"
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                </div>
                {/* Address Line 1 */}
                <div>
                    <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700 mb-1">
                        Address Line 1
                    </label>
                    <Input
                        id="addressLine1"
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                </div>
                {/* Address Line 2 (Optional) */}
                <div>
                    <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700 mb-1">
                        Address Line 2 (Optional)
                    </label>
                    <Input
                        id="addressLine2"
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                </div>
                {/* City */}
                <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                    </label>
                    <Input
                        id="city"
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                </div>
                {/* Province or Region */}
                <div>
                    <label htmlFor="provinceOrRegion" className="block text-sm font-medium text-gray-700 mb-1">
                        Province or Region
                    </label>
                    <Input
                        id="provinceOrRegion"
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                </div>
                {/* ZIP Code */}
                <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                    </label>
                    <Input
                        id="zipCode"
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-start gap-4">
                <Button
                    variant="outline"
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => setOpenModal(true)}
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                >
                    Add
                </Button>
            </div>
        </div>
    )
}