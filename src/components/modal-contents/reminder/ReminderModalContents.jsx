import { Plus } from 'lucide-react'; // For the plus icon
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'; // Assuming Shadcn UI tabs are available

export default function ReminderModalContents({ setCurrentModal }) {
    return (
        <div className="">
            <div className="w-full max-w-2xl space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-800">Reminders</h1>
                    <Button
                        onClick={() => setCurrentModal("add-reminder")}
                        variant="outline"
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200 flex items-center"
                    >
                        <Plus size={16} className="mr-1" /> Add
                    </Button>
                </div>

                {/* Sub-tabs */}
                <Tabs defaultValue="all" className="w-full mb-8">
                    <TabsList className="mb-6 bg-transparent justify-start p-0">
                        <TabsTrigger
                            value="all"
                            className="px-4 py-2 text-gray data-[state=active]:text-gray-800 !border-none !shadow-none"
                        >
                            All
                        </TabsTrigger>
                        <TabsTrigger
                            value="active"
                            className="px-4 py-2 text-gray data-[state=active]:text-gray-800 !border-none !shadow-none"
                        >
                            Active
                        </TabsTrigger>
                        <TabsTrigger
                            value="inactive"
                            className="px-4 py-2 text-gray data-[state=active]:text-gray-800 !border-none !shadow-none"
                        >
                            Inactive
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        {/* No Reminders Found Message */}
                        <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                            <p className="text-lg">No reminders found</p>
                        </div>
                    </TabsContent>
                    <TabsContent value="active">
                        <div className="text-center text-gray-500 py-10">
                            No active reminders.
                        </div>
                    </TabsContent>
                    <TabsContent value="inactive">
                        <div className="text-center text-gray-500 py-10">
                            No inactive reminders.
                        </div>
                    </TabsContent>
                </Tabs>

                {/* Add Reminder Button */}
                <div className="flex justify-center">
                    <Button
                        onClick={() => setCurrentModal("add-reminder")}
                        className="px-8 py-6 bg-primary text-white rounded-full hover:bg-primary transition-colors duration-200"
                    >
                        Add Reminder
                    </Button>
                </div>
            </div>
        </div>
    );
}
