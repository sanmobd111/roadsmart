"use client"

import Container from '@/components/shared/container/Container';
import Title from '@/components/ui/Title';
import React from 'react';

export default function page() {
    return (
        <Container className={"block"}>
            <Title text={"Tell us about the incident "} className={"mb-4 pb-4 border-b"} />
            <IncidentReport />
        </Container>
    )
}


import { CalendarIcon, CloudUpload, MapPin, Search } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/TextArea';

// Main App component
function IncidentReport() {
    // State for form fields (optional, but good practice for controlled components)
    const [incidentType, setIncidentType] = React.useState('');
    const [vehicle, setVehicle] = React.useState('');
    const [incidentDate, setIncidentDate] = React.useState('');
    const [incidentTown, setIncidentTown] = React.useState('');
    const [damageType, setDamageType] = React.useState('');
    const [injuryLossOfLife, setInjuryLossOfLife] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [notifyInsurer, setNotifyInsurer] = React.useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            incidentType,
            vehicle,
            incidentDate,
            incidentTown,
            damageType,
            injuryLossOfLife,
            description,
            notifyInsurer,
        });
        // Add logic to save data or proceed to file a claim
    };

    return (
        <div className="min-h-screen flex items-center justify-center sm:p-6 lg:p-8 font-sans">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First row of inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="incidentType" className="mb-2 block text-gray-700 text-base">What type of incident is it?</Label>
                            <Select onValueChange={setIncidentType} value={incidentType}>
                                <SelectTrigger id="incidentType" className="w-full !h-12 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                                    <SelectValue placeholder="Lorem Ipsum" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="type1">Type 1</SelectItem>
                                    <SelectItem value="type2">Type 2</SelectItem>
                                    <SelectItem value="type3">Type 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="vehicle" className="mb-2 block text-gray-700 text-base">Vehicle involved</Label>
                            <div className="relative">
                                <Input
                                    id="vehicle"
                                    type="text"
                                    placeholder="Search vehicle"
                                    className="w-full h-12 rounded-md border border-gray-300 pr-10 pl-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    value={vehicle}
                                    onChange={(e) => setVehicle(e.target.value)}
                                />
                                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                            </div>
                        </div>
                    </div>

                    {/* Second row of inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="incidentDate" className="mb-2 block text-gray-700 text-base">When was the incident</Label>
                            <div className="relative">
                                <Input
                                    id="incidentDate"
                                    type="date" // Using type="date" for a native date picker
                                    className="w-full h-12 rounded-md border border-gray-300 pr-10 pl-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    value={incidentDate}
                                    onChange={(e) => setIncidentDate(e.target.value)}
                                />
                                {/* CalendarIcon is typically for visual cue, native date input handles the picker */}
                                <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="incidentTown" className="mb-2 block text-gray-700 text-base">In which town was the incident?</Label>
                            <div className="relative">
                                <Input
                                    id="incidentTown"
                                    type="text"
                                    className="w-full h-12 rounded-md border border-gray-300 pr-10 pl-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    value={incidentTown}
                                    onChange={(e) => setIncidentTown(e.target.value)}
                                />
                                <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                            </div>
                        </div>
                    </div>

                    {/* Third row of inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="damageType" className="mb-2 block text-gray-700 text-base">What damaged occurred during incident?</Label>
                            <Select onValueChange={setDamageType} value={damageType}>
                                <SelectTrigger id="damageType" className="w-full !h-12 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                                    <SelectValue placeholder="Own damage; Third Party Dam..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="own_damage">Own Damage</SelectItem>
                                    <SelectItem value="third_party_damage">Third Party Damage</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="injuryLossOfLife" className="mb-2 block text-gray-700 text-base">Where there any injury or loss of life?</Label>
                            <Select onValueChange={setInjuryLossOfLife} value={injuryLossOfLife}>
                                <SelectTrigger id="injuryLossOfLife" className="w-full !h-12 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                                    <SelectValue placeholder="No" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="yes">Yes</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Description textarea */}
                    <div>
                        <Label htmlFor="description" className="mb-2 block text-gray-700 text-base">Briefly describe what happened</Label>
                        <Textarea
                            id="description"
                            placeholder=""
                            className="w-full rounded-md border border-gray-300 px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    {/* Upload photos section */}
                    <div>
                        <Label className="mb-2 block text-gray-700 text-base">Upload photos of the incident (optional)</Label>
                        <div className="grid grid-cols-5 gap-4">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-red-300 rounded-md text-red-500 aspect-square cursor-pointer hover:bg-red-50 transition-colors"
                                >
                                    <CloudUpload className="h-4 w-4 lg:h-8 lg:w-8" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Notify insurer checkbox */}
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="notifyInsurer"
                            checked={notifyInsurer}
                            onCheckedChange={setNotifyInsurer}
                            className="border-red-500 data-[state=checked]:bg-red-500 data-[state=checked]:text-white"
                        />
                        <Label htmlFor="notifyInsurer" className="text-gray-700 text-base">
                            Notify insurer of incident
                        </Label>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                        <div className='grid grid-cols-2 lg:w-[60%] mx-auto gap-4'>
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full sm:w-auto rounded-md px-6 py-2 text-gray-700 border border-gray-300 hover:bg-gray-100 transition-colors text-lg"
                            >
                                Save
                            </Button>
                            <Button
                                type="submit"
                                className="w-full sm:w-auto rounded-md px-6 py-2 bg-primary text-white hover:bg-primary transition-colors text-lg"
                            >
                                Proceed to file a claim
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
