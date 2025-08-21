
export default function page() {
    return (
        <Container>
            <EditFirstName />
            {/* Full Name Edit Section */}
            <div className="text-gray-900 flex justify-between border-b pb-8">
                <h2 className="text-lg text-gray-600 mb-6 w-[30%]">Contact Info</h2>

                <div className='w-[50%] mr-auto space-y-12'>
                    <EditEmail />
                    <EditPhoneNumber />
                    <EditAddress />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 text-gray'>
                <p className='text-lg text-gray-600'>Identity verification </p>
                <p className='text-sm'>Not started </p>
                <p className='text-sm'>Start</p>
            </div>
        </Container>
    )
}

import Container from '@/components/shared/container/Container';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function EditFirstName() {
    return (
        <div className="border-b pb-8">
            {/* Full Name Edit Section */}
            <div className="flex justify-between">
                <h2 className="text-xl text-gray-600 font-semibold mb-6 w-[30%]">Full name</h2>

                <div className='w-[50%] mr-auto'>
                    <div className="mb-6">
                        <p className="font-medium mb-1 text-sm text-gray">Your name</p>
                        <p className="text-lg text-gray-500 mb-4">Enter your name as it appears on your ID</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-xs text-gray font-medium mb-1">
                                    First name on ID
                                </label>
                                <Input
                                    id="firstName"
                                    type="text"
                                    placeholder="Lorem Ipsum"
                                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12" // Added h-12
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-xs text-gray font-medium mb-1">
                                    Last name on ID
                                </label>
                                <Input
                                    id="lastName"
                                    type="text"
                                    placeholder="Lorem Ipsum"
                                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12" // Added h-12
                                />
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-start gap-4 mt-8">
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
    );
}

function EditEmail() {
    return (
        <div className="border-b pb-8">
            <div className="text-gray-900">
                <h2 className="text-lg text-gray mb-6">Email address</h2>

                <div className="mb-6">
                    <label htmlFor="emailAddress" className="block text-sm font-medium text-gray mb-1">
                        Email address
                    </label>
                    <Input
                        id="emailAddress"
                        type="email"
                        placeholder="loremipsum@gmail.com"
                        className="border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12 w-[40%]"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start gap-4 mt-8">
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
        </div>)
}

function EditPhoneNumber() {
    return (
        <div className="border-b pb-8">
            <h2 className="text-lg text-gray mb-6">Phone number</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                    <label htmlFor="phoneType" className="block text-sm font-medium text-gray mb-1">
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
                    <label htmlFor="countryRegion" className="block text-sm font-medium text-gray mb-1">
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
                    <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray mb-1">
                        Mobile
                    </label>
                    <Input
                        id="mobileNumber"
                        type="tel" // Use type="tel" for phone numbers
                        placeholder="22222222"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 !h-12"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-2 mb-8">
                <label
                    htmlFor="primaryNumber"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray"
                >
                    This is your primary number
                </label>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-start gap-4 mt-8">
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
    )
}

function EditAddress() {
    return (
        <div className="text-gray">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg">Residential address</h2>
                <button className=" text-sm">Add</button>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                    <label htmlFor="countryRegion" className="block text-sm font-medium mb-1">
                        Country or region
                    </label>
                    <Select>
                        <SelectTrigger id="countryRegion" className="w-full !h-12">
                            <SelectValue placeholder="Select a country or region" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            {/* Add more countries as needed */}
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label htmlFor="streetAddress" className="block text-sm font-medium mb-1">
                        Street address
                    </label>
                    <Input
                        id="streetAddress"
                        type="text"
                        placeholder="Lorem Ipsum"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                </div>

                <div>
                    <label htmlFor="aptSuite" className="block text-sm font-medium mb-1">
                        Apt, suite (optional)
                    </label>
                    <Input
                        id="aptSuite"
                        type="text"
                        placeholder="Lorem Ipsum"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium mb-1">
                            City
                        </label>
                        <Input
                            id="city"
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                    <div>
                        <label htmlFor="stateProvince" className="block text-sm font-medium mb-1">
                            State or Province or Region
                        </label>
                        <Input
                            id="stateProvince"
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium mb-1">
                        ZIP code
                    </label>
                    <Input
                        id="zipCode"
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-start gap-4 mt-8">
                <Button
                    variant="outline"
                    className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200"
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
    )
}

