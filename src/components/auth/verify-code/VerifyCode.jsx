import React from 'react'

export default function VerifyCode({ verificationCode, inputRefs, setVerificationCode }) {
    const handleChange = (index, value) => {
        // Only allow numbers
        if (value && !/^\d*$/.test(value)) return;

        const newCode = [...verificationCode];
        // Take only the last character if multiple characters are pasted
        newCode[index] = value.slice(-1);
        setVerificationCode(newCode);

        // Auto-focus next input if current input is filled
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Move to previous input on backspace if current input is empty
        if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
        // Move to next input on right arrow
        else if (e.key === "ArrowRight" && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
        // Move to previous input on left arrow
        else if (e.key === "ArrowLeft" && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").trim();

        // Check if pasted data contains only numbers and is not longer than the number of inputs
        if (/^\d+$/.test(pastedData) && pastedData.length <= 6) {
            const newCode = [...verificationCode];

            // Fill the inputs with the pasted data
            for (let i = 0; i < Math.min(pastedData.length, 6); i++) {
                newCode[i] = pastedData[i];
            }

            setVerificationCode(newCode);

            // Focus the next empty input or the last input
            const nextEmptyIndex = newCode.findIndex((val) => val === "");
            if (nextEmptyIndex !== -1 && nextEmptyIndex < 6) {
                inputRefs.current[nextEmptyIndex]?.focus();
            } else {
                inputRefs.current[5]?.focus();
            }
        }
    };
    return (
        <div className="grid grid-cols-6 gap-2 mb-8">
            {verificationCode.map((digit, index) => (
                <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className={`aspect-square text-center text-xl border rounded-md bg-secondary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent`}
                    style={{ aspectRatio: "1" }}
                    autoFocus={index === 0}
                />
            ))}
        </div>
    )
}
