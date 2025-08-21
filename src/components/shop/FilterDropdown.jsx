import { TiArrowSortedUp } from "react-icons/ti";
import React from 'react'
import { Checkbox } from '../ui/checkbox'

export default function FilterDropdown({ toggleSection, collapsedSectionsType, type, title }) {
    return (
        <div>
            <div
                className="flex items-center justify-between mb-3 cursor-pointer hover:bg-gray-50 p-1 rounded"
                onClick={() => toggleSection(type)}
            >
                <h3 className="font-medium text-gray-900">{title}</h3>
                <TiArrowSortedUp className={`text-primary text-xl ${collapsedSectionsType ? "rotate-180" : ""
                    }`} />
            </div>
            {!collapsedSectionsType && (
                <div className="space-y-2 animate-in slide-in-from-top-2 duration-200">
                    {[
                        { name: "Gasoline", count: 45 },
                        { name: "Diesel", count: 23 },
                        { name: "Hybrid", count: 18 },
                        { name: "Electric", count: 12 },
                        { name: "Plug-in Hybrid", count: 8 },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 hover:bg-gray-50 p-1 rounded">
                            <Checkbox id={`fuel-${index}`} />
                            <label htmlFor={`fuel-${index}`} className="text-sm text-gray-600 flex-1 cursor-pointer">
                                {item.name}
                            </label>
                            <span className="text-xs text-gray-400">({item.count})</span>
                        </div>
                    ))}
                    <button className="text-sm text-gray hover:text-primary hover:underline">See All</button>
                </div>
            )}
        </div>
    )
}
