import Link from 'next/link';
import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';

const ReviewModalContents = ({onClick}) => {
  // Data for the vehicle details
  const vehicleDetails = [
    { label: 'REG NUMBER', value: 'ALX1678ZM' },
    { label: 'YEAR', value: '2015' },
    { label: 'MAKE', value: 'Toyota' },
    { label: 'MODEL', value: 'Harrier' },
    { label: 'VARIANT', value: 'Petrol SUV' },
    { label: 'TYPE', value: '2.0 4WD' },
    { label: 'CHASSIS', value: 'AWD_U6' },
    { label: 'ENGINE', value: '1987CC 111KW 151 HP 3ZR-FAE' },
    { label: 'Color', value: 'Black' },
  ];

  return (
    <div className="flex items-center justify-center font-sans">
      {/* Modal Container */}
      <div className="bg-white rounded-lg  w-full mx-auto overflow-hidden">
        {/* Header */}
        <div className="border-b border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 pb-4">Review details</h2>
        </div>

        {/* Content */}
        <div className="">
          {/* Nice Vehicle Section */}
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Nice Vehicle</h3>
            <p className="text-gray-600 text-sm">Here's what we've gathered and we'll save this in your garage</p>
          </div>

          {/* Vehicle Details List */}
          <div>
            {vehicleDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex items-center">
                  {/* Checkmark Icon */}
                  <svg
                    className="h-5 w-5 text-green-500 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase">{detail.label}</p>
                    <p className="text-base font-medium text-gray-800">{detail.value}</p>
                  </div>
                </div>
                <IoIosArrowDropright className='h-5 w-5 text-gray-400 ml-4 flex-shrink-0' />
              </div>
            ))}
          </div>
        </div>

        {/* Footer - Continue Button */}
        <div className="p-6 sm:p-8 border-t border-gray-200 flex justify-center ">
          <Link href={"/my-vehicle"} className="min-w-[150px] bg-primary text-white font-semibold py-2 px-8 rounded-md shadow-lg hover:bg-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 text-center" onClick={onClick || null}>
            Go
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewModalContents;
