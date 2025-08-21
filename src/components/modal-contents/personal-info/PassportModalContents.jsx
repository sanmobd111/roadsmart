import { Upload } from 'lucide-react'; // For upload and file icons
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available

export default function PassportModalContents({setCurrentModalContent}) {
    return (
        <div className="w-full max-w-2xl space-y-6">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                Upload your passport page
            </h1>

            {/* Instructions */}
            <p className="text-base text-gray-600 mb-8">
                Make sure your photo isn't blurry and clearly shows your face
            </p>

            {/* Upload Area */}
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-red-500 transition-colors duration-200 mb-8">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-primary mb-3">
                    <Upload size={32} />
                </div>
                <p className="text-base font-semibold text-gray-800 mb-1">Upload page</p>
                <p className="text-sm text-gray-500">JPEG or PNG only</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-start gap-4">
                <Button
                    variant="outline"
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                    Back
                </Button>
                <Button
                    onClick={() => setCurrentModalContent("verification-confirmation")}
                    className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}
