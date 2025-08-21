import Container from '@/components/shared/container/Container';
import { Switch } from '@/components/ui/switch'; // Assuming Shadcn UI switch is available

export default function App() {
    const notificationCategories = [
        {
            id: "account-security",
            title: "Account & Security",
            description: "Get notified about account security",
            pushEnabled: true,
            emailEnabled: true,
        },
        {
            id: "orders-services",
            title: "Orders & Services",
            description: "Receive operational updates related to orders, bookings, and more.",
            pushEnabled: true,
            emailEnabled: true,
        },
        {
            id: "messages-communications",
            title: "Messages & Communications",
            description: "Keep in touch with sellers before and during your orders.",
            pushEnabled: true,
            emailEnabled: true,
        },
        {
            id: "reminders-renewals",
            title: "Reminders & Renewals",
            description: "Get important reminders for vehicle or legal tasks",
            pushEnabled: true,
            emailEnabled: true,
        },
        {
            id: "marketing-offers",
            title: "Marketing and offers",
            description: "Receive updates about coupons and promos and money-saving offers",
            pushEnabled: true,
            emailEnabled: true,
        },
    ];

    return (
        <Container className="bg-white font-sans text-gray-900 flex items-start justify-center">
            <div className="w-full space-y-6 bg-white">
                {/* Breadcrumb Navigation */}
                <nav className="text-sm text-gray-500 mb-6">
                    <a href="#" className="hover:underline">Notifications</a> &gt;{" "}
                    <span className="font-semibold text-gray-700">Notification preferences</span>
                </nav>

                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                    Notification Preferences
                </h1>

                {/* Enable All Section */}
                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                    <div className="flex-1 pr-4">
                        <h2 className="text-lg font-medium text-gray-800">Enable All</h2>
                        <p className="text-sm text-gray-500">Activate all notifications</p>
                    </div>
                    <Switch checked={true} />
                </div>

                {/* Notification Categories Header */}
                <div className="grid grid-cols-[3fr_1fr_1fr] items-center gap-4 py-2 text-sm font-semibold text-gray-700">
                    <div></div> {/* Empty for the category label column */}
                    <div className="text-right">Push</div>
                    <div className="text-right">Email</div>
                </div>

                {/* Notification Categories List */}
                {notificationCategories.map((category, index) => (
                    <div key={category.id} className={`grid grid-cols-[3fr_1fr_1fr] items-center gap-4 py-4 ${index < notificationCategories.length - 1 ? 'border-b border-gray-200' : ''}`}>
                        <div className="pr-4">
                            <h3 className="text-base font-medium text-gray-800">{category.title}</h3>
                            <p className="text-sm text-gray-500">{category.description}</p>
                        </div>
                        <div className="flex justify-end">
                            <Switch checked={category.pushEnabled} />
                        </div>
                        <div className="flex justify-end">
                            <Switch checked={category.emailEnabled} />
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}
