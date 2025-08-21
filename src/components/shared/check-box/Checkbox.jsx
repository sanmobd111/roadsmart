// import CheckboxPrimitive from "@components/ui/checkbox.jsx"

import { Checkbox as CheckboxPrimitive } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export default function Checkbox({ checked, setChecked, label, isPrimary }) {
    return (
        <div className="flex gap-2 items-center">
            <CheckboxPrimitive
                checked={checked}
                onCheckedChange={setChecked}
                className={cn("border-2 border-gray-300 ", isPrimary ? "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" : "data-[state=checked]:border-gray-300 data-[state=checked]:bg-white data-[state=checked]:text-red-500")}
            />
            {
                label && <label className="text-xs text-gray-600">{label}</label>
            }
        </div>
    )
}
