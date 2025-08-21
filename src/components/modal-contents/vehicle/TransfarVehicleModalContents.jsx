import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Checkbox } from '@/components/ui/checkbox'; // Assuming Shadcn UI checkbox is available
import { Label } from '@/components/ui/label'; // Assuming Shadcn UI label is available

export default function TransferVehicleModalContents({ setCurrentModal }) {
    return (
        <div className="">
            <div className="w-full space-y-6">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                    Transfer Vehicle
                </h1>

                {/* Warning Section */}
                <div className="mb-8">
                    <h2 className="text-base font-semibold text-primary mb-2">Warning</h2>
                    <p className="text-sm text-gray-600">
                        Transferring the vehicle Toyota Corolla will remove this vehicle from your account and transfer all remaining
                        subscription(s) to a new username/email. Your vehicle's profile image, vehicle details, activity logs, alert logs,
                        and billing information will be deleted.
                    </p>
                </div>

                {/* Email Address Input */}
                <div className="mb-6">
                    <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">
                        Enter email address
                    </label>
                    <Input
                        id="emailAddress"
                        type="email"
                        placeholder="inonj@gmail.com"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                </div>

                {/* Confirmation Checkbox */}
                <div className="flex items-center space-x-2 mb-8">
                    <Checkbox id="confirmTransfer" checked={true} className="data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                    <Label
                        htmlFor="confirmTransfer"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        I confirm that I want to transfer the vehicle
                    </Label>
                </div>

                {/* Transfer Button */}
                <Button
                    onClick={() => {
                        setCurrentModal("transfer-request")
                    }}
                    className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                >
                    Transfer
                </Button>
            </div>
        </div>
    );
}
