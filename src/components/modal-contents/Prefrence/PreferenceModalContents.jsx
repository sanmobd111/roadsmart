import { Switch } from '@/components/ui/switch'; // Assuming Shadcn UI switch is available
import { Pencil } from 'lucide-react'; // For the edit icon

export default function PreferenceModalContents({ setCurrentModal }) {
    const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const years = Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - i).toString());

    return (
        <div className="">
            <div className="w-full max-w-2xl space-y-6">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                    Preferences
                </h1>

                {/* Currency Section */}
                <div className="mb-8 py-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800 mb-1">Currency</h2>
                            <p className="text-base text-gray-600">USD</p>
                        </div>
                        <Pencil size={20} className="text-primary cursor-pointer" onClick={() => setCurrentModal("edit-currency")} />
                    </div>
                </div>

                {/* Notifications Section */}
                <div className="mb-8 py-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
                        <Switch checked={true} />
                    </div>
                    <p className="text-base text-gray-600 mb-2">Expiry notifications</p>
                    <p className="text-base text-gray-600">Service reminders</p>
                </div>
            </div>
        </div>
    );
}
