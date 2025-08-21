import React from 'react'

export default function PersonStep4({ license, setLicense, licenseOptions }) {
    return (
        <div className="">
            <label className="block text-lg text-gray-600 mb-3">How are they listed on their license?</label>
            <select
                value={license}
                onChange={(e) => setLicense(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors text-gray-900 bg-white appearance-none"
            >
                {licenseOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}
