import combinedClasses from "@/utils/tailwind";
import { BsCloudUpload } from "react-icons/bs";
export default function FileUpload({ className }) {
    return (
        <div
            className={combinedClasses("aspect-square border-2 border-dashed border-red-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-red-400 hover:bg-red-50/50 transition-all duration-200 bg-red-50/30", className)}
        >
            <BsCloudUpload className="w-[50%] h-[50%] text-red-400" />
        </div>
    )
}



