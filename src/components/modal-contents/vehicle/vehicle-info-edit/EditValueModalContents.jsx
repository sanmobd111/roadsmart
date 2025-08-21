import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn UI select is available

export default function EditValueModalContents() {
    return (
        <div className="">
            <div className="w-full space-y-6">
                {/* Estimated Value Input */}
                <div className="mb-4">
                    <label htmlFor="estimatedValue" className="sr-only">Estimated value</label> {/* Hidden label for accessibility */}
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-12">
                        <Input
                            id="estimatedValue"
                            type="text"
                            placeholder="$18,000"
                            className="flex-1 border-none focus:ring-0 focus:border-0 p-2 h-full"
                        />
                        <div className="flex items-center px-3 border-l border-gray-300 bg-gray-50 h-full">
                            <span className="text-primary mr-2">$</span>
                            <Select>
                                <SelectTrigger className="w-auto h-full border-none focus:ring-0 focus:border-0">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
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
                    className="px-8 py-6 rounded-full bg-primary text-white hover:bg-primary transition-colors duration-200 w-full"
                >
                    Save
                </Button>
            </div>
        </div>
    );
}
