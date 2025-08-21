import carImg from "@/assets/images/pngwing.com (3).png";
import Image from "next/image";
import { SlCloudUpload } from "react-icons/sl";

export default function DocumentCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:gap-x-20 w-[80%]">
            <div className="flex justify-between items-center px-4 py-3 mt-4 custom-shadow rounded-xl">
                <div className="flex gap-2 items-center">
                    <Image src={"/icon/pdf-icon.svg"} className="w-10 h-10 object-cover" width={40} height={40} />
                    <p className="font-medium">Stella Bella (A99087)</p>
                </div>
                <SlCloudUpload className="text-primary text-2xl" />
            </div>
            <div className="flex justify-between items-center px-4 py-3 mt-4 custom-shadow rounded-xl">
                <div className="flex gap-2 items-center">
                    <Image src={"/icon/pdf-icon.svg"} className="w-10 h-10 object-cover" width={40} height={40} />
                    <p className="font-medium">Stella Bella (A99087)</p>
                </div>
                <SlCloudUpload className="text-primary text-2xl" />
            </div>
            <div className="flex justify-between items-center px-4 py-3 mt-4 custom-shadow rounded-xl">
                <div className="flex gap-2 items-center">
                    <Image src={"/icon/pdf-icon.svg"} className="w-10 h-10 object-cover" width={40} height={40} />
                    <p className="font-medium">Stella Bella (A99087)</p>
                </div>
                <SlCloudUpload className="text-primary text-2xl" />
            </div>
            <div className="flex justify-between items-center px-4 py-3 mt-4 custom-shadow rounded-xl">
                <div className="flex gap-2 items-center">
                    <Image src={"/icon/pdf-icon.svg"} className="w-10 h-10 object-cover" width={40} height={40} />
                    <p className="font-medium">Stella Bella (A99087)</p>
                </div>
                <SlCloudUpload className="text-primary text-2xl" />
            </div>
        </div>
    )
}
