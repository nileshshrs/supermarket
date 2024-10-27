import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface Pagination {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Paginate: React.FC<Pagination> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    return (
        <Pagination className="mt-4">
            <PaginationContent className="flex flex-wrap justify-center">
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPage > 1) {
                                onPageChange(currentPage - 1);
                            }
                        }}
                        style={{
                            opacity: currentPage === 1 ? 0.5 : 1,
                            cursor: currentPage === 1 ? "not-allowed" : "pointer",
                        }}
                    />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, index) => (
                    <PaginationItem key={index + 1}>
                        <PaginationLink
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                onPageChange(index + 1);
                            }}
                            style={{
                                fontWeight: currentPage === index + 1 ? "bold" : "normal",
                            }}
                        >
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPage < totalPages) {
                                onPageChange(currentPage + 1);
                            }
                        }}
                        style={{
                            opacity: currentPage === totalPages ? 0.5 : 1,
                            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                        }}
                    />
                </PaginationItem>
            </PaginationContent>
            {/* Responsive Styles */}
            <style jsx>{`
          @media (max-width: 370px) {
            .pagination-item {
              margin: 0 2px; // Adjust margin to reduce spacing
              font-size: 0.8rem; // Reduce font size for smaller screens
            }
          }
        `}</style>
        </Pagination>
    )
}

export default Paginate