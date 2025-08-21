import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

export default function SelectInput({ label, name, value, setValue, placeholder, options }) {
    return (
        <div>
            <label htmlFor={name} className="block text-gray text-sm font-medium mb-2">
                {label}
            </label>

            <Select value={value} onValueChange={setValue}>
                <SelectTrigger
                    className="w-full !h-[43px] border-none outline-none shadow-none 
                               focus:outline-none focus:ring-1 focus:border-none 
                               focus-visible:outline-none focus-visible:ring-1 
                               ring-[#A7A7A7] ring-1 
                               data-[state=open]:outline-none data-[state=open]:ring-1 data-[state=open]:ring-primary"
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option, index) => (
                        <SelectItem key={index} value={option.value}>
                            {option.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}
