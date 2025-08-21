import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn UI select is available

export default function EditCurrencyModalContents() {
    return (
        <div className="">
            <div className="w-full max-w-2xl space-y-6">
                <h1 className='text-xl font-semibold'>Currency</h1>
                {/* Currency Input Field */}
                <div className="mb-10">
                    <label htmlFor="currencyInput" className="sr-only">Currency</label> {/* Hidden label for accessibility */}
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-12">
                        <Input
                            id="currencyInput"
                            type="text"
                            placeholder="USD" // Placeholder from the image
                            className="flex-1 border-none focus:ring-0 focus:border-0 p-2 h-full"
                        />
                        <div className="flex items-center px-3 border-l border-gray-300  h-full">
                            <Select defaultValue="">
                                <SelectTrigger className="w-auto h-full border-none focus:ring-0 focus:border-0">
                                    <SelectValue placeholder="" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value=" "> </SelectItem>
                                    <SelectItem value="usd">USD</SelectItem>
                                    <SelectItem value="eur">EUR</SelectItem>
                                    <SelectItem value="gbp">GBP</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <Button
                    className="px-8 py-6 bg-primary text-white rounded-full hover:bg-primary transition-colors duration-200 w-full"
                >
                    Save
                </Button>
            </div>
        </div>
    );
}
