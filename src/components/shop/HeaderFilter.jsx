import React from 'react'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'

export default function HeaderFilter() {
    return (
        <div className="flex flex-wrap gap-2 sm:gap-3 py-3 sm:items-center">
            {/* Button Group */}
            <div className="flex flex-wrap gap-2 bg-secondary rounded-lg p-1">
                <Button
                    variant="default"
                    className="bg-primary hover:bg-primary text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                    All listings
                </Button>
                <Button
                    variant="ghost"
                    className="text-gray-700 hover:text-gray-900 hover:!bg-secondary px-4 py-2 text-sm font-medium"
                >
                    BuyItNow
                </Button>
                <Button
                    variant="ghost"
                    className="text-gray-700 hover:text-gray-900 hover:!bg-secondary px-4 py-2 text-sm font-medium"
                >
                    Finance
                </Button>
            </div>

            {/* Condition Dropdown */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="bg-secondary text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-medium flex items-center gap-1"
                    >
                        Condition
                        <ChevronDown className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem>New</DropdownMenuItem>
                    <DropdownMenuItem>Used</DropdownMenuItem>
                    <DropdownMenuItem>Refurbished</DropdownMenuItem>
                    <DropdownMenuItem>For parts or not working</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Shipping & Pickup Dropdown */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="bg-secondary text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-medium flex items-center gap-1"
                    >
                        Shipping & pickup
                        <ChevronDown className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem>Free shipping</DropdownMenuItem>
                    <DropdownMenuItem>Local pickup</DropdownMenuItem>
                    <DropdownMenuItem>Fast 'N Free</DropdownMenuItem>
                    <DropdownMenuItem>Expedited shipping</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
