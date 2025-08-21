

import Container from "@/components/shared/container/Container";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { useState } from "react";


export default function Location({ handleNext, data, setData }) {

    const [locations, setLocations] = useState(data);


    const handleSubmit = () => {
        setData({ locations })
        handleNext()
    }

    return (
        <Container className={"my-6 lg:my-20"}>

            <div className="flex-1 flex items-center justify-center ">
                {/* Location Page Content */}
                <div className="w-full max-w-2xl text-center">
                    <div className="space-y-4">
                        {/* Main Heading */}
                        <h1 className="text-2xl lg:text-4xl md:text-5xl font-bold text-gray-900">
                            What’s your address?
                        </h1>

                        {/* Subtitle */}
                        <p className="text-gray-600 text-sm lg:text-lg max-w-xl mx-auto leading-relaxed">
                            Where the service is required
                        </p>

                        {/* Address Input Form */}
                        <form action="" className=" lg:pb-20 rounded-xl">
                            <div className="space-y-6">
                                <div className="relative max-w-lg mx-auto">
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                        <div className="w-8 h-8 rounded-sm flex items-center justify-center">
                                            <MapPin className="w-4 h-4 text-primary" />
                                        </div>
                                    </div>
                                    <Input
                                        value={locations}
                                        onChange={(e) => setLocations(e.target.value)}
                                        type="text"
                                        placeholder="Search for area, street name...."
                                        className="pl-16 pr-4 py-4 text-sm lg:text-lg border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent h-14 bg-white"
                                    />
                                </div>

                                {/* Next Button */}
                                <div className="max-w-lg mx-auto">
                                    <button onClick={handleSubmit} className="w-full bg-primary hover:bg-primary text-white rounded-lg font-medium text-lg h-10 lg:h-14 transition-colors flex justify-center items-center">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
}
