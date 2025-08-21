import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Label } from '@/components/ui/label'; // Assuming Shadcn UI label is available
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'; // Assuming Shadcn UI radio group is available
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Shadcn UI select is available
import { Textarea } from '@/components/ui/TextArea'; // Assuming Shadcn UI textarea is available
import Link from 'next/link';

export default function CancelRequestModalContents({ setIsModalOpen }) {
    return (
        <div className="w-full max-w-2xl space-y-6">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                Cancel Request #1005?
            </h1>

            {/* Why are you cancelling? */}
            <div className="mb-6">
                <label htmlFor="cancellationReason" className="block text-base font-semibold text-gray-800 mb-2">
                    Why are you cancelling?
                </label>
                <Select>
                    <SelectTrigger id="cancellationReason" className="w-full h-12">
                        <SelectValue placeholder="Select the reason for cancelling" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="reason1">Reason 1</SelectItem>
                        <SelectItem value="reason2">Reason 2</SelectItem>
                        <SelectItem value="reason3">Reason 3</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Note */}
            <div className="mb-6">
                <label htmlFor="note" className="block text-base font-semibold text-gray-800 mb-2">
                    Note
                </label>
                <Textarea
                    id="note"
                    placeholder="Type additional notes or feedback"
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-red-500 focus:border-red-500 min-h-[100px]"
                />
            </div>

            {/* Would you try Roadsmart again? */}
            <div className="mb-8">
                <label className="block text-base font-semibold text-gray-800 mb-2">
                    Would you try Roadsmart again?
                </label>
                <RadioGroup defaultValue="yes" className="flex space-x-6">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes" className="text-base text-gray-800">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no" className="text-base text-gray-800">No</Label>
                    </div>
                </RadioGroup>
            </div>

            {/* Contact Information Warning */}
            <div className="bg-red-50  p-4 rounded-md mb-8" role="alert">
                <p className="text-xs lg:text-sm text-gray">
                    Need to add or remove services, or update the location of your request? Contact our customer services
                    team at <a href="mailto:customersupport@roadsmartsolution.com" className="underline font-semibold text-primary">customersupport@roadsmartsolution.com</a> or 0953127771
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-start gap-4">
                <Link href="/cancel-request">
                    <Button
                        onClick={setIsModalOpen ? () => setIsModalOpen(false) : null}
                        className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200 w-full lg:w-auto"
                    >
                        Keep Request
                    </Button>
                </Link>
                <Button
                    variant="outline"
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                    Cancel Request
                </Button>
            </div>
        </div>
    );
}
