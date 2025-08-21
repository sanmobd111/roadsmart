import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Checkbox } from '@/components/ui/checkbox'; // Assuming Shadcn UI checkbox is available
import { Label } from '@/components/ui/label'; // Assuming Shadcn UI label is available
import { AlertTriangle } from 'lucide-react'; // For the warning icon

export default function UpdateMemberModalContents() {
    const orderingRoles = [
        {
            id: "buyer-requisitioner",
            label: "(Buyer) Requisitioner",
            description: "Place orders or request order approvals.",
            checked: true,
        },
    ];

    const accountManagementRoles = [
        {
            id: "admin",
            label: "Admin",
            description: "Manage people and approvals. Perform Finance and Tech roles.",
            checked: true,
        },
        {
            id: "tech",
            label: "Tech",
            description: "Set up system integrations.",
            checked: false,
        },
        {
            id: "finance",
            label: "Finance",
            description: "Access order history, Invoices, and credit notes.",
            checked: false,
        },
    ];

    return (
        <div className="bg-white font-sans text-gray-900 flex items-start justify-center">
            <div className="w-full space-y-8 bg-white">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Update role for Jimmy Smith</h2>

                {/* Warning Message */}
                <div className="bg-red-50 border-red-500 text-primary p-4 mb-8 flex items-start space-x-3 rounded-md" role="alert">
                    <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                        You are the only administrator. You first need to assign a new administrator before you can remove yourself from that role.
                    </p>
                </div>

                {/* Ordering Roles Section */}
                <div className="mb-8">
                    <h3 className="text-base font-semibold text-gray-800 mb-4">Ordering Roles</h3>
                    {orderingRoles.map((role) => (
                        <div key={role.id} className="flex items-center space-x-2 py-2">
                            <Checkbox id={role.id} checked={role.checked} className="data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                            <Label htmlFor={role.id} className="text-base font-medium text-gray-800 cursor-pointer">
                                {role.label}
                            </Label>
                            <p className="text-sm text-gray-600 ml-4">{role.description}</p>
                        </div>
                    ))}
                </div>

                {/* Account Management Roles Section */}
                <div className="mb-8">
                    <h3 className="text-base font-semibold text-gray-800 mb-4">Account Management Roles</h3>
                    {accountManagementRoles.map((role) => (
                        <div key={role.id} className="flex items-center space-x-2 py-2">
                            <Checkbox id={role.id} checked={role.checked} className="data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                            <Label htmlFor={role.id} className="text-base font-medium text-gray-800 cursor-pointer">
                                {role.label}
                            </Label>
                            <p className="text-sm text-gray-600 ml-4">{role.description}</p>
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start gap-4">
                    <Button
                        variant="outline"
                        className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    >
                        Cancel
                    </Button>
                    <Button
                        className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                    >
                        Update roles
                    </Button>
                </div>
            </div>
        </div>
    );
}
