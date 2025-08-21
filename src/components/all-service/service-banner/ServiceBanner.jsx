import bgImageS from "@/assets/images/mechanic.png";
import { Button } from "@/components/ui/button";


export default function ServiceBanner({ text }) {
    return (
        <div className="relative h-[20vh] lg:h-80 overflow-hidden rounded-2xl container mt-10 mx-auto">
            <div
                className="absolute w-full inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bgImageS.src})`,
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
            <div className="relative h-full flex items-center justify-center ">
                <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white  banner-text bg-gray/50 px-3 py-2 md:px-6 md:py-3 lg: xl:py-4 xl:px-10 rounded-lg">
                    {text}
                </h1>
            </div>
            {/* <Button className="absolute top-6 right-6 bg-black bg-opacity-40 hover:bg-opacity-60 text-white border-0">
                Need assistance
            </Button> */}
        </div>
    )
}
