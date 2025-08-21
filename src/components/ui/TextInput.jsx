import combinedClasses from '@/utils/tailwind'
import React from 'react'

export default function TextInput({ label, inputProps, containerClassName, hasIcon, iconClassName, Icon, hasSuggestions, suggestions, type = "text", setValue }) {
    // const [value, setValue] = React.useState(inputProps?.value || "")
    const [isSuggestionOpen, setIsSuggestionOpen] = React.useState(false)
    const { className: inputClassName, ...rest } = inputProps || {}
    console.log(rest)
    return (
        <div className={combinedClasses("w-full relative", containerClassName)}>
            {label && <label className={"block text-sm font-medium text-gray mb-2"}>{label}</label>}
            <input
                type={type}
                onFocus={() => setIsSuggestionOpen(true)}
                onBlur={() => setIsSuggestionOpen(false)}
                className={combinedClasses("w-full px-4 py-3 text-sm text-gray-700 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder:text-gray-400 placeholder:font-normal transition-all duration-200 ease-in-out hover:border-gray-400", inputClassName)}
                {...rest}
            />
            {hasIcon && <span className={combinedClasses("absolute right-3 top-1/2 transform -translate-y-1/2", iconClassName)}>
                {
                    Icon && Icon
                }
            </span>}

            {/* {
                hasSuggestions && isSuggestionOpen && suggestions?.filter((suggestion) => suggestion.label.toLowerCase().includes(rest.value.toLowerCase()))?.length > 0 && <div className="absolute top-[110%] left-0 z-[10000000] bg-white p-2 rounded-sm shadow-md max-h-52 overflow-y-auto min-w-[150px]">
                    {
                        suggestions?.filter((suggestion) => suggestion.label.toLowerCase().includes(rest.value.toLowerCase())).map((suggestion, index) => (
                            <div
                                key={index}
                                onMouseDown={() => {
                                    setValue(suggestion.value)
                                    setIsSuggestionOpen(false)
                                }}
                                className="cursor-pointer hover:bg-gray-100 p-2 rounded-sm"
                            >
                                {suggestion.label}
                            </div>
                        ))
                    }
                </div>
            } */}
        </div>
    )
}
