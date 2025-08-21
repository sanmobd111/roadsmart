import carImg from "@/assets/images/pngwing.com (3).png";
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Card, CardContent } from '@/components/ui/card'; // Assuming Shadcn UI card is available
import { cn } from "@/lib/utils";
import { setSelectedCarForParts as setSelectedCarForPartsAction } from '@/store/Feature/selected-items';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ChangeVehicleModalContents({ setIsModalOpen }) {
    const selectedVehicleForPartsState = useSelector(state => state?.selectedItems?.selectedCarForParts);
    const dispatch = useDispatch();
    const [selectedCarForParts, setSelectedCarForParts] = useState(selectedVehicleForPartsState);
    const vehicles = [
        {
            id: 1,
            image: "https://placehold.co/150x100/E0E0E0/333333?text=BMW+X3", // Placeholder image
            name: "BMW X3",
            license: "ALC1811ZM",
        },
        {
            id: 2,
            image: "https://placehold.co/150x100/ADD8E6/333333?text=Acura+MDX", // Placeholder image
            name: "2004 Acura MDX",
            license: "", // No license plate in image
        },
        {
            id: 3,
            image: "https://placehold.co/150x100/E0E0E0/333333?text=2022+BMW+X3", // Placeholder image
            name: "2022 BMW X3",
            license: "", // No license plate in image
        },
    ];

    const handleAddVehicle = () => {
        dispatch(setSelectedCarForPartsAction(selectedCarForParts));
        setIsModalOpen(false);
    }
    return (
        <div className="">
            <div className="w-full space-y-6">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Choose a vehicle</h1>
                <p className="text-base text-gray-600 mb-8">My Garage</p>

                {/* Vehicle Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {vehicles.map((vehicle) => (
                        <Card key={vehicle.id} className={cn("w-full border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 py-0", vehicle.id === selectedCarForParts?.id && "border border-primary")}
                            onClick={() => {
                                setSelectedCarForParts(vehicle);
                            }}
                        >
                            <CardContent className="p-4 flex items-center text-center gap-4">
                                <Image src={carImg} alt={vehicle.name} className="w-28 object-contain rounded-md" width={50} height={50} />
                                <p className="text-lg font-semibold text-gray-800">{vehicle.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Add New Vehicle Button */}
                <div className="flex flex-col lg:flex-row justify-center gap-4 lg:pb-8">
                    <Button
                        onClick={handleAddVehicle}
                        variant="outline"
                        className="px-8 py-4 border border-primary bg-primary text-white rounded-md hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                        Add new vehicle
                    </Button>
                    <Button
                        variant="outline"
                        className="px-8 py-4 border border-gray-400 rounded-md hover:bg-red-50 transition-colors duration-200"
                    >
                        Shop Without Vehicle
                    </Button>
                </div>
            </div>
        </div>
    );
}