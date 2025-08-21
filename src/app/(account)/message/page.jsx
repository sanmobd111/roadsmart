// import React from 'react';
// import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'; // Assuming Shadcn UI tabs are available
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Assuming Shadcn UI card is available
// import { ArrowLeft } from 'lucide-react'; // Using lucide-react for the back arrow icon
// import { MdArrowBackIosNew } from 'react-icons/md';


// export default function Message() {
//     const messagesList = [
//         {
//             id: 1,
//             initials: "DN",
//             color: "bg-primary",
//             name: "Donald Nutt",
//             preview: "It is a long established fact that",
//             time: "02/04/24 8:20PM",
//         },
//         {
//             id: 2,
//             initials: "DN",
//             color: "bg-orange-500",
//             name: "Lorem Ipsum",
//             preview: "It is a long established fact that",
//             time: "02/04/24 8:20PM",
//         },
//         {
//             id: 3,
//             initials: "DN",
//             color: "bg-blue-600",
//             name: "Lorem Ipsum",
//             preview: "It is a long established fact that",
//             time: "02/04/24 8:20PM",
//         },
//     ];

//     const chatMessages = [
//         {
//             id: 1,
//             initials: "DN",
//             color: "bg-primary",
//             message: "It is a long established fact that a reader will be distracted by the readable content of a page",
//             time: "02/04/24 8:20PM",
//             isSelf: false,
//         },
//         {
//             id: 2,
//             initials: "TB",
//             color: "bg-orange-500",
//             message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//             time: "02/04/24 8:20PM",
//             isSelf: true, // Assuming this is a sent message
//         },
//         {
//             id: 3,
//             initials: "DN",
//             color: "bg-primary",
//             message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//             time: "02/04/24 8:20PM",
//             isSelf: false,
//         },
//     ];

//     return (
//         <div className="font-sans text-gray-900 p-6 flex items-center justify-center">
//             <div className="bg-white rounded-lg w-full max-w-6xl h-[80vh] flex flex-col">
//                 {/* Top Bar */}
//                 <header className="flex items-center p-4 border-b border-gray-200 rounded-t-lg relative">
//                     <div className="mr-4 cursor-pointer rounded-sm absolute right-[100%] top-4 p-2 bg-primary">
//                         <MdArrowBackIosNew size={15} className='text-white' />
//                     </div>
//                     <h1 className="text-xl font-semibold text-gray-800">Messages</h1>
//                 </header>

//                 <div className="flex flex-1 overflow-hidden">
//                     {/* Left Pane - Message List */}
//                     <div className="w-1/3 border-r border-gray-200 bg-white flex flex-col">
//                         <div className="p-4 border-b border-gray-200">
//                             <h2 className="text-lg font-semibold mb-2">Messages</h2>
//                             <Tabs defaultValue="all" className="w-full">
//                                 <TabsList className="bg-transparent justify-start p-0">
//                                     <TabsTrigger
//                                         value="all"
//                                         className="px-3 py-1 text-gray-600 data-[state=active]:text-primary !shadow-none rounded-md transition-colors duration-200 text-sm"
//                                     >
//                                         All
//                                     </TabsTrigger>
//                                     <TabsTrigger
//                                         value="unread"
//                                         className="px-3 py-1 text-gray-600 data-[state=active]:text-primary !shadow-none rounded-md transition-colors duration-200 text-sm"
//                                     >
//                                         Unread (10)
//                                     </TabsTrigger>
//                                 </TabsList>
//                             </Tabs>
//                         </div>
//                         <div className="flex-1 overflow-y-auto">
//                             {messagesList.map((message) => (
//                                 <Card key={message.id} className="border-none rounded-none shadow-none hover:bg-secondary cursor-pointer">
//                                     <CardContent className="p-4 flex items-center">
//                                         <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${message.color} mr-3`}>
//                                             {message.initials}
//                                         </div>
//                                         <div className="flex-1">
//                                             <div className="flex justify-between items-center">
//                                                 <CardTitle className="text-base font-semibold text-gray-800">{message.name}</CardTitle>
//                                                 <span className="text-xs text-gray-400">{message.time}</span>
//                                             </div>
//                                             <CardDescription className="text-sm text-gray-500 truncate">
//                                                 {message.preview}
//                                             </CardDescription>
//                                         </div>
//                                     </CardContent>
//                                 </Card>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Right Pane - Chat View */}
//                     <div className="w-2/3 flex flex-col">
//                         <div className="h-[105px] px-4 border-b border-gray-200 flex items-center">
//                             <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm bg-primary mr-3`}>
//                                 DN
//                             </div>
//                             <h3 className="text-lg font-semibold text-gray-800">Lorem Ipsum</h3>
//                         </div>
//                         <div className="flex-1 overflow-y-auto p-4 space-y-4">
//                             {chatMessages.map((msg) => (
//                                 <div key={msg.id} className={`flex ${msg.isSelf ? 'justify-end' : 'justify-start'}`}>
//                                     {!msg.isSelf && (
//                                         <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${msg.color} mr-2`}>
//                                             {msg.initials}
//                                         </div>
//                                     )}
//                                     <div className={`p-3 rounded-lg max-w-xs ${msg.isSelf ? 'bg-red-100 text-gray-800' : 'bg-gray-200 text-gray-800'}`}>
//                                         <p className="text-sm">{msg.message}</p>
//                                         <span className="text-xs text-gray-500 block text-right mt-1">{msg.time}</span>
//                                     </div>
//                                     {msg.isSelf && (
//                                         <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${msg.color} ml-2`}>
//                                             {msg.initials}
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="p-4 border-t border-gray-200 bg-white">
//                             <textarea
//                                 // type="text"
//                                 placeholder="Type a message"
//                                 className="h-20 resize-none flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 block w-full mb-4"
//                             />
//                             <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200">
//                                 Send
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


