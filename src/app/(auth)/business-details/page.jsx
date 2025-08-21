"use client"

import { Info } from 'lucide-react'; // For the info icon
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Label } from '@/components/ui/label'; // Assuming Shadcn UI label is available
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn UI select is available
import Container from '@/components/shared/container/Container';
import Checkbox from '@/components/shared/check-box/Checkbox';
import { useState } from 'react';
import Link from 'next/link';
import Title from '@/components/shared/title/Title';
import TextInput from '@/components/shared/input/TextInput';
import SelectInput from '@/components/shared/input/SelectInput';
import CountrySelectInput from '@/components/shared/input/CountrySelectInput';
import PrimaryButton from '@/components/shared/buttons/PrimaryButton';

export default function App() {
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [countryRegion, setCountryRegion] = useState("");
    return (
        <Container className="">
            <div className="w-full max-w-xl space-y-8 mx-auto">
                {/* Header */}
                <div className="mb-0 pb-4 border-gray-200 w-min">
                    {/* <h1 className="text-2xl font-bold text-gray-800 mb-2">Tell us about your business</h1> */}
                    <Title text={"Tell us about your business"} className={"text-nowrap mb-4"} />
                    <p className="text-sm text-gray-secondary">Tell us about you and your business so we can verify it. Please provide information per your official documents to get verified quicker!</p>
                </div>

                <div className='p-10 rounded-lg border'>
                    <div className='lg:w-[80%]'>
                        {/* Business Information Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-800">Business information</h2>
                            <TextInput label={"Business name"} />

                            {/* Business type - Now with Checkboxes */}
                            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className='mb-2 flex gap-2'>
                                        <label className="block font-medium text-gray">Business type</label>
                                        <div className="flex-1 rounded-md text-sm text-gray-600 flex items-start space-x-2 relative">
                                            <Info size={16} className="flex-shrink-0 mt-1 text-blue-300 cursor-pointer" onClick={() => setIsInfoOpen(!isInfoOpen)} />
                                            <span className={`w-xs lg:w-md absolute top-6 -right-16 lg:left-0 bg-gray-100 p-4  rounded-lg ${isInfoOpen ? 'block' : 'hidden'}`}>
                                                Enter your full legal entity name. If you are a sole proprietor or unregistered business, enter the name you conduct business under. If you do not have a business name, enter your profession and choose "sole proprietorship" as your business type.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-2"> {/* Changed from RadioGroup */}
                                        <div className="flex items-center space-x-2">
                                            {/* <Checkbox id="sole-proprietorship" /> Changed to Checkbox */}
                                            <Checkbox id="other" />
                                            <Label htmlFor="sole-proprietorship" className="text-xs font-medium text-gray-secondary">Sole proprietorship</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="other" /> {/* Changed to Checkbox */}
                                            <Label htmlFor="other" className="text-xs font-medium text-gray-secondary">Other</Label>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Business address - Now in a single column */}
                            <h2 className="text-xl font-semibold text-gray-800">Business address</h2>
                            <p className="text-xs text-gray-secondary mb-6">Have multiple locations? Only enter the address shown on official documents.</p>
                            <div className='space-y-4'>
                                <SelectInput label={"Country or region"} name={"countryRegion"} value={countryRegion} setValue={setCountryRegion} options={[{ name: "United States", value: "usa" }, { name: "Canada", value: "canada" }, { name: "United Kingdom", value: "uk" }]} />

                                <SelectInput label={"State address"} name={"countryRegion"} value={countryRegion} setValue={setCountryRegion} options={[{ name: "United States", value: "usa" }, { name: "Canada", value: "canada" }, { name: "United Kingdom", value: "uk" }]} />

                                <TextInput label={"State or province or city "} />
                                <TextInput label={"Zip code "} />
                            </div>
                        </div>

                        {/* Contact Person Section */}
                        <div className="space-y-6 pt-6 border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800">Contact Person</h2>
                            <TextInput label={"First name"} />
                            <TextInput label={"Last name"} />
                            <SelectInput label={"Relationship to the business"} name={"countryRegion"} value={countryRegion} setValue={setCountryRegion} options={[{ name: "Owner", value: "owner" }, { name: "Manager", value: "manager" }, { name: "Employee", value: "employee" }]} />
                            <div className='grid grid-cols-2 items-center gap-3'>
                                <CountrySelectInput inputClassName={"!h-6  rounded-sm"} />
                                <TextInput />
                            </div>
                        </div>

                        <div className="flex space-x-2 mt-3">
                            <Checkbox id="receiveTexts" />
                            <Label htmlFor="receiveTexts" className="text-xs text-gray-secondary">
                                Receive texts to get updates on your account verification status. Message and data rates may apply
                            </Label>
                        </div>

                        {/* Create Business Account Button */}
                        <div className="pt-6">
                            <Link href="/business-verification">
                                {/* <Button
                                    className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200 w-full"
                                >
                                    Create Business Account
                                </Button> */}
                                <PrimaryButton btnText={"Create Business Account"} className={"lg:w-[80%]"} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
