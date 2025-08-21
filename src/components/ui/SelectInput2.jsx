import combinedClasses from '@/utils/tailwind'
import React, { useState } from 'react'

export default function SelectInput2({
    label,
    value,
    setValue,
    options = [],
    containerClassName,
    hasIcon,
    iconClassName,
    Icon,
    placeholder,
}) {
    const [isOpen, setIsOpen] = useState(false)
    console.log(label)

    return (
        <div className={combinedClasses("w-full relative", containerClassName)}>
            {label && <label className="block text-sm font-medium text-gray mb-2">{label}</label>}

            {/* Input-like clickable box */}
            <div
                tabIndex={0}
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setIsOpen(false)}
                className={combinedClasses(
                    "w-full px-4 py-3 text-sm text-gray-700 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder:text-gray-400 placeholder:font-normal transition-all duration-200 ease-in-out hover:border-gray-400 cursor-pointer",
                    "flex items-center justify-between",
                )}
            >
                <span>{options.find((opt) => opt.value === value)?.label || placeholder}</span>
                {hasIcon && (
                    <span
                        className={combinedClasses(
                            "absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none",
                            iconClassName
                        )}
                    >
                        {Icon && Icon}
                    </span>
                )}
            </div>

            {/* Dropdown */}
            {isOpen && options.length > 0 && (
                <div className="absolute top-[110%] left-0 z-[10000000] bg-white p-2 rounded-sm shadow-md max-h-52 overflow-y-auto min-w-[150px]">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onMouseDown={() => {
                                setValue(option.value)
                                setIsOpen(false)
                            }}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-sm"
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
