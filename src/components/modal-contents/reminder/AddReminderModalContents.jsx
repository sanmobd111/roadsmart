// import React from 'react';
// import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
// import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn UI select is available

// export default function AddReminderModalContents() {
//     const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
//     const months = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];
//     const years = Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - i).toString());

//     return (
//         <div className="">
//             <div className="w-full max-w-2xl space-y-6">
//                 {/* Header */}
//                 <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
//                     Service Reminder
//                 </h1>

//                 {/* Reminder Name (optional) */}
//                 <div className="mb-4">
//                     <label htmlFor="reminderName" className="block text-sm font-medium text-gray-700 mb-1">
//                         Reminder name (optional)
//                     </label>
//                     <Input
//                         id="reminderName"
//                         type="text"
//                         className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
//                     />
//                 </div>

//                 {/* Service Date and Mileage */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//                     <div>
//                         <label htmlFor="serviceDate" className="block text-sm font-medium text-gray-700 mb-1">
//                             Service date
//                         </label>
//                         <div className="grid grid-cols-3 gap-3">
//                             <Select>
//                                 <SelectTrigger className="w-full !h-12">
//                                     <SelectValue placeholder="Day" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     {days.map(day => <SelectItem key={day} value={day}>{day}</SelectItem>)}
//                                 </SelectContent>
//                             </Select>
//                             <Select>
//                                 <SelectTrigger className="w-full !h-12">
//                                     <SelectValue placeholder="Month" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     {months.map(month => <SelectItem key={month} value={month}>{month}</SelectItem>)}
//                                 </SelectContent>
//                             </Select>
//                             <Select>
//                                 <SelectTrigger className="w-full !h-12">
//                                     <SelectValue placeholder="Year" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     {years.map(year => <SelectItem key={year} value={year}>{year}</SelectItem>)}
//                                 </SelectContent>
//                             </Select>
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="mileageRequired" className="block text-sm font-medium text-gray-700 mb-1">
//                             Mileage when service is required
//                         </label>
//                         <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-12">
//                             <Input
//                                 id="mileageRequired"
//                                 type="text"
//                                 className="flex-1 border-none focus:ring-0 focus:border-0 p-2 h-full"
//                             />
//                             <span className="px-3 text-gray-600  h-full flex items-center">km</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Save Button */}
//                 <Button
//                     className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200 w-full"
//                 >
//                     Save
//                 </Button>
//             </div>
//         </div>
//     );
// }

import { Checkbox as CheckboxPrimitive } from "@/components/ui/checkbox";
import React, { useState } from 'react';

const AddReminderModalContents = () => {
    const [reminderName, setReminderName] = useState('');
    const [serviceProvider, setServiceProvider] = useState('');
    const [mileageEnabled, setMileageEnabled] = useState(false);
    const [mileage, setMileage] = useState('');

    // Dummy data for dropdowns
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i); // 5 years before and 4 years after current year

    // Reusable Dropdown component
    const DateDropdown = ({ options, selected, onSelect, placeholder }) => (
        <div className="relative inline-block w-full">
            <select
                value={selected}
                onChange={(e) => onSelect(e.target.value)}
                className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none pr-8"
            >
                <option value="" disabled>{placeholder}</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
    );

    const handleSave = () => {
        console.log({
            reminderName,
            serviceProvider,
            reminderDate: 'Selected date here', // Replace with actual date logic
            mileageEnabled,
            mileage: mileageEnabled ? mileage : 'N/A',
        });
        // Add your save logic here
    };

    return (
        <div className="flex items-center  font-sans">
            <div className="bg-white max-w-2xl w-full">
                {/* Reminder Name Input */}
                <div className="mb-6">
                    <label htmlFor="reminder-name" className="block text-lg font-semibold text-gray-800 mb-2">
                        Reminder Name
                    </label>
                    <input
                        type="text"
                        id="reminder-name"
                        placeholder="Type here"
                        value={reminderName}
                        onChange={(e) => setReminderName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                    <p className="text-sm text-gray-500 mt-1">Ex. Engine service</p>
                </div>

                {/* Service Provider Input */}
                <div className="mb-6">
                    <label htmlFor="service-provider" className="block text-lg font-semibold text-gray-800 mb-2">
                        Service Provider
                    </label>
                    <input
                        type="text"
                        id="service-provider"
                        placeholder="Type here"
                        value={serviceProvider}
                        onChange={(e) => setServiceProvider(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                </div>

                {/* Reminder Date Dropdowns */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-800 mb-2">Reminder date</p>
                    <div className="grid grid-cols-3 gap-3">
                        <DateDropdown options={days} selected="" onSelect={() => { }} placeholder="Day" />
                        <DateDropdown options={months} selected="" onSelect={() => { }} placeholder="Month" />
                        <DateDropdown options={years} selected="" onSelect={() => { }} placeholder="Year" />
                    </div>
                </div>

                {/* Mileage Checkbox and Input */}
                <div className="mb-8">
                    <label className="flex items-center text-gray-800 font-medium mb-4 cursor-pointer">
                        <div className="flex gap-2 items-center">
                            <CheckboxPrimitive
                                checked={mileageEnabled}
                                onCheckedChange={() => setMileageEnabled(!mileageEnabled)}
                                className="border-2 border-gray-300 data-[state=checked]:border-gray-300 data-[state=checked]:bg-white data-[state=checked]:text-red-500"
                            />
                            <label className="text-lg text-gray-600">Mileage</label>
                        </div>
                        {/* <span className="text-gray-800">Mileage</span> */}
                    </label>
                    {mileageEnabled && (
                        <input
                            type="text"
                            placeholder="KM"
                            value={mileage}
                            onChange={(e) => setMileage(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        />
                    )}
                </div>

                {/* Save Button */}
                <div className="">
                    <button
                        onClick={handleSave}
                        className="bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 w-full"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddReminderModalContents;

