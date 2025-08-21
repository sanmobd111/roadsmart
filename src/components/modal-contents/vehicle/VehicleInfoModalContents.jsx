import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'; // Assuming Shadcn UI card is available
import { Switch } from '@/components/ui/switch'; // Assuming Shadcn UI switch is available
import EditOdometerModalContents from './vehicle-info-edit/EditOdometerModalContents';
import EditRiderNameModalContents from './vehicle-info-edit/EditRiderNameModalContents';




export default function VehicleInfoModalContents({ setCurrentModal, setRiderName, setOdometer, setRiderNameEdit, setOdometerEdit, riderName, odometer, riderNameEdit, odometerEdit }) {
    const vehicleDetails = [
    { label: "Plate", value: "Add Plate", onClick: () => {
        setCurrentModal("edit-harrier-specs")
    } },
    { label: "VIN", value: "Add VIN", onClick: () => {
        setCurrentModal("edit-harrier-specs")
    } },
    { label: "Year", value: "2018" },
    { label: "Make", value: "Toyota" },
    { label: "Model", value: "Harrier" },
    { label: "Variant", value: "Petrol SUV" },
    { label: "Type", value: "2.0 4WD" },
    { label: "Chassis", value: "AWD_U6" },
    { label: "Engine", value: "I6 Turbo DOHC" },
    { label: "Engine no.", value: "3ZR-1234567" },
    { label: "Color", value: "Black" },
    { label: "Use", value: "Personal" },
];
const spaceDetails = [
    { label: "Engine", value: "3.5 Petrol  I4" },
    { label: "Cylinder", value: "6" },
    { label: "Fuel type", value: "Petrol" },
    { label: "Drive type", value: "AWD" },
    { label: "Drive type", value: "AWD" },
    { label: "Body type", value: "Body type" },
];
    return (
        <div className="">
            <div className="w-full space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-800">Vehicle Info</h1>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Vehicle Active</span>
                        <Switch checked={true} />
                    </div>
                </div>

                {/* Ride Name Card */}
                <Card className="border-none shadow-none p-6">
                    <CardContent className="p-0">
                        <div className='flex items-center justify-between w-full mb-2 pb-2 border-b'>
                            <h2 className="text-lg font-semibold text-gray-800">Ride name</h2>
                            {/* <Pencil size={20} className="text-primary cursor-pointer" onClick={() => setCurrentModal("edit-rider-name")} /> */}
                            <p onClick={() => setRiderNameEdit(true)} className="text-gray cursor-pointer hover:underline text-base">Edit</p>
                        </div>
                        {
                            riderNameEdit ? <EditRiderNameModalContents setRiderName={setRiderName} setRiderNameEdit={setRiderNameEdit} /> : <p className="text-base text-gray-600">No name</p>
                        }

                    </CardContent>
                </Card>


                {/* Odometer Card */}
                <Card className="border-none shadow-none p-6">
                    <CardContent className="p-0">
                        <div className='flex items-center justify-between w-full mb-2 pb-2 border-b'>
                            <h2 className="text-lg font-semibold text-gray-800">Odometer</h2>
                            <p onClick={() => setOdometerEdit(true)} className="text-gray cursor-pointer hover:underline text-base">Edit</p>
                        </div>
                        {
                            odometerEdit ? <EditOdometerModalContents setOdometer={setOdometer} setOdometerEdit={setOdometerEdit} /> : <div className="flex space-x-1">
                                {odometer.split('').map((digit, index) => (
                                    <span
                                        key={index}
                                        className="w-14 h-14 flex items-center justify-center border border-gray-300 rounded-md text-base font-medium text-gray-800"
                                    >
                                        {digit}
                                    </span>
                                ))}
                            </div>
                        }
                    </CardContent>
                </Card>

                {/* Details Card */}
                <Card className="border-none shadow-none p-6">
                    <CardContent className="p-0">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Details</h2>
                        <div className="space-y-3">
                            {vehicleDetails.map((detail, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <span className="text-base text-gray-600">{detail.label}</span>
                                    {detail.type === "link" ? (
                                        <a href="#" className="text-gray-black underline text-base font-semibold">
                                            {detail.value}
                                        </a>
                                    ) : (
                                        <span className="text-base text-gray-black font-semibold cursor-pointer" onClick={detail?.onClick || null}>{detail.value}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-none p-6">
                    <CardContent className="p-0">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Specs</h2>
                        <p className="text-base text-gray-600 mb-4">Upload your Harrier specs using license plate or VIN</p>
                        <Button
                            onClick={() => setCurrentModal("edit-harrier-specs")}
                            variant="outline"
                            className="px-6 py-2 border border-primary text-primary rounded-full hover:bg-red-50 transition-colors duration-200"
                        >
                            Find my Harrier
                        </Button>
                    </CardContent>
                </Card>

                {/* Saved tire sizes Card */}
                <Card className="border-none shadow-none p-6">
                    <CardContent className="p-0">
                        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800">Saved tire sizes</h2>
                            <p onClick={() => setCurrentModal("edit-size")} className="text-gray cursor-pointer hover:underline text-base">Add</p>
                        </div>
                        <p className="text-base text-gray-600 mb-4">No saved sizes</p>
                        {/* <button className="flex items-center text-primary hover:underline text-base">
                            <Plus size={16} className="mr-1" /> Tire Size
                        </button> */}
                    </CardContent>
                </Card>

                {/* Registration Certificate Card */}
                <Card className="border-none shadow-none p-6">
                    <CardContent className="p-0">
                        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800">Certificate</h2>
                            {/* <button className="text-primary hover:underline text-sm" onClick={() => setCurrentModal("edit-document")}>+Upload</button> */}
                            <p onClick={() => setCurrentModal("add-certificate")} className="text-gray cursor-pointer hover:underline text-base">Add</p>
                        </div>
                        <p className="text-base text-gray-600">No Certificate</p>
                    </CardContent>
                </Card>


                {/* Registration Certificate Card */}
                <Card className="border-none shadow-none p-6">
                    <CardContent className="p-0">
                        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800">Reminders</h2>
                            <p onClick={() => setCurrentModal("add-reminder")} className="text-gray cursor-pointer hover:underline text-base">Add</p>
                        </div>
                        <p className="text-base text-gray-600">No reminders</p>
                    </CardContent>
                </Card>

                {/* Estimated value Card */}
                <Card className="border-none shadow-none p-6">
                    <CardContent className="p-0">
                        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800">Estimated value</h2>
                            <p onClick={() => setCurrentModal("edit-value")} className="text-gray cursor-pointer hover:underline text-base">Edit</p>
                        </div>
                        <p className="text-base text-gray-600">No value</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
