import { useRef } from "react";

const { Input } = require("@/components/ui/input");
const { UploadCloud } = require("lucide-react");

function FileInput({ setFiles }) {
    // State to hold the selected file name
    // const [fileName, setFileName] = useState('');
    // Ref for the hidden file input
    const fileInputRef = useRef(null);

    // Function to handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFiles(prev => [...prev, file])
            // You can also handle the file upload logic here, e.g., send to server
            console.log('Selected file:', file);
        }
    };

    // Function to trigger the hidden file input click
    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="w-full flex items-center bg-secondary rounded-lg">
            {/* Hidden file input */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden" // Hide the default file input
            />

            {/* Input Field to display file name */}
            {/* <Input
                type="text"
                // value={fileName}
                readOnly // Make it read-only as it's for display
                onClick={handleUploadButtonClick} // Added onClick to trigger file input
                className="flex-grow border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12 cursor-pointer" // Added cursor-pointer
            /> */}

            {/* Upload Button */}
            <button
            type="button"
                onClick={handleUploadButtonClick}
                className="w-full flex items-center justify-center border-2 border-dashed border-red-300 rounded-md text-primary hover:bg-red-50 transition-colors duration-200 flex-shrink-0 aspect-square"
                aria-label="Upload file"
            >
                <UploadCloud className="w-1/2 h-1/2" />
            </button>
        </div>
    );
}


export default FileInput;