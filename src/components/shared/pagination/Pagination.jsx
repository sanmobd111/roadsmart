import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Pagination({ totalPage, currentPage, setCurrentPage }) {
    const visiblePages = () => {
        const pages = [];

        if (totalPage <= 5) {
            for (let i = 1; i <= totalPage; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, "...", totalPage);
            } else if (currentPage >= totalPage - 2) {
                pages.push(1, "...", totalPage - 2, totalPage - 1, totalPage);
            } else {
                pages.push(1, "...", currentPage, "...", totalPage);
            }
        }

        return pages;
    };

    const goToPage = (page) => {
        if (page === "..." || page === currentPage) return;
        setCurrentPage(page);
    };

    const goPrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goNext = () => {
        if (currentPage < totalPage) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="flex justify-center items-center space-x-1 mt-8 flex-wrap sm:space-x-2">
            <Button
                variant="ghost"
                size="sm"
                onClick={goPrev}
                className="cursor-pointer"
                disabled={currentPage === 1}
            >
                <ChevronLeft className="w-4 h-4" />
            </Button>

            {visiblePages().map((page, index) => (
                <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className={`cursor-pointer px-3 sm:px-4 ${currentPage === page ? "bg-primary text-white" : "text-gray-600"
                        }`}
                    onClick={() => goToPage(page)}
                    disabled={page === "..."}
                >
                    {page}
                </Button>
            ))}

            <Button
                variant="ghost"
                size="sm"
                onClick={goNext}
                className="cursor-pointer"
                disabled={currentPage === totalPage}
            >
                <ChevronRight className="w-4 h-4" />
            </Button>
        </div>
    );
}
