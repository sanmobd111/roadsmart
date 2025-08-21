import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Trash2 } from 'lucide-react'; // Using lucide-react for the trash icon

export default function App() {
    const passkeys = [
        {
            id: 1,
            name: "Windows Hello",
            addedDate: "Jun 19, 2025",
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 p-6 flex items-start justify-center">
            <div className="w-full max-w-4xl space-y-6 bg-white p-8 rounded-lg shadow-sm">
                {/* Breadcrumb Navigation */}
                <nav className="text-sm text-gray-500 mb-6">
                    <a href="#" className="hover:underline">Account</a> &gt;{" "}
                    <a href="#" className="hover:underline">Sign in and security</a> &gt;{" "}
                    <span className="font-semibold text-gray-700">Passkeys</span>
                </nav>

                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200">
                    Passkeys
                </h1>
                <p className="text-base text-gray-600 mb-8">
                    Passkeys are digital keys saved to your iCloud Keychain, Google Password Manager, or on a single device.
                </p>

                {/* On my account section */}
                <h2 className="text-xl font-semibold text-gray-800 mb-4">On my account</h2>

                {/* Passkeys List */}
                {passkeys.map((passkey, index) => (
                    <div key={passkey.id} className={`flex items-center justify-between py-4 ${index < passkeys.length - 1 ? 'border-b border-gray-200' : ''}`}>
                        <div className="flex-1 pr-4">
                            <p className="text-base text-gray-800">{passkey.name}</p>
                            <p className="text-sm text-gray-500">Added on {passkey.addedDate}</p>
                        </div>
                        <div className="flex-shrink-0">
                            <Button variant="ghost" className="text-primary p-2 h-auto">
                                <Trash2 size={20} />
                            </Button>
                        </div>
                    </div>
                ))}
                {/* Add a bottom border after the last passkey if there are any */}
                {passkeys.length > 0 && <div className="border-b border-gray-200 py-2"></div>}


                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-start gap-4 mt-8">
                    <Button
                        variant="outline"
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    >
                        Remove all passkeys
                    </Button>
                    <Button
                        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                    >
                        Add Passkey
                    </Button>
                </div>
            </div>
        </div>
    );
}
