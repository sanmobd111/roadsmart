import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import Container from '@/components/shared/container/Container';

export default function App() {
    const trustedDevices = [
        {
            id: 1,
            name: "Windows (Edge 130.0)",
            status: "Current device",
            trustedSince: "Nov-03-24 04:37:12 GMT",
        },
        {
            id: 2,
            name: "iOS (Safari 18.0)",
            trustedSince: "Dec-03-24 11:44:45 GMT",
        },
    ];

    return (
        <Container className="min-h-[60vh] bg-white font-sans text-gray-900 p-6 flex items-start justify-center">
            <div className="w-full space-y-6 bg-white">
                {/* Breadcrumb Navigation */}
                <nav className="text-sm text-gray-500 mb-6">
                    <a href="#" className="hover:underline">Account</a> &gt;{" "}
                    <a href="#" className="hover:underline">Sign in and security</a> &gt;{" "}
                    <span className="font-semibold text-gray-700">Devices you trust</span>
                </nav>

                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200">
                    Devices you trust
                </h1>
                <p className="text-base text-gray-600 mb-4">
                    These are the devices you've said you trust. You won't go through additional verification for them.
                </p>
                <button className="text-primary hover:text-primary text-sm mb-8">Revoke all devices</button>

                {/* Trusted Devices List - Header Row */}
                <div className="grid grid-cols-3 items-center gap-4 py-2 border-b border-gray-300 font-semibold text-gray-700">
                    <div>Device</div>
                    <div className="">Trusted since</div>
                    <div className="text-right"></div> {/* Empty for Revoke button column */}
                </div>

                {/* Trusted Devices List - Data Rows */}
                {trustedDevices.map((device, index) => (
                    <div key={device.id} className={`grid grid-cols-3 items-center gap-4 py-4 ${index < trustedDevices.length - 1 ? 'border-b border-gray-200' : ''}`}>
                        <div>
                            <p className="text-base text-gray-800">{device.name}</p>
                            {device.status && <p className="text-sm text-gray-500">{device.status}</p>}
                        </div>
                        <div className="text-base text-gray-800">{device.trustedSince}</div>
                        <div className="">
                            <p variant="link" className="text-primary hover:text-primary p-0 h-auto w-fit mx-auto block">
                                Revoke
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}
