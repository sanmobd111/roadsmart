"use client"

import AddMemberModalContents from '@/components/modal-contents/member/AddMemberModalContents';
import UpdateMemberModalContents from '@/components/modal-contents/member/UpdateMemberModalContents';
import Container from '@/components/shared/container/Container';
import Modal from '@/components/shared/modal/Modal';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn UI select is available
import {
    Bell, // For Account Profile (representing profile/card details)
    CheckCircle, // For Privacy & Sharing
    CreditCard, // For Update roles
    Hand, // For active status
    MoreHorizontal, // For Taxes (bell icon often used for notifications/alerts)
    Share2,
    User, // For dropdown menu
    UserCog,
    Users
} from 'lucide-react'; // Using lucide-react for icons
import Link from 'next/link';
import { useState } from 'react';

export default function App() {
    const [currentSection, setCurrentSection] = useState("account-profile")
    const sidebarNavItems = [
        {
            id: "account-profile",
            icon: CreditCard, // Using CreditCard as a placeholder for Account Profile icon
            label: "Account Profile",
            active: true,
        },
        {
            id: "members",
            icon: Users,
            label: "Members",
            active: false,
        },
        {
            id: "taxes",
            icon: Bell, // Using Bell as a placeholder for Taxes icon
            label: "Taxes",
            active: false,
            path: "/taxes"
        },
        {
            id: "privacy-sharing",
            icon: Share2, // Using Share2 as a placeholder for Privacy & Sharing icon
            label: "Privacy & Sharing",
            active: false,
        },
    ];

    return (
        <Container className=" bg-white font-sans text-gray-900">
            <div className="w-full bg-white flex flex-col md:flex-row items-start">
                {/* Header (Top Bar for smaller screens, part of main layout for larger) */}
                <header className="flex justify-between items-center pb-4 border-b md:hidden border-gray-200 w-full">
                    <h1 className="text-2xl font-semibold text-gray-800">Account Settings</h1>
                    <span className="text-primary font-medium">PerySol (87)</span>
                </header>

                {/* Sidebar Navigation */}
                <aside className="w-full md:w-1/4 border-gray-200 my-6 lg:mb-6 lg:mt-0 lg:mr-8 bg-white py-6 lg:py-0 rounded-xl sticky top-20">
                    {/* Header for large screens */}
                    <h1 className="hidden md:block text-2xl font-semibold text-gray-800 mb-6">Account Settings</h1>
                    <span className="hidden md:block text-primary font-medium mb-8">PerySol (87)</span>

                    <nav className="space-y-2">
                        {sidebarNavItems.map((item) => (
                            // <Link href={item.path || "#"}>
                            <button
                                key={item.id}
                                onClick={() => setCurrentSection(item.id)}
                                className={`flex items-center p-3 rounded-md text-base font-medium transition-colors duration-200
                  ${item.id === currentSection ? 'bg-red-50 text-primary' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                <item.icon size={20} className="mr-3" />
                                {item.label}
                            </button>
                            // </Link>
                        ))}
                    </nav>
                </aside>

                {
                    currentSection === "account-profile" && <AccountProfile />
                }

                {
                    currentSection === "members" && <Members />
                }

                {
                    currentSection === "taxes" && <TaxSection />
                }
                {
                    currentSection === "privacy-sharing" && <PrivateSharing />
                }
            </div>
        </Container>
    );
}

function AccountProfile() {
    return (
        <main className="flex-1 space-y-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Information</h2>

            {/* User Name Section */}
            <div className="pb-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">User name</h3>
                <p className="text-sm text-gray-600 mb-4">Edit your user name</p>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                </label>
                <Input
                    id="username"
                    type="text"
                    placeholder="Lorem Ipsum"
                    className="w-full max-w-md border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12 mb-4"
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

            {/* Email Address Section */}
            <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Email address</h3>
                <p className="text-sm text-gray-600 mb-4">Enter your contact details</p>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                </label>
                <Input
                    id="email"
                    type="email"
                    placeholder="loremipsum@gmail.com"
                    className="w-full max-w-md border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12 mb-4"
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

            {/* Phone Number Section */}
            <div className="pb-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Phone number</h2>
                <p className="text-sm text-gray-600 mb-4">Enter your mobile number</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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

            {/* Address Section */}
            <div className="pt-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Address</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div>
                        <label htmlFor="addressCountryRegion" className="block text-sm font-medium text-gray-700 mb-1">
                            Country or region
                        </label>
                        <Select defaultValue="zambia">
                            <SelectTrigger id="addressCountryRegion" className="w-full !h-12">
                                <SelectValue placeholder="Zambia" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="zambia">Zambia</SelectItem>
                                <SelectItem value="united-states">United States</SelectItem>
                                <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div></div> {/* Empty div for spacing in 2-column grid */}
                    <div>
                        <label htmlFor="addressStreet" className="block text-sm font-medium text-gray-700 mb-1">
                            Street address
                        </label>
                        <Input
                            id="addressStreet"
                            type="text"
                            placeholder="Lorem"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                    <div>
                        <label htmlFor="addressStreet2" className="block text-sm font-medium text-gray-700 mb-1">
                            Street address (Optional)
                        </label>
                        <Input
                            id="addressStreet2"
                            type="text"
                            placeholder="Lorem"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                    <div>
                        <label htmlFor="addressCity" className="block text-sm font-medium text-gray-700 mb-1">
                            City
                        </label>
                        <Input
                            id="addressCity"
                            type="text"
                            placeholder="Lorem"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                    <div>
                        <label htmlFor="addressState" className="block text-sm font-medium text-gray-700 mb-1">
                            State/Province/Region
                        </label>
                        <Input
                            id="addressState"
                            type="text"
                            placeholder="Lorem"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                    <div>
                        <label htmlFor="addressZipCode" className="block text-sm font-medium text-gray-700 mb-1">
                            Zip code
                        </label>
                        <Input
                            id="addressZipCode"
                            type="text"
                            placeholder="Lorem"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                        />
                    </div>
                </div>
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

            {/* Preferred Language Section */}
            <div className="pb-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Preferred Language</h2>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                        <Select defaultValue="english">
                            <SelectTrigger id="language" className="w-full sm:w-[180px] !h-12">
                                <SelectValue placeholder="English" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="spanish">Spanish</SelectItem>
                                <SelectItem value="french">French</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex gap-2">
                            <Button
                                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                            >
                                Save
                            </Button>
                            <Button
                                variant="link"
                                className="px-0 py-2 text-gray-700 hover:text-gray-900 h-auto"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Preferred Currency Section */}
            <div className="pb-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Preferred Currency</h2>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                        <Select defaultValue="usd">
                            <SelectTrigger id="currency" className="w-full sm:w-[180px] !h-12">
                                <SelectValue placeholder="United States Dollar" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="usd">United States Dollar</SelectItem>
                                <SelectItem value="eur">Euro</SelectItem>
                                <SelectItem value="gbp">British Pound</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex gap-2">
                            <Button
                                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                            >
                                Save
                            </Button>
                            <Button
                                variant="link"
                                className="px-0 py-2 text-gray-700 hover:text-gray-900 h-auto"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Time Zone Section */}
            <div className="pt-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Time Zone</h2>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                        <Select defaultValue="">
                            <SelectTrigger id="timeZone" className="w-full sm:w-[180px] !h-12">
                                <SelectValue placeholder="Choose time zone" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="gmt">GMT</SelectItem>
                                <SelectItem value="est">EST</SelectItem>
                                <SelectItem value="pst">PST</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex gap-2">
                            <Button
                                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                            >
                                Edit
                            </Button>
                            <Button
                                variant="link"
                                className="px-0 py-2 text-gray-700 hover:text-gray-900 h-auto"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


const sidebarNavItems = [
    {
        id: "account-profile",
        icon: CreditCard, // Using CreditCard as a placeholder for Account Profile icon
        label: "Account Profile",
        active: false,
    },
    {
        id: "users",
        icon: Users,
        label: "Users",
        active: true, // Set as active for this design
    },
    {
        id: "taxes",
        icon: Bell, // Using Bell as a placeholder for Taxes icon
        label: "Taxes",
        active: false,
    },
    {
        id: "privacy-sharing",
        icon: Share2, // Using Share2 as a placeholder for Privacy & Sharing icon
        label: "Privacy & Sharing",
        active: false,
    },
    {
        id: "account-settings",
        icon: User,
        label: "Account Settings",
        active: false,
    },
];

const members = [
    {
        id: 1,
        name: "Jimmy Smith",
        email: "jimmy@gmail.com",
        roles: ["Owner", "Requisitioner"],
        avatar: "https://placehold.co/40x40/FF6347/FFFFFF?text=JS", // Placeholder avatar
        active: true,
    },
];
function Members() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentSection, setCurrentSection] = useState("add-member")
    return (
        <main className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Members</h2>

            {/* Members List */}
            {members.map((member, index) => (
                <div key={member.id} className={`flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 border-b ${index < members.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                        <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <p className="text-lg font-semibold text-gray-800">{member.name}</p>
                            <p className="text-sm text-gray-500">{member.email}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {member.roles.map((role, i) => (
                                    <span key={i} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                                        {role}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {member.active && (
                            <span className="flex items-center text-green-600 text-sm font-medium">
                                <CheckCircle size={16} className="mr-1" /> Active
                            </span>
                        )}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem className="flex items-center" onClick={() => {
                                    setCurrentSection("update-member")
                                    setIsModalOpen(true)
                                }}>
                                    <UserCog size={16} className="mr-2" /> Update roles
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center text-primary">
                                    <Hand size={16} className="mr-2" /> Remove from account
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            ))}

            {/* Add Member Button */}
            <div className="">
                <Button
                    onClick={() => {
                        setIsModalOpen(true)
                        setCurrentSection("add-member")
                    }}
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                >
                    Add member
                </Button>
            </div>

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} containerClassName={"w-[90%] lg:w-auto"}>
                {
                    currentSection === "add-member" && <AddMemberModalContents />
                }

                {
                    currentSection === "update-member" && <UpdateMemberModalContents />
                }
            </Modal>
        </main>
    )
}


function TaxSection() {
    return (
        <div className="w-full max-w-4xl space-y-6">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Taxes</h1>
            <p className="text-sm text-gray-600 mb-6 pb-4 border-b border-gray-200">
                Taxpayers: <a href="#" className="font-semibold text-gray-800 hover:underline">Tax documents</a>
            </p>

            {/* Tax Payer Information Section */}
            <div className="mb-8 pb-8 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Tax Payer Information</h2>
                <p className="text-base text-gray-600 mb-6">
                    Tax info is required for most countries/regions
                </p>
                <div className="flex items-center space-x-4">
                    <Link href={"/add-tax-info"}>
                        <Button
                            className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                        >
                            Add tax info
                        </Button>
                    </Link>
                    <a href="#" className="text-primary hover:underline text-base">Learn more</a>
                </div>
            </div>

            {/* Value Added Tax (VAT) Section */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Value Added Tax (VAT)</h2>
                <p className="text-base text-gray-600 mb-6">
                    If you are VAT-registered, please add your VAT ID
                </p>
                <div className="flex items-center space-x-4">
                    <Link href={"/add-vat-info"}>
                        <Button
                            className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                        >
                            Add VAT ID Number
                        </Button>
                    </Link>
                    <a href="#" className="text-primary hover:underline text-base">Learn more</a>
                </div>
            </div>
        </div>
    );
}


function PrivateSharing() {
    const [currentTab, setCurrentTab] = useState("privacy-sharing")
    return (
        <>
            {
                currentTab !== "delete-account" ? <div className="w-full max-w-2xl space-y-6 md:p-8">
                    {/* Header */}
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                        Privacy and Sharing
                    </h1>

                    {/* Delete your account section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Delete your account</h2>
                        <p className="text-base text-gray-600 mb-6">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <Button
                            onClick={() => setCurrentTab("delete-account")}
                            className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                        >
                            Delete
                        </Button>
                    </div>
                </div> : <div className="w-full max-w-3xl space-y-6 mt-6">
                    {/* Header */}
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                        Delete your account
                    </h1>

                    {/* Description */}
                    <p className="text-base text-gray-600 mb-8">
                        Submit a request to delete your personal data. To confirm you're the true owner of this account, we may
                        contact you at <a href="mailto:smithgreen@gmail.com" className="text-primary hover:underline">smithgreen@gmail.com</a>. We will only be able to proceed with your request once you follow
                        the steps set out in the email.
                    </p>

                    {/* About account deletion requests */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">About account deletion requests</h2>
                        <ul className="list-disc list-inside space-y-2 text-base text-gray-600">
                            <li>If you have a checkout (as a guest or a host) within the past 60 days, your deletion request can't be processed until the 60-day claim period has elapsed.</li>
                            <li>Once your request is processed, your personal data will be deleted (except for certain information that we are legally required or permitted to retain, as outlined in our <a href="#" className="text-primary hover:underline">Privacy Policy</a>).</li>
                            <li>If you want to use roadsmart in the future, you'll need to set up a new account.</li>
                        </ul>
                    </div>

                    {/* Select your country */}
                    <div className="mb-6">
                        <label htmlFor="countrySelect" className="block text-base font-semibold text-gray-800 mb-2">
                            Select your country
                        </label>
                        <Select defaultValue="united-states">
                            <SelectTrigger id="countrySelect" className="w-full h-12">
                                <SelectValue placeholder="United States" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="united-states">United States</SelectItem>
                                <SelectItem value="canada">Canada</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* State or province */}
                    <div className="mb-6">
                        <label htmlFor="stateProvinceSelect" className="block text-base font-semibold text-gray-800 mb-2">
                            State or province
                        </label>
                        <Select defaultValue="alaska">
                            <SelectTrigger id="stateProvinceSelect" className="w-full h-12">
                                <SelectValue placeholder="Alaska" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="alaska">Alaska</SelectItem>
                                <SelectItem value="california">California</SelectItem>
                                <SelectItem value="texas">Texas</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Why are you deleting your account? */}
                    <div className="mb-8">
                        <label htmlFor="reasonSelect" className="block text-base font-semibold text-gray-800 mb-2">
                            Why are you deleting your account?
                        </label>
                        <Select>
                            <SelectTrigger id="reasonSelect" className="w-full h-12">
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
                    <div className="flex flex-col sm:flex-row justify-start gap-4">
                        <Button
                            onClick={() => setCurrentTab("privacy-sharing")}
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
            }
        </>
    );
}


