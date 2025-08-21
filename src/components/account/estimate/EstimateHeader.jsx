

import Path from "@/components/shared/path/Path";
import Link from "next/link";
import { HiMiniUserCircle } from "react-icons/hi2";

export default function EstimateHeader() {
    return (
        <div className="w-full">

            {/* Left side - Request Information */}
            <div className="space-y-2 flex flex-col md:flex-row justify-between border-b border-gray-200 mb-4">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-black text-center md:text-left">Estimate details</h1>
                {/* Right side - Action Buttons */}
                <div className="flex flex-col items-center md:flex-row gap-2 sm:gap-3 w-full sm:w-auto mb-4 lg:mb-0 text-gray text-sm">
                    <Link href={"/date-and-time"}>
                        <span>Book Appointment</span>
                    </Link>
                    <span>Send Message</span>
                    {/* <Link href  */}

                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-1 sm:gap-4 text-sm text-gray-600">
                <span className="bg-secondary px-3 py-1 rounded-sm font-medium">Estimate #1001</span>
                <span>Requested on Oct 30, 2025</span>
                {/* <span className='text-primary flex items-center gap-1'><HiMiniUserCircle /> <span className='underline'>Hallmark Insurance </span></span> */}
            </div>
        </div>
    )
}

