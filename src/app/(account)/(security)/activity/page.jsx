import Container from "@/components/shared/container/Container";

export default function App() {
    const signInActivities = [
        {
            id: 1,
            signedInSince: "Jan 08,2025\n02:50am",
            description: {
                device: "Windows (Edge 137.0)",
                location: "Lusaka, Lusaka, Zambia",
                isCurrentSession: true,
            },
        },
        {
            id: 2,
            signedInSince: "Jan 08,2025\n02:50am",
            description: {
                device: "iPhone (RSS app)",
                location: "Lusaka, Zambia",
            },
        },
        {
            id: 3,
            signedInSince: "Jan 08,2025\n02:50am",
            description: {
                device: "Unknown",
                location: "Johannesburg, Gauteng, South Africa",
            },
        },
        {
            id: 4,
            signedInSince: "Jan 08,2025\n02:50am",
            description: {
                device: "iOS (Mobile Safari 18.0)",
                location: "Lusaka, Lusaka, Zambia",
            },
        },
    ];

    return (
        <Container className="min-h-screen bg-white font-sans text-gray-900 flex items-start justify-center">
            <div className="w-full space-y-6">

                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200">
                    Sign-in activity
                </h1>
                <p className="text-base text-gray-600 mb-8">
                    Devices or activity look unfamiliar?{" "}
                    <a href="#" className="text-primary hover:underline">Change your password</a>, which will sign out all devices from your account.
                </p>

                {/* Sign-in Activity List - Header Row */}
                <div className="grid grid-cols-3 items-center gap-4 py-2 border-gray-300 font-semibold text-gray-700">
                    <div>Signed in since</div>
                    <div>Description</div>
                </div>

                {/* Sign-in Activity List - Data Rows */}
                {signInActivities.map((activity, index) => (
                    <div key={activity.id} className={`grid grid-cols-3 items-start gap-4 py-4 ${index < signInActivities.length - 1 ? 'border-b border-gray-200' : ''}`}>
                        <div>
                            <p className="text-base text-gray-800 whitespace-pre-line">{activity.signedInSince}</p>
                        </div>
                        <div>
                            <p className="text-base text-gray-800">
                                <span className="font-semibold">Device:</span> {activity.description.device}
                            </p>
                            <p className="text-base text-gray-800">
                                <span className="font-semibold">Location:</span> {activity.description.location}
                            </p>
                            {activity.description.isCurrentSession && (
                                <p className="text-sm text-primary flex items-center mt-1">
                                    <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                                    This session
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}
