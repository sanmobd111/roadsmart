import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Plus } from 'lucide-react'; // For the plus icon

export default function CertificateModalContents({ setCurrentModal }) {
    return (
        <div className="">
            <div className="w-full max-w-2xl space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-800">Certificates</h1>
                    <Button
                        onClick={() => setCurrentModal("add-certificate")}
                        variant="outline"
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200 flex items-center"
                    >
                        <Plus size={16} className="mr-1" /> Add
                    </Button>
                </div>

                {/* No Certificates Found Message */}
                <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                    {/* You might want to add an icon here if available, e.g., a document icon */}
                    <p className="text-lg">No certificates found</p>
                </div>

                {/* Add Certificate Button */}
                <div className="flex justify-center">
                    <Button
                        onClick={() => setCurrentModal("add-certificate")}
                        className="px-8 py-6 bg-primary text-white rounded-full hover:bg-primary transition-colors duration-200"
                    >
                        Add Certificate
                    </Button>
                </div>
            </div>
        </div>
    );
}
