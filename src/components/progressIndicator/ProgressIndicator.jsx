

import { cn } from '@/lib/utils';
import combinedClasses from '@/utils/tailwind';
import { IoCarSportOutline } from 'react-icons/io5';
import { LiaUserShieldSolid } from 'react-icons/lia';

export default function ProgressIndicator({
  className,
  currentStep,
  vehicles = [],
  drivers = [],
}) {
  // Combine vehicles and drivers into one flat array with type tracking
  const allSteps = [
    ...vehicles.map((item) => ({ ...item, type: 'vehicle' })),
    ...drivers.map((item) => ({ ...item, type: 'driver' })),
  ];
  return (
    <div className={combinedClasses('flex items-center justify-center mb-12 w-1/3 mx-auto', className)}>
      {allSteps.map((step, index) => (
        <div key={index} className="flex items-center">
          {step.type === 'vehicle' ? (
            <div className='flex flex-col items-center relative'>
              <IoCarSportOutline
                className={cn(
                  'w-8 h-8 lg:w-14 lg:h-14',
                  currentStep === index + 1 ? 'text-gray-black' : 'text-gray-400'
                )}
              />
              {
                currentStep === index + 1 && <p className='absolute top-[calc(110%)] text-nowrap -translate-x-1/2 left-1/2 text-[8px] lg:text-sm text-center text-gray-secondary font-bold'>{allSteps[index].manufacturer.slice(0, 20)}</p>
              }
            </div>
          ) : (
            <div className='flex flex-col items-center relative'>
              <LiaUserShieldSolid
                className={cn(
                  'w-8 h-8 lg:w-14 lg:h-14',
                  currentStep == index + 1 ? 'text-gray-black' : 'text-gray-400'
                )}
              />
              {

              }
              {
                currentStep === index + 1 && <p className='absolute top-[calc(110%)] text-nowrap -translate-x-1/2 left-1/2 teext-[8px] lg:text-sm text-center text-gray-secondary font-bold'>{allSteps[index].firstName.slice(0, 20)}</p>
              }
            </div>
          )}

          {/* Render divider unless it's the last icon */}
          {index < allSteps.length - 1 && (
            <div className="w-6 lg:w-14 h-0.5 lg:h-1 bg-gray-400 rounded-full mx-4"></div>
          )}
        </div>
      ))}
    </div>
  );
}
