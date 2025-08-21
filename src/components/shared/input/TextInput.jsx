// components/FirstNameInput.jsx
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import combinedClasses from '@/utils/tailwind';
import React, { useState } from 'react';

const TextInput = ({ name, value, setValue, placeholder, label, type = "text", inputClassName, containerClassName }) => {

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        // <div className={containerClassName}>
        //     <label htmlFor={name} className="block text-gray text-sm font-medium mb-2">
        //         {label}
        //     </label>
        //     <input
        //         type={type}
        //         id={name}
        //         name={name}
        //         value={value}
        //         onChange={handleChange}
        //         className={combinedClasses(`shadow-sm appearance-none border-none outline-none rounded-sm w-full py-2.5 pr-3  text-gray-700 leading-tight focus:outline-none ring-1 ring-[#A7A7A7] focus:ring-1 focus:ring-primary  ${placeholder ? "pl-8" : "pl-3"}`, inputClassName)}
        //         placeholder={placeholder}
        //     />
        // </div>

        <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                {label}
            </Label>
            <Input
                id="email"
                type="email"
                // value={formData.email}
                // onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 selection:bg-blue-200"
            />
        </div>
    );
};

export default TextInput;