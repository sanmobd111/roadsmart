import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function EditRiderNameModalContents({ setRiderName, setRiderNameEdit }) {
    const [localRiderName, setLocalRiderName] = useState("")
    return (
        <div className="w-full space-y-6 mx-auto">
            {/* Header */}
            <h6 className="text-gray my-6 text-xs ">
                Give your ride a name
            </h6>


            <Input
                value={localRiderName}
                onChange={(e) => setLocalRiderName(e.target.value)}
                id="plateVinInput"
                type="text"
                placeholder={"my ride"}
                className=" border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12 w-[70%]"
            />
            <div className='flex gap-4'>
                <Button
                    onClick={() => {
                        setRiderNameEdit(false)
                    }}
                    className=" bg-transparent text-gray-black hover:bg-transparent transition-colors duration-200 py-3 rounded-sm border-gray/50 border w-[120px]"
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        setRiderName(prev => [...prev, localRiderName])
                        setRiderNameEdit(false)
                    }}
                    className=" bg-primary text-white hover:bg-primary transition-colors duration-200 py-3 rounded-sm w-[120px]"
                >
                    Save
                </Button>
            </div>
        </div>
    )
}
