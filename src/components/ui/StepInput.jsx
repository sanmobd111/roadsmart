import { useState } from "react";


export default function StepInput({ value, setValue, type = "text", suggestions }) {
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);
  const handleChange = (e) => {
    if (type === "number") {
      const newValue = e.target.value.replace(/[^0-9]/g, "");
      setValue(newValue)
      return
    }
    setValue(e.target.value)
  }

  return (
    <div className='border-2 border-gray-300 rounded-sm md:rounded-lg relative'>
      <input
        onFocus={() => setIsSuggestionOpen(true)}
        // onBlur={() => setIsSuggestionOpen(false)}
        value={value} type="text" className='outline-none p-1 lg:px-2 py-3 w-full text-[10px] md:text-xs lg:text-sm' onChange={handleChange} />
      {
        isSuggestionOpen && suggestions?.length > 0 && <div className="absolute top-full left-0 z-[10000000] bg-white p-2 rounded-sm shadow-md max-h-52 overflow-y-auto min-w-[100px]">
          {
            suggestions.map((suggestion, index) => (
              <div
                key={index}
                onClick={() => {
                  setValue(suggestion.value)
                  setIsSuggestionOpen(false)
                }}
                className="cursor-pointer hover:bg-gray-100 p-2 rounded-sm"
              >
                {suggestion.label}
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}
