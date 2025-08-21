import combinedClasses from '@/utils/tailwind'
import { Card, CardContent } from '../../ui/card'

export default function CollapseAddress({ containerClassName }) {
    return (
        <div className={combinedClasses("mt-20 w-[70%] mx-auto lg:mx-0 lg:w-[25%]", containerClassName)}>
            <div className="w-full mx-auto">
                <Card className="border-none shadow-none border-gray-200">
                    <CardContent className="space-y-6 lg:space-y-16 px-0">
                        {/* Location Section */}
                        <div>
                            <button
                                onClick={() => toggleSection("location")}
                                className="flex items-center justify-between w-full pb-3 border-b border-gray-200"
                            >
                                <h3 className="text-base font-bold text-gray-black">Location</h3>
                            </button>

                            <div className="pt-4 space-y-1 text-sm text-gray-black p-2 rounded-lg">
                                <div>15 Blue Stare Road</div>
                                <div>23 CA New York City</div>
                                <div>NY 345678</div>
                            </div>
                        </div>

                        {/* Incident Details Section */}
                        <div>
                            <button
                                onClick={() => toggleSection("incident")}
                                className="flex items-center justify-between w-full pb-3 border-b border-gray-200"
                            >
                                <h3 className="text-base font-bold text-gray-black">Incident details</h3>
                            </button>

                            <div className="pt-4 space-y-4 text-sm p-2 rounded-lg">
                                <div>
                                    <div className="text-gray-secondary mb-1">Incident type</div>
                                    <div className="font-medium text-gray">Multi vehicle Accident</div>
                                </div>

                                <div>
                                    <div className="text-gray-secondary mb-1">Incident date</div>
                                    <div className="font-medium text-gray">31 Oct 2024</div>
                                </div>

                                <div>
                                    <div className="text-gray-secondary mb-1">Vehicle</div>
                                    <div className="font-medium text-gray">2021 BMW X3 ALG 38</div>
                                </div>

                                <div>
                                    <div className="text-gray-secondary mb-1">Incident town</div>
                                    <div className="font-medium text-gray">Lusaka</div>
                                </div>

                                <div>
                                    <div className="text-gray-secondary mb-1">Damages</div>
                                    <div className="font-medium text-gray">Own, Third Party Property</div>
                                </div>

                                <div>
                                    <div className="text-gray-secondary mb-1">Description</div>
                                    <div className="font-medium text-gray">
                                        Was joining great east road and vehicle cut in front and hit into my vehicle
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}