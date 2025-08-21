import combinedClasses from '@/utils/tailwind';
import React from 'react';

export default function SelectInput({ defaultValue, setValue, options, containerClassName, selectClassName, icon = (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>) }) {
    return (
        <div className={combinedClasses(" relative", containerClassName)}>
            <select
                onChange={(e) => setValue(e.target.value)}
                className={combinedClasses("w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 appearance-none", selectClassName)}
            >
                <option>{defaultValue}</option>
                {
                    options.map((option, index) => (
                        <option value={option.value} key={index}>{option.label}</option>
                    ))
                }
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                {icon}
            </div>
            {/* Custom arrow icon on the left */}

        </div>
    );
}
