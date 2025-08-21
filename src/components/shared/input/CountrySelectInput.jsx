import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import combinedClasses from '@/utils/tailwind'
import React from 'react'
export default function CountrySelectInput({ label, name, inputClassName }) {
    return (
        <div>
            <label htmlFor={name} className="block text-gray text-sm font-medium mb-2">
                {label}
            </label>

            <Select defaultValue="+260">
                <SelectTrigger id="countryOrRegionCode" className={combinedClasses("w-full !h-[42px] !border-none ring-1 ring-[#A7A7A7] focus:ring-primary !outline-none outline-0 shadow-none", inputClassName)}>
                    <SelectValue placeholder="+260" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="+1">
                        <div className="flex items-center">
                            <img src="https://flagcdn.com/us.svg" alt="US Flag" className="w-5 h-5 object-cover rounded-full mr-2" />
                            +1
                        </div>
                    </SelectItem>
                    <SelectItem value="+44">
                        <div className="flex items-center">
                            <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="w-5 h-5 object-cover rounded-full mr-2" />
                            +44
                        </div>
                    </SelectItem>
                    <SelectItem value="+260">
                        <div className="flex items-center">
                            <img src="https://flagcdn.com/zm.svg" alt="Zambia Flag" className="w-5 h-5 object-cover rounded-full mr-2" />
                            +260
                        </div>
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
