"use client";

import { useEffect } from "react";

export default function ZoomResponsiveFont() {
    useEffect(() => {
        function updateFontSize() {
            const zoom = window.devicePixelRatio;
            console.log(zoom)
            const width = window.innerWidth;
            const fontSize = (width / 100) * 10 * zoom;
            // document.body.style.fontSize = `${fontSize}px`;
        }

        updateFontSize(); // Set once on mount
        window.addEventListener("resize", updateFontSize);
        window.addEventListener("load", updateFontSize);

        return () => {
            window.removeEventListener("resize", updateFontSize);
            window.removeEventListener("load", updateFontSize);
        };
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <h1 className="font-bold text-center text-gray-800">
                This font size is controlled by JS and zoom level
            </h1>
        </div>
    );
}
