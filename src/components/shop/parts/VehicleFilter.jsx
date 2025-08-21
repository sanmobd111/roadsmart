import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'
import carImg from "@/assets/images/pngwing.com (3).png";
import Image from 'next/image';
import combinedClasses from '@/utils/tailwind';
import { cn } from '@/lib/utils';

export default function VehicleFilter({ vehicles, path, containerClassName, className, onClick, currentVehicle, buttonClick }) {
  console.log(currentVehicle)
  return (
    <div className='w-full overflow-x-auto'>
      <div className={combinedClasses("grid grid-cols-[repeat(5,max-content)]  lg:w-fit mx-auto overflow-x-auto gap-4", containerClassName)}>
        {/* Add Vehicle Button */}
        <Button onClick={() => buttonClick()} className="flex items-center h-full justify-start  text-black  rounded-lg border border-gray-200 bg-white hover:bg-white cursor-pointer p-2 px-4">
          <Plus className="mr-2 bg-red-500 hover:bg-primary  !aspect-square text-white rounded-sm size-4 lg:size-6" />
          Add Vehicle
        </Button>

        {/* Vehicle Cards */}
        {vehicles?.map((vehicle) => (
          <div  key={vehicle.id} onClick={() => onClick(vehicle)} className={cn("flex items-center border border-gray-200 rounded-lg p-2 px-4 bg-white cursor-pointer", currentVehicle?.id === vehicle.id && "border-primary")}>
            <Image src={carImg} alt={vehicle.name} width={200} height={200} className="object-cover w-16 h-8 mr-2" />
            <p className="text-xs text-nowrap">{vehicle.model}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
