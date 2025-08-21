import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'; // Assuming Shadcn UI tabs are available

export default function EditHarrierSpecsModalContents() {
    return (
        <div className="">
            <div className="w-full space-y-6">

                {/* Description */}
                <p className="text-base text-gray-600 mb-8">
                    The easiest way to find details about your Harrier G is through a VIN lookup using your license plate number.
                </p>

                {/* Tabs for License Plate / VIN */}
                <Tabs defaultValue="license-plate" className="w-full">
                    <TabsList className="mb-6 bg-transparent justify-start p-0 border-gray-200">
                        <TabsTrigger
                            value="license-plate"
                            className="px-4 py-2 text-gray data-[state=active]:text-gray-800 !border-none !shadow-none"
                        >
                            License plate
                        </TabsTrigger>
                        <TabsTrigger
                            value="vin"
                            className="px-4 py-2 text-gray data-[state=active]:text-gray-800 !border-none !shadow-none"
                        >
                            VIN
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="license-plate">
                        <div className="mb-8">
                            <Input
                                id="licensePlateInput"
                                type="text"
                                placeholder="AAZ2819ZM"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                            />
                        </div>
                    </TabsContent>

                    <TabsContent value="vin">
                        <div className="mb-8">
                            <Input
                                id="vinInput"
                                type="text"
                                placeholder="Enter VIN"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
                            />
                        </div>
                    </TabsContent>
                </Tabs>

                {/* Search Button */}
                <Button
                    className="px-8 py-6 rounded-full bg-primary text-white hover:bg-primary transition-colors duration-200 w-full"
                >
                    Search
                </Button>
            </div>
        </div>
    );
}
