import { useState, useMemo, useEffect } from 'react';

export const usePagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Memoize the total number of pages
    const totalPages = useMemo(() => {
        if (!data || data.length === 0) return 1;
        return Math.ceil(data.length / itemsPerPage);
    }, [data, itemsPerPage]);

    // Reset to page 1 if the source data changes (e.g., after a search filter is applied)
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [data, totalPages, currentPage]);


    // Functions to change the current page
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

    // Get the data for the current page
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    }, [data, currentPage, itemsPerPage]);

    return {
        // Data for the current page
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