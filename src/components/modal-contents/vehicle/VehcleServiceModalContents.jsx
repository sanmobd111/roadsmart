import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'; // Assuming Shadcn UI collapsible is available
import Image from 'next/image';
import carImg from "@/assets/images/pngwing.com (3).png";
import { GoPlusCircle } from 'react-icons/go';

export default function VehicleServiceModalContents({ setCurrentServiceModal }) {
    const scopeOfWork = [
        "Check noise from engine top",
        "Perform routine engine service",
    ];

    const workCarriedOut = [
        "Replaced cabin filter",
        "Replaced engine oil",
    ];

    const recommendations = [
        "Replace the spark plugs",
        "Replace the air filter",
    ];

    return (
        <div className="w-full max-w-[1600px] xl:min-w-7xl space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4 ">
                <h1 className="text-2xl font-bold text-gray-800">Repairs CAC2053</h1>
                <Button
                    onClick={() => setCurrentServiceModal("service-details")}
                    variant="outline"
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                    View Inspection
                </Button>
            </div>

            {/* Vehicle Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center mb-8">
                <div className="flex items-center space-x-4">
                    <Image
                        src={carImg}
                        alt="Vehicle"
                        className="w-20 h-auto object-cover rounded-md"
                    />
                    <div>
                        <p className="text-base font-semibold text-gray-800">2024 Mercedes Benz</p>
                        <p className="text-sm text-gray-600">CAC2035ZM</p>
                    </div>
                </div>
                <div className="text-sm flex justify-center gap-4">
                    <div className='text-gray-secondary'>
                        <p>Mileage</p>
                        <p>Date</p>
                    </div>
                    <div className='text-gray-black'>
                        <p> 34548Km</p>
                        <p> 11 Nov 24</p>
                    </div>
                </div>
                <div className="text-sm w-fit mx-auto lg:mr-auto lg:ml-auto">
                    <p className='text-gray-secondary'>Estimated delivery date</p>
                    <p className='text-gray-black'>1 Jan 2025</p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-32">
                {/* Left Column */}
                <div className="space-y-8">
                    {/* Scope Of Work */}
                    <Collapsible defaultOpen={true} className=" border-gray-200 rounded-lg xl:mb-16">
                        <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 px-4 pb-4 border-b border-gray-200">
                            Scope Of Work
                            <GoPlusCircle size={20} className="transition-transform duration-200 data-[state=open]:rotate-45 text-primary" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 space-y-2">
                            {scopeOfWork.map((item, index) => (
                                <div key={index} className="flex items-start text-base text-gray-600">
                                    <span className="mr-2">+</span> {item}
                                </div>
                            ))}
                        </CollapsibleContent>
                    </Collapsible>

                    {/* Recommendations */}
                    <Collapsible defaultOpen={true} className=" border-gray-200 rounded-lg">
                        <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 px-4 pb-4 border-b border-gray-200">
                            Recommendations
                            <GoPlusCircle size={20} className="transition-transform duration-200 data-[state=open]:rotate-45 text-primary" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 space-y-2">
                            {recommendations.map((item, index) => (
                                <div key={index} className="flex items-start text-base text-gray-600">
                                    <span className="mr-2">+</span> {item}
                                </div>
                            ))}
                        </CollapsibleContent>
                    </Collapsible>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    {/* Work Carried Out */}
                    <Collapsible defaultOpen={true} className=" border-gray-200 rounded-lg xl:mb-16">
                        <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 px-4 pb-4 border-b border-gray-200">
                            Work Carried Out
                            <GoPlusCircle size={20} className="transition-transform duration-200 data-[state=open]:rotate-45 text-primary" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 space-y-2">
                            {workCarriedOut.map((item, index) => (
                                <div key={index} className="flex items-start text-base text-gray-600">
                                    <span className="mr-2">+</span> {item}
                                </div>
                            ))}
                        </CollapsibleContent>
                    </Collapsible>

                    {/* Next Service Check */}
                    <div>
                        <h2 className="text-gray-secondary mb-4">Next Service Check</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="border border-gray-300 rounded-md p-3 text-center text-lg font-medium text-gray-800">
                                21000 Km
                            </div>
                            <div className="border border-gray-300 rounded-md p-3 text-center text-lg font-medium text-gray-800">
                                21 March 24
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sign Off Section */}
            <div className="flex flex-col sm:flex-row  gap-4 border-gray-200">
                <h2 className="text-lg text-center lg:text-left font-semibold text-gray-800">Sign Off</h2>
                <div className="flex flex-col gap-4">
                    <Button
                        className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                    >
                        Accept
                    </Button>
                    {/* Decline button, if needed, would go here */}
                    <p className="text-sm text-gray-500 mt-2 sm:mt-0">Accepted on 29th Nov 2024</p>
                </div>
            </div>
        </div>
    );
}
