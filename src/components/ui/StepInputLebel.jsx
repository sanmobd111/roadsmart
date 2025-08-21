import { Label } from "@/components/ui/label";

export default function StepInputLebel({ htmlFor, text, className }) {
    return (
        <Label className={`text-xs md:text-base font-normal text-gray-black mb-2 ${className}`} htmlFor={htmlFor}>
            {text}
        </Label>
    )
}
