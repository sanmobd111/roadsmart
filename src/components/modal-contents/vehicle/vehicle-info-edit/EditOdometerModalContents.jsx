// import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
// import { Input } from '@/components/ui/input';

// export default function EditOdometerModalContents() {
//     return (
//         <div className="w-full space-y-6 mx-auto">
//             {/* Header */}
//             {/* <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
//                 {title}
//             </h1> */}

//             <Input
//                 id="plateVinInput"
//                 type="text"
//                 placeholder={"Odometer"}
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
//             />
//             <Button
//                 className="w-full bg-primary text-white hover:bg-primary transition-colors duration-200 py-6 rounded-full"
//             >
//                 Save
//             </Button>
//         </div>
//     )
// }


import { Button } from '@/components/ui/button';
import React, { useState, useRef } from 'react';

const App = ({ setOdometer, setOdometerEdit }) => {
    const numInputs = 5;
    const [digits, setDigits] = useState(Array(numInputs).fill(''));
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;

        if (/^\d?$/.test(value)) {
            const newDigits = [...digits];
            newDigits[index] = value;
            setDigits(newDigits);

            // Move to next input only if value is a single digit (not empty)
            if (value && index < numInputs - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            if (digits[index]) {
                // Just clear the current field if it has a value
                const newDigits = [...digits];
                newDigits[index] = '';
                setDigits(newDigits);
            } else if (index > 0) {
                // Move to previous input
                inputRefs.current[index - 1]?.focus();
            }
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        } else if (e.key === 'ArrowRight' && index < numInputs - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleSave = () => {
        const fullCode = digits.join('');
        console.log('Saved code:', fullCode);
        // Add API call or logic here
    };

    const handleCancel = () => {
        setDigits(Array(numInputs).fill(''));
        console.log('Cancelled');
    };

    return (
        <div className="bg-white  w-full text-center">

            {/* Digit Input Fields */}
            <div className="flex space-x-1 mb-8">
                {digits.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                        className="w-14 h-14 text-xxl text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        inputMode="numeric"
                        pattern="[0-9]"
                    />
                ))}
            </div>

            {/* Action Buttons */}
            <div className='flex gap-4'>
                <Button
                    onClick={() => {
                        handleCancel()
                        setOdometerEdit(false)
                    }}
                    className=" bg-transparent text-gray-black hover:bg-transparent transition-colors duration-200 py-3 rounded-sm border-gray/50 border w-[120px]"
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        handleSave()
                        setOdometerEdit(false)
                        setOdometer(digits.join(''))
                    }}
                    className=" bg-primary text-white hover:bg-primary transition-colors duration-200 py-3 rounded-sm w-[120px]"
                >
                    Save
                </Button>
            </div>
        </div>
    );
};

export default App;

