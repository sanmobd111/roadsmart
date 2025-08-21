import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Checkbox } from '@/components/ui/checkbox'; // Assuming Shadcn UI checkbox is available
import { Label } from '@/components/ui/label'; // Assuming Shadcn UI label is available
import { X, User, Camera } from 'lucide-react'; // For close, user, and camera icons

export default function EditProfileModalContents({setCurrentModal}) {
    return (
            <div className="w-full space-y-6 mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 pb-4 ">
                    <h1 className="text-2xl font-bold text-gray-800">Edit profile</h1>
                </div>

                {/* Profile Photo Section */}
                <div onClick={()=> setCurrentModal("upload-profile-image")} className="bg-secondary p-6 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                    <div className="relative w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                        <User size={48} />
                        {/* <div className="absolute bottom-0 right-0 bg-gray-700 p-1 rounded-full text-white cursor-pointer">
                            <Camera size={16} />
                        </div> */}
                    </div>
                    <p className="text-lg font-semibold text-gray-800">Edit profile photo</p>
                </div>

                {/* Public Name Input */}
                <div className="mb-4">
                    <label htmlFor="publicName" className="block text-sm font-medium text-gray-700 mb-1">
                        Public name
                    </label>
                    <Input
                        id="publicName"
                        type="text"
                        placeholder="Lorem Ipsum"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                </div>

                {/* Bio Input */}
                <div className="mb-6">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                    </label>
                    <Input
                        id="bio"
                        type="text"
                        placeholder="Lorem Ipsum is simply dummy text"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                    />
                    <p className="text-sm text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <p className="text-sm text-primary mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                {/* Checkboxes */}
                <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-2">
                        <Checkbox id="checkbox1" checked={true} className="data-[state=checked]:bg-primary data-[state=checked]:text-white mt-1" />
                        <Label htmlFor="checkbox1" className="text-sm text-gray-600 cursor-pointer">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                        <Checkbox id="checkbox2" className="data-[state=checked]:bg-primary data-[state=checked]:text-white mt-1" />
                        <Label htmlFor="checkbox2" className="text-sm text-gray-600 cursor-pointer">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                        <Checkbox id="checkbox3" checked={true} className="data-[state=checked]:bg-primary data-[state=checked]:text-white mt-1" />
                        <Label htmlFor="checkbox3" className="text-sm text-gray-600 cursor-pointer">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </Label>
                    </div>
                </div>

                {/* Save Changes Button */}
                <Button
                    className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200 w-full"
                >
                    Save changes
                </Button>
            </div>
    );
}
