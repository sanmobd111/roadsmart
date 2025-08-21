import React from 'react';
import { User, ArrowRight, Plus } from 'lucide-react'; // For icons
import Container from '@/components/shared/container/Container';

export default function App() {
    const accounts = [
        {
            id: 1,
            name: "Xerox",
            email: "dainnanduba@yahoo.com",
        },
        {
            id: 2,
            name: "Remis Auto",
            email: "dainnanduba@yahoo.com",
            subtext: "Your Business Name",
        },
    ];



    return (
        <Container className="">

            <div>
                <div className="w-full max-w-md space-y-6 mx-auto p-4 border rounded-lg">
                    {/* Header */}
                    <h1 className="text-2xl font-bold text-gray-800 text-center mb-6 pb-4 border-b border-gray-200">
                        Switch Accounts
                    </h1>

                    {/* Account List */}
                    <div className="space-y-4">
                        {accounts.map((account) => (
                            <div key={account.id} className="flex items-center justify-center gap-4 p-4 border-b border-gray-200 last:border-b-0">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-gray-800">{account.name}</p>
                                        {account.subtext && <p className="text-sm text-gray-500">{account.subtext}</p>}
                                        <p className="text-sm text-gray-500">{account.email}</p>
                                    </div>
                                </div>
                                <button className="text-primary hover:text-primary">
                                    <ArrowRight size={24} />
                                </button>
                            </div>
                        ))}

                        {/* Add Account */}
                        <div className="flex items-center justify-center">
                            <div className="flex items-center space-x-4 w-[268px]">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                                    <Plus size={24} />
                                </div>
                                <p className="text-lg font-semibold text-gray-800">Add Account</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Learn More Link */}
                <div className="text-center mt-8">
                    <a href="#" className="text-sm text-gray-600 hover:underline">
                        Learn more about switching account
                    </a>
                </div>
            </div>
        </Container>
    );
}
