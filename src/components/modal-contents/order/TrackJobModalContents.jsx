import carImg from '@/assets/images/pngwing.com (3).png';
import BackGroundColorDiv from '@/components/shared/background-color-div/BackGroundColorDiv';
import Image from 'next/image';
import { IoIosArrowDropright } from "react-icons/io";

export default function TrackJobModalContents({ setCurrentModal }) {
    const jobItems = [
        {
            id: 1,
            icon: "/icon/track-modal/document-text.svg",
            iconBg: "bg-red-50",
            iconColor: "text-primary",
            title: "Inspection",
            createdDate: "Tue, 30 July 2025",
            subText: "Hollmark",
            status: "Confirmed",
            statusBg: "bg-green-100",
            statusColor: "text-green-700",
            modal: "inspection"
        },
        {
            id: 2,
            icon: "/icon/track-modal/piston.svg",
            iconBg: "bg-red-50",
            iconColor: "text-primary",
            title: "Repairs",
            createdDate: "Tue, 30 July 2025",
            subText: "Hensons",
            status: "In Progress",
            statusBg: "bg-orange-100",
            statusColor: "text-orange-700",
            modal: "repair"
        },
        {
            id: 3,
            icon: "/icon/track-modal/Tow Truck.svg",
            iconBg: "bg-red-50",
            iconColor: "text-primary",
            title: "Towing",
            createdDate: "Tue, 30 July 2025",
            subText: "Pickmo",
            status: "Delivered",
            statusBg: "bg-blue-100",
            statusColor: "text-blue-700",
        },
    ];

    return (
        <div className="w-full max-w-2xl space-y-6 bg-white rounded-lg pb-6">
            {/* Header */}
            <div className="flex items-center mb-6 pb-4">
                {/* <button className="text-gray-600 hover:text-gray-800 mr-4">
                    <ArrowLeft size={24} />
                </button> */}
                <h1 className="text-2xl font-bold text-gray-800">Track Job</h1>
            </div>

            {/* Vehicle Summary */}
            <div className="flex items-center space-x-4 mb-8">
                <BackGroundColorDiv className={"aspect-square"}>
                    <Image
                        width={80}
                        height={50}
                        src={carImg}// Placeholder image for car
                        alt="Vehicle"
                        className="w-20 h-auto object-cover rounded-md flex-shrink-0"
                    />
                </BackGroundColorDiv>
                <div>
                    <p className="text-xs font-semibold text-gray-800">Own Damage</p>
                    <p className="text-base text-gray-600">Mercedes Benz CAC2035</p>
                    <p className="text-xs text-gray-500">Mileage: 34,548 Km</p>
                </div>
            </div>

            {/* Job Items List */}
            <div className="space-y-4">
                {jobItems.map((item) => (
                    <div onClick={() => {
                        console.log(item.modal)
                        setCurrentModal(item.modal)
                    }} key={item.id} className="flex items-center justify-between p-4 rounded-lg shadow-sm">
                        <div className="flex items-center space-x-4">
                            <div>
                                <BackGroundColorDiv className={"p-4"}>
                                    {/* <item.icon size={28} className='text-primary' /> */}
                                    <Image src={item.icon} width={28} height={28} alt="icon" />
                                </BackGroundColorDiv>
                                <span className={`inline-block px-2 py-0.5 rounded-full text-[10px]  mt-2 ${item.statusBg} ${item.statusColor}`}>
                                    {item.status}
                                </span>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 ">{item.title}</h2>
                                <p className="text-sm text-gray-600">Created on {item.createdDate}</p>
                                <p className="text-sm text-primary font-medium mb-1 underline">{item.subText}</p>

                            </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                            {/* <ChevronRight size={24} /> */}
                            <IoIosArrowDropright size={24} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
