import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Checkbox } from '@/components/ui/checkbox'; // Assuming Shadcn UI checkbox is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Label } from '@/components/ui/label'; // Assuming Shadcn UI label is available

export default function AddMemberModalContents() {
    const roles = [
        {
            id: "requisitioner",
            label: "(Buyer) Requisitioner",
            description: "Place orders or request order approvals.",
        },
        {
            id: "admin",
            label: "Admin",
            description: "Manage people and approvals. Perform Finance and Tech roles.",
        },
        {
            id: "tech",
            label: "Tech",
            description: "Set up system integrations.",
        },
        {
            id: "finance",
            label: "Finance",
            description: "Access order history, Invoices, and credit notes.",
        },
    ];

    return (
        <div className="bg-white font-sans text-gray-900 flex items-start justify-center">
            <div className="w-full space-y-8 bg-white">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Add People</h2>

                {/* Email Address Input */}
                <div className="mb-8">
                    <label htmlFor="emailAddress" className="block text-base font-semibold text-gray-800 mb-2">
                        Enter email address
                    </label>
                    <Input
                        id="emailAddress"
                        type="email"
                        className="w-full max-w-lg border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                </div>

                {/* Assign Roles Section */}
                <div className="mb-8">
                    <h3 className="text-base font-semibold text-gray-800 mb-4">Assign their roles</h3>
                    <div className="grid grid-cols-[auto_1fr] items-center gap-4 py-2 border-b border-gray-300 font-semibold text-gray-700">
                        <div>Role</div>
                        <div>Able to</div>
                    </div>
                    {roles.map((role) => (
                        <div key={role.id} className="grid grid-cols-[auto_1fr] items-center gap-4 py-4 border-b border-gray-200">
                            <div className="flex items-center space-x-2">
                                <Checkbox id={role.id} />
                                <Label htmlFor={role.id} className="text-base font-medium text-gray-800 cursor-pointer">
                                    {role.label}
                                </Label>
                            </div>
                            <p className="text-sm text-gray-600">{role.description}</p>
                        </div>
                    ))}
                </div>

                {/* Tip */}
                <p className="text-sm text-gray-600 mb-8">
                    <span className="font-semibold">Tip</span> You can change people and roles at any time on the People page.
                </p>

                {/* Invite People Button */}
                <Button
                    className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                >
                    Invite People
                </Button>
            </div>
        </div>
    );
}
