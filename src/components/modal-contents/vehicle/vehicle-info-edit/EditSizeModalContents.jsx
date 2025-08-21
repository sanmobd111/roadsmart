import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn UI select is available
import { Checkbox } from '@/components/ui/checkbox'; // Assuming Shadcn UI checkbox is available
import { Label } from '@/components/ui/label'; // Assuming Shadcn UI label is available

export default function EditSizeModalContents() {
    return (
        <div className="">
            <div className="w-full max-w-2xl space-y-6">

                {/* Name (optional) */}
                <div className="mb-6">
                    <label htmlFor="tireName" className="text-lg font-semibold text-gray-800 mb-4 block">
                        Tire details
                    </label>
                    <Input
                        id="tireName"
                        type="text"
                        placeholder="Name (optional)"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                </div>

                {/* Tire size */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Tire size</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <Select>
                                <SelectTrigger className="w-full h-12">
                                    <SelectValue placeholder="Width" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="185">185</SelectItem>
                                    <SelectItem value="195">195</SelectItem>
                                    <SelectItem value="205">205</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select>
                                <SelectTrigger className="w-full h-12">
                                    <SelectValue placeholder="Ration" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="55">55</SelectItem>
                                    <SelectItem value="60">60</SelectItem>
                                    <SelectItem value="65">65</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select>
                                <SelectTrigger className="w-full h-12">
                                    <SelectValue placeholder="Diameter" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="R15">R15</SelectItem>
                                    <SelectItem value="R16">R16</SelectItem>
                                    <SelectItem value="R17">R17</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* OEM Standard Sizes */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">OEM Standard Sizes</h2>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="oemSize1" className="data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                            <Label htmlFor="oemSize1" className="text-base font-medium text-gray-800 cursor-pointer">
                                195/65 R15
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="oemSize2" className="data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                            <Label htmlFor="oemSize2" className="text-base font-medium text-gray-800 cursor-pointer">
                                205/55R16
                            </Label>
                        </div>
                    </div>
                </div>

                {/* Search Button */}
                <Button
                    className="px-8 py-6 rounded-full bg-primary text-white hover:bg-primary transition-colors duration-200 w-full"
                >
                    Search
                </Button>
            </div>
        </div>
    );
}
