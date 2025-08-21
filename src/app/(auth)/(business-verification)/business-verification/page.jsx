"use client"

import React from 'react';
// import { Input } from '@/components/ui/input';
import OutlineButton from '@/components/shared/buttons/OutlineButton';
import PrimaryButton from '@/components/shared/buttons/PrimaryButton';
import Checkbox from '@/components/shared/check-box/Checkbox';
import Container from '@/components/shared/container/Container';
import FileUpload from '@/components/shared/file-upload/FileUpload';
import TextInput from '@/components/shared/input/TextInput';
import Title from '@/components/shared/title/Title';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function App() {
    const router = useRouter();
    const handleSubmit = () => {
        console.log("Proceed clicked");
        router.push("/business-payment-method")
    }
    const handleSkip = () => {
        console.log("Do it later clicked");
        router.push("/business-payment-method")
    }
    return (
        <Container className="">
            <div className="w-full max-w-xl space-y-6 mx-auto ">
                {/* Header */}
                <div className="w-min">
                    <Title text={"Get verified quickly <br /> (optional)"} className={"text-nowrap"} />
                    <p className="text-sm text-gray-secondary my-4">Choose one of the following notices to help speed up the <a href="#" className="text-primary hover:underline">verification process</a></p>
                </div>

                {/* Business Credit Card Section */}
                <Collapsible defaultOpen={true} className="border border-gray-200 rounded-lg py-4 px-10">
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 border-gray-200 pb-0">
                        Business Credit Card
                        <ChevronDown size={20} className="transition-transform duration-200 data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 space-y-4">
                        <TextInput label={"Number on card"} />
                        <TextInput label={"Card number"} />

                        <div className="grid grid-cols-2 gap-6">
                            <TextInput label={"Expiration date(Month)"} />
                            <TextInput label={"Year"} />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox checked={true} setChecked={() => { }} label={"Save this payment method to my account"} />
                        </div>
                        <h3 className="text-base font-semibold text-gray-800 pt-4">Billing Address</h3>
                        <div className="flex items-center space-x-2">
                            <Checkbox checked={true} setChecked={() => { }} label={"Use my business address"} />
                        </div>
                    </CollapsibleContent>
                </Collapsible>

                <Collapsible className="border border-gray-200 rounded-lg py-4 px-10">
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 border-gray-200 pb-0">
                        Tax ID, EIN or SSN
                        <ChevronDown size={20} className="transition-transform duration-200 data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4 space-y-4">
                        <p className="text-xs text-gray-600">Enter your business tax ID or employer ID number (SSN, if you're a sole proprietor). This information would be on your W-9 or 1099 form.</p>
                        <TextInput label={"Tax ID, EIN or SSN"} />
                    </CollapsibleContent>
                </Collapsible>


                <Collapsible className="border border-gray-200 rounded-lg py-4 px-10">
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 border-gray-200 pb-0">
                        Invitation code
                        <ChevronDown size={20} className="transition-transform duration-200 data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                        <p className="text-xs text-gray-600">Your invitation code is given to you by roadsmart Business to  instantly verify your account. Note: this is different than your  one-time password.</p>
                        <TextInput label={"Invitation code"} />
                    </CollapsibleContent>
                </Collapsible>

                <Collapsible className="border border-gray-200 rounded-lg py-4 px-10">
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 border-gray-200 pb-0">
                        Business Website Url
                        <ChevronDown size={20} className="transition-transform duration-200 data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                        <p className="text-xs text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <TextInput label={"Business Website Url"} />
                    </CollapsibleContent>
                </Collapsible>

                <Collapsible className="border border-gray-200 rounded-lg py-4 px-10">
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 border-gray-200 pb-0">
                        Official documents
                        <ChevronDown size={20} className="transition-transform duration-200 data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4 space-y-4">
                        <div>
                            <p className="text-xs text-gray-600 mb-6">Upload a document on official letterhead that shows your organization’s status.</p>
                            <FileInput />
                            <span className='text-[10px]'>PDF or JPEG format, size limit of 10 MB</span>
                        </div>
                        <div>
                            <FileInput />
                        </div>
                    </CollapsibleContent>
                </Collapsible>

                <div className="grid grid-cols-2 gap-4 mt-4 w-[80%] mx-auto">
                    <Link href={"/business-payment-method"}>
                        <PrimaryButton btnText={"Submit"} onClick={handleSubmit} />
                    </Link>
                    <Link href={"/business-payment-method"}>
                        <OutlineButton btnText={"Skip this step"} onClick={handleSkip} />
                    </Link>
                </div>
            </div>
        </Container>
    );
}

import { UploadCloud } from 'lucide-react'; // For the cloud upload icon
import { Input } from '@/components/ui/input';

function FileInput() {
    // State to hold the selected file name
    const [fileName, setFileName] = React.useState('');
    // Ref for the hidden file input
    const fileInputRef = React.useRef(null);

    // Function to handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            // You can also handle the file upload logic here, e.g., send to server
            console.log('Selected file:', file);
        } else {
            setFileName('');
        }
    };

    // Function to trigger the hidden file input click
    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="w-full flex items-center space-x-4 bg-white rounded-lg">
            {/* Hidden file input */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden" // Hide the default file input
            />

            {/* Input Field to display file name */}
            <Input
                type="text"
                value={fileName}
                readOnly // Make it read-only as it's for display
                onClick={handleUploadButtonClick} // Added onClick to trigger file input
                className="flex-grow border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12 cursor-pointer" // Added cursor-pointer
            />

            {/* Upload Button */}
            <button
                onClick={handleUploadButtonClick}
                className="w-12 h-12 flex items-center justify-center border-2 border-dashed border-red-300 rounded-md text-primary hover:bg-red-50 transition-colors duration-200 flex-shrink-0"
                aria-label="Upload file"
            >
                <UploadCloud size={24} />
            </button>
        </div>
    );
}
