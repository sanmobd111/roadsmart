"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export default function MoreActionButton({ actions, btnClassName }) {
    console.log(actions, "actions")
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <div className="relative">
            <button className={cn("flex items-center justify-center space-x-2 w-full bg-transparent hover:bg-transparent text-primary  text-sm py-2 border border-primary font-semibold rounded-lg shadow-sm transition-colors duration-200 focus:outline-none focus:ring-0", btnClassName)} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span>More actions</span>
                {/* Down arrow SVG icon */}
                <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            {
                isDropdownOpen && (
                    <div className="py-6 p-2 absolute top-[110%] left-0 right-0 z-10 bg-white shadow-md border rounded-md space-y-2">
                        {
                            actions.map((action) => (
                                <p className="text-center cursor-pointer" onClick={action.handleOnClick}>{action.title} </p>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}