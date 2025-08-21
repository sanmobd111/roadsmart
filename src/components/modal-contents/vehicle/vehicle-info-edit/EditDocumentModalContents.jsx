import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Upload, X } from 'lucide-react'; // For upload and close icons

export default function EditDocumentModalContents() {
    return (
        <div className="">
            <div className="w-full space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-800">Upload Document</h1>
                    {/* <button className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button> */}
                </div>

                {/* File Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-red-500 transition-colors duration-200">
                    <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-lg font-medium text-gray-700 mb-2">Click to select a file</p>
                    <p className="text-sm text-gray-500">Supported formats: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG, GIF, WEBP</p>
                </div>

                {/* Upload Button */}
                <Button
                    className="px-8 py-6 rounded-full bg-primary text-white hover:bg-primary transition-colors duration-200 w-full"
                >
                    Upload
                </Button>
            </div>
        </div>
    );
}
