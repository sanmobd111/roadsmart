import CustomFileInput from '@/components/shared/custom-file-input/CustomFileInput';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Checkbox as CheckboxPrimitive } from "@/components/ui/checkbox";
import { UploadCloud } from 'lucide-react'; // For the upload icon
import { useState } from 'react';
export default function AddCertificateModalContents() {
    const [certificateName, setCertificateName] = useState('');
    const [addIssueDate, setAddIssueDate] = useState(false);
    const [addExpiryDate, setAddExpiryDate] = useState(false);

    // Dummy data for dropdowns
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i); // 5 years before and 4 years after current year

    // Reusable Dropdown component
    const DateDropdown = ({ options, selected, onSelect, placeholder }) => (
        <div className="relative inline-block w-24">
            <select
                value={selected}
                onChange={(e) => onSelect(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none pr-8"
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
    // const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
    // const months = [
    //     "January", "February", "March", "April", "May", "June",
    //     "July", "August", "September", "October", "November", "December"
    // ];
    // const years = Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - i).toString());

    return (
        <div className="">
            <div className="w-full lg:min-w-2xl space-y-6">
                <div className="bg-white lg:min-w-2xl w-full">
                    {/* Certificate Name Input */}
                    <div className="mb-6">
                        <label htmlFor="certificate-name" className="block text-lg font-semibold text-gray-800 mb-2">
                            Certificate name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="certificate-name"
                                placeholder=""
                                value={certificateName}
                                onChange={(e) => setCertificateName(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                {/* Search Icon (or a generic input icon) */}
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Date Pickers Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Add Issue Date */}
                        <div>
                            <div className="flex gap-2 items-center mb-4 lg:mb-6">
                                <CheckboxPrimitive
                                    checked={addIssueDate}
                                    onCheckedChange={() => setAddIssueDate(!addIssueDate)}
                                    className=" border-2 border-gray-300 data-[state=checked]:border-gray-300 data-[state=checked]:bg-white data-[state=checked]:text-red-500"
                                />
                                <label className="text-lg text-gray">Add issue Date</label>
                            </div>
                            {addIssueDate && (
                                <>
                                    <p className="text-gray-700 font-semibold mb-2">Start Date</p>
                                    <div className="flex space-x-2">
                                        <DateDropdown options={days} selected="" onSelect={() => { }} placeholder="Day" />
                                        <DateDropdown options={months} selected="" onSelect={() => { }} placeholder="Month" />
                                        <DateDropdown options={years} selected="" onSelect={() => { }} placeholder="Year" />
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Add Expiry Date */}
                        <div>
                            <div className="flex gap-2 items-center mb-4 lg:mb-6">
                                <CheckboxPrimitive
                                    checked={addExpiryDate}
                                    onCheckedChange={() => setAddExpiryDate(!addExpiryDate)}
                                    className="border-2 border-gray-300 data-[state=checked]:border-gray-300 data-[state=checked]:bg-white data-[state=checked]:text-red-500"
                                />
                                <label className="text-lg text-gray">Add expiry date</label>
                            </div>
                            {addExpiryDate && (
                                <>
                                    <p className="text-gray-700 font-semibold mb-2">End Date</p>
                                    <div className="flex space-x-2">
                                        <DateDropdown options={days} selected="" onSelect={() => { }} placeholder="Day" />
                                        <DateDropdown options={months} selected="" onSelect={() => { }} placeholder="Month" />
                                        <DateDropdown options={years} selected="" onSelect={() => { }} placeholder="Year" />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Document Upload Area */}
                <div className="mb-8">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Document</h3>
                    <CustomFileInput>
                        <div className="border-2 border-dashed border-red-300 rounded-lg p-8 text-center cursor-pointer hover:border-red-500 transition-colors duration-200 w-full">
                            <UploadCloud size={48} className="mx-auto text-red-400 mb-4" />
                            <p className="text-base font-medium text-gray-700">Drag and drop or <span className="text-primary font-semibold">browse</span> to choose file</p>
                        </div>
                    </CustomFileInput>
                </div>

                {/* Save Button */}
                <Button
                    className="px-8 py-6 bg-primary text-white rounded-full hover:bg-primary transition-colors duration-200 w-full"
                >
                    Save
                </Button>
            </div>
        </div>
    );
}

const App = () => {


    return (
        <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans bg-gray-50">

        </div>
    );
};

