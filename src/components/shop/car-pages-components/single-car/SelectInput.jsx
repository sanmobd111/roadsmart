import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown } from "lucide-react"

export default function SelectInput({ value, setValue }) {

    return (
        <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="payment-period" className="text-sm font-medium text-gray-700">
                Payment Period (In Months)
            </Label>
            <Select value={value} onValueChange={(currentVal) => setValue(currentVal)} >
                <SelectTrigger id="payment-period" className="w-full relative">
                    <SelectValue placeholder="Select" />
                    <ChevronDown className="h-4 w-4 text-red-500 shrink-0 absolute" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">1 Month</SelectItem>
                    <SelectItem value="3">3 Months</SelectItem>
                    <SelectItem value="6">6 Months</SelectItem>
                    <SelectItem value="12">12 Months</SelectItem>
                    <SelectItem value="24">24 Months</SelectItem>
                    <SelectItem value="36">36 Months</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
