import { useState, useMemo, useEffect } from 'react';

export const usePagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = useMemo(() => {
        if (!data || data.length === 0) return 1;
        return Math.ceil(data.length / itemsPerPage);
    }, [data, itemsPerPage]);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [data, totalPages, currentPage]);


    const nextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const goToPage = (page) => {
        const pageNumber = Math.max(1, Math.min(page, totalPages));
        setCurrentPage(pageNumber);
    };

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    }, [data, currentPage, itemsPerPage]);

    return {
        paginatedData,
        // State
        currentPage,
        totalPages,
        // Helper Functions
        nextPage,
        prevPage,
        goToPage,
        // Boolean flags for disabling buttons
        canNextPage: currentPage < totalPages,
        canPrevPage: currentPage > 1,
    };
};