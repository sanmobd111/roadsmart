import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { X, User, Upload } from 'lucide-react'; // For close, user, and upload icons
import CustomFileInput from '@/components/shared/custom-file-input/CustomFileInput';

export default function UploadProfileImageModalContents() {
    return (
        <div className="w-full space-y-6 bg-white text-center mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4">
                <h1 className="text-2xl font-bold text-gray-800">Update profile photo</h1>
            </div>

            {/* Profile Photo Area */}
            <div className="flex flex-col items-center space-y-4 mb-8">
                <div className="w-40 h-40 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                    <User size={80} /> {/* Larger user icon for the main display */}
                </div>
                <p className="text-base text-gray-600">Move and scale photo to fit</p>
                <div className="flex flex-col items-center cursor-pointer text-primary hover:text-primary transition-colors duration-200">
                    <CustomFileInput>
                        <Upload size={20} />
                    </CustomFileInput>
                    <span className="text-lg font-semibold mt-1 text-gray">Upload</span>
                </div>
            </div>

            {/* Save Changes Button */}
            <div className='w-fit ml-auto'>
                <Button
                    className=" w-fit ml-auto px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                >
                    Save changes
                </Button>
            </div>
        </div>
    );
}