"use client"

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'; // Assuming Shadcn UI tabs are available
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Assuming Shadcn UI card is available
import { ArrowLeft, Send } from 'lucide-react'; // Using lucide-react for the back arrow and send icon

export default function App() {
    const [showMessagesList, setShowMessagesList] = React.useState(true); // State to control visibility of message list on small screens

    const messagesList = [
        {
            id: 1,
            initials: "DN",
            color: "bg-red-600", // Changed from bg-primary
            name: "Donald Nutt",
            preview: "It is a long established fact that",
            time: "02/04/24 8:20PM",
        },
        {
            id: 2,
            initials: "DN",
            color: "bg-orange-500",
            name: "Lorem Ipsum",
            preview: "It is a long established fact that",
            time: "02/04/24 8:20PM",
        },
        {
            id: 3,
            initials: "DN",
            color: "bg-blue-600",
            name: "Lorem Ipsum",
            preview: "It is a long established fact that",
            time: "02/04/24 8:20PM",
        },
        {
            id: 4,
            initials: "DN",
            color: "bg-red-600",
            name: "Lorem Ipsum",
            preview: "It is a long established fact that",
            time: "02/04/24 8:20PM",
        },
    ];

    const chatMessages = [
        {
            id: 1,
            initials: "DN",
            color: "bg-red-600", // Changed from bg-primary
            message: "It is a long established fact that a reader will be distracted by the readable content of a page",
            time: "02/04/24 8:20PM",
            isSelf: false,
        },
        {
            id: 2,
            initials: "TB",
            color: "bg-orange-500",
            message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            time: "02/04/24 8:20PM",
            isSelf: true, // Assuming this is a sent message
        },
        {
            id: 3,
            initials: "DN",
            color: "bg-red-600", // Changed from bg-primary
            message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            time: "02/04/24 8:20PM",
            isSelf: false,
        },
    ];

    return (
        <div className="min-h-screen font-sans text-gray-900 p-6 flex items-center justify-center"> {/* Changed bg-gray-900 to bg-gray-100 for better contrast */}
            <div className="bg-white rounded-lg w-full max-w-6xl h-full lg:h-[80vh] flex flex-col"> {/* Adjusted height for responsiveness */}
                {/* Top Bar */}
                <header className="flex items-center p-4 border-b border-gray-200 rounded-t-lg">
                    {/* Back button visible only on small screens when chat is active */}
                    {!showMessagesList && (
                        <button
                            onClick={() => setShowMessagesList(true)}
                            className="mr-4 cursor-pointer p-2 rounded-md bg-red-600 text-white lg:hidden" // Changed bg-primary to bg-red-600
                            aria-label="Back to messages list"
                        >
                            <ArrowLeft size={15} />
                        </button>
                    )}
                    <h1 className="text-xl font-semibold text-gray-800">Messages</h1>
                </header>

                <div className="flex flex-1 overflow-hidden flex-col lg:flex-row"> {/* Added flex-col and lg:flex-row */}
                    {/* Left Pane - Message List */}
                    <div className={`w-full lg:w-1/3 border-r border-gray-200 bg-white flex-col ${showMessagesList ? 'flex' : 'hidden lg:flex'}`}> {/* Conditional display */}
                        <div className="p-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold mb-2">Messages</h2>
                            <Tabs defaultValue="all" className="w-full">
                                <TabsList className="bg-transparent justify-start p-0">
                                    <TabsTrigger
                                        value="all"
                                        className="px-3 py-1 text-gray-600 data-[state=active]:text-red-600 data-[state=active]:bg-red-100 rounded-md transition-colors duration-200 text-sm !shadow-none" // Changed text-primary to text-red-600
                                    >
                                        All
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="unread"
                                        className="px-3 py-1 text-gray-600 data-[state=active]:text-red-600 data-[state=active]:bg-red-100 rounded-md transition-colors duration-200 text-sm !shadow-none" // Changed text-primary to text-red-600
                                    >
                                        Unread (10)
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {messagesList.map((message) => (
                                <Card
                                    key={message.id}
                                    className="border-b border-gray-100 rounded-none shadow-none hover:bg-gray-100 cursor-pointer" // Changed hover:bg-secondary to hover:bg-gray-100
                                    onClick={() => setShowMessagesList(false)} // Hide message list and show chat on click
                                >
                                    <CardContent className="p-4 flex items-center">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${message.color} mr-3`}>
                                            {message.initials}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center">
                                                <CardTitle className="text-base font-semibold text-gray-800">{message.name}</CardTitle>
                                                <span className="text-xs text-gray-400">{message.time}</span>
                                            </div>
                                            <CardDescription className="text-sm text-gray-500 truncate">
                                                {message.preview}
                                            </CardDescription>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Right Pane - Chat View */}
                    <div className={`w-full lg:w-2/3 flex-col ${!showMessagesList ? 'flex' : 'hidden lg:flex'}`}> {/* Conditional display */}
                        <div className="p-4 border-b border-gray-200 flex items-center h-[72px]"> {/* Adjusted height to match header height */}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm bg-red-600 mr-3`}> {/* Changed bg-primary to bg-red-600 */}
                                DN
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">Lorem Ipsum</h3>
                        </div>
                        <div className="overflow-y-auto p-4 space-y-4">
                            {chatMessages.map((msg) => (
                                <div key={msg.id} className={`flex gap-2 items-start ${msg.isSelf ? 'justify-end' : 'justify-start'}`}>
                                    {!msg.isSelf && (
                                        <div className={`w-[10%] lg:w-[4.5%] aspect-square rounded-full flex items-center justify-center text-white font-bold text-xs ${msg.color}`}>
                                            {msg.initials}
                                        </div>
                                    )}
                                    <div className={`w-[85%] p-3 rounded-lg max-w-xs ${msg.isSelf ? 'bg-red-100 text-gray-800' : 'bg-gray-200 text-gray-800'}`}>
                                        <p className="text-sm">{msg.message}</p>
                                        <span className="text-xs text-gray-500 block text-right mt-1">{msg.time}</span>
                                    </div>
                                    {msg.isSelf && (
                                        <div className={`w-[10%] lg:w-[4.5%] aspect-square rounded-full flex items-center justify-center text-white font-bold text-xs ${msg.color} ml-2`}>
                                            {msg.initials}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="p-4 border-t border-gray-200 bg-white flex flex-col gap-4">
                            <textarea
                                placeholder="Type a message"
                                className="h-12 lg:h-32 resize-none flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 block w-full mr-4" // Adjusted height and removed mb-4
                            />
                            <button className="w-fit px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"> {/* Changed bg-primary to bg-red-600 */}
                                {/* <Send size={20} /> Replaced "Send" text with Send icon */}
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
