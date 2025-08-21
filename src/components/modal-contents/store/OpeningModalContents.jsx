



export default function OpeningHoursModalContents() {
    const hours = [
        { day: "Mon:", time: "8:00 am - 6:00 pm" },
        { day: "Tue:", time: "8:00 am - 6:00 pm" },
        { day: "Wed:", time: "8:00 am - 6:00 pm" },
        { day: "Thu:", time: "8:00 am - 6:00 pm" },
        { day: "Fri:", time: "8:00 am - 6:00 pm" },
        { day: "Sat:", time: "8:00 am - 6:00 pm" },
        { day: "Sun:", time: "8:00 am - 6:00 pm" },
    ]

    return (
        <div className="bg-white rounded-lg max-w-md px-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opening hours</h2>

            <hr className="border-gray-200 mb-6" />

            <div className="space-y-3">
                {hours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium min-w-[50px]">{item.day}</span>
                        <div className="flex gap-2 lg:gap-8 text-xs">
                            <span className="text-gray-600">{item.time}</span>
                            <span className="text-gray-600">{item.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
