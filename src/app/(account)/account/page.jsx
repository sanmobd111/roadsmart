import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'; // Assuming Shadcn UI tabs are available
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Assuming Shadcn UI card is available
import {
    User,
    Lock,
    CreditCard,
    ShoppingCart,
    FileText,
    Shield,
    Car,
    Mail,
    Home,
    Bell,
    Settings,
} from 'lucide-react'; // Using lucide-react for icons
import Container from '@/components/shared/container/Container';
import Link from 'next/link';

const AccountCard = ({ icon: Icon, title, description }) => (
    <div className="justify-between items-center flex flex-row p-4 text-left border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ">
        <div className="flex items-center justify-center w-[20%] aspect-square bg-red-100 rounded-sm text-primary">
            <Icon size={24} />
        </div>
        {/* </CardHeader> */}
        <div className="w-[75%]">
            <p className="text-lg font-semibold text-gray-800 mb-1">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    </div>
);

export default function MyAccount() {
    const accountFeatures = [
        {
            icon: User,
            title: "Personal Info",
            description: "provide personal details so that we can customize your experience",
            path: "/personal-info"
        },
        {
            icon: Lock,
            title: "Login & Security",
            description: "Update your password and secure your account",
            path: "/signin-and-security",
        },
        {
            icon: CreditCard,
            title: "Your Payments",
            description: "Manage pay,ent methods and settings",
            path: "/payment"
        },
        {
            icon: ShoppingCart,
            title: "Your Orders",
            description: "Track, return, or buy things again",
        },
        {
            icon: FileText,
            title: "Your Requests",
            description: "Track requests for services",
        },
        {
            icon: Shield,
            title: "Your Insurance",
            description: "Manage your insurance policies. Submit and track claims",
        },
        {
            icon: Car,
            title: "Your Vehicles",
            description: "Manage your vehicles, track compliance",
            path: "/vehicle-list",
        },
        {
            icon: Mail,
            title: "Messages",
            description: "View your messages",
        },
        {
            icon: Home,
            title: "Your Addresses",
            description: "Add, edit or remove addresses",
        },
        {
            icon: Bell,
            title: "Notifications",
            description: "Choose notification preferences and how you want to be contacted",
            path: "/notifications"
        },
        {
            icon: Settings,
            title: "Account Settings",
            description: "Set your default language, currency and time-zone",
            path: "/account-settings"
        },
    ];

    return (
        <Container className="my-6 lg:my-14 font-sans text-gray-900">
            <div>
                {/* Header */}
                <header className="flex items-center justify-between pb-6 bg-white border-b border-gray-200 w-full">
                    <h1 className="text-2xl font-semibold text-gray-800">My Account</h1>
                    <Link href={"/view-account"} className="text-primary font-medium">PerySol (87)</Link>
                </header>

                <div className="">
                    {/* Tabs */}
                    <Tabs defaultValue="account" className="w-full">
                        <TabsList className="mb-6 bg-transparent">
                            <TabsTrigger value="messages" className="text-gray-600 data-[state=active]:text-primary data-[state=active]:bg-white rounded-none !shadow-none">
                                Messages
                            </TabsTrigger>
                            <TabsTrigger value="account" className="text-gray-600 data-[state=active]:text-primary data-[state=active]:bg-white rounded-none !shadow-none">
                                Account
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="account">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {accountFeatures.map((feature, index) => (
                                    <Link key={index} href={feature.path || "#"} className='block'>
                                        <AccountCard
                                            key={index}
                                            icon={feature.icon}
                                            title={feature.title}
                                            description={feature.description}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="messages">
                            <div className="text-center text-gray-500 py-10">
                                No messages to display.
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </Container>
    );
}
