// AllLeaveTable.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaves } from '../../slices/leaveSlice';
import { usePagination } from '../../utils/customHooks/usePagination';
import PaginationControls from '../PaginationControls';
const AllLeaveTable = () => {
  const dispatch = useDispatch();
  const { leaves, loading, error } = useSelector((state) => state.leave);

  useEffect(() => {
    dispatch(fetchLeaves());
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const capitalize = (str) => typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : '';

  const statusColorMap = {
    Pending: 'bg-[#9A7FAC] text-white',
    Rejected: 'bg-[#EFCD78] text-white',
    Approved: 'bg-[#668E8C] text-white',
  };

    const {
         paginatedData,
         currentPage,
         totalPages,
         nextPage,
         prevPage,
         goToPage
     } = usePagination(leaves, 5);


  return (
          <>

    <div className="w-full bg-[#FFFFFF99] rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">All Leave</h2>
      <div className="overflow-x-auto">
        
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="px-4 py-2">S. No</th>
              <th className="px-4 py-2">Leave Req No</th>
              <th className="px-4 py-2">Department</th>
              <th className="px-4 py-2">Employee Name</th>
              <th className="px-4 py-2">Leave Type</th>
              <th className="px-4 py-2">Date (Start–End)</th>
              <th className="px-4 py-2">Total Days</th>
              <th className="px-4 py-2">Leave Status</th>
              <th className="px-4 py-2">Request Reason</th>
              <th className="px-4 py-2">Approved Date</th>
              <th className="px-4 py-2">Approved By</th>
            </tr>
          </thead>
          <tbody>
         {loading ? (
            <tr>
            <td colSpan="8" className="text-center py-10 text-gray-500">
              Loading...
            </td>
          </tr>
          )
           : paginatedData.length > 0 ? (
            <>
            {paginatedData.map((item, index) => (
              <tr key={item.id} className="border-b last:border-none">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">LV{String(item.id).padStart(5, '0')}</td>
                <td className="px-4 py-3">{item.department || '-'}</td>
                <td className="px-4 py-3">{item.user_id}</td>
                <td className="px-4 py-3">{capitalize(item.leave_type)}</td>
                <td className="px-4 py-3">{formatDate(item.from_date)} - {formatDate(item.to_date)}</td>
                <td className="px-4 py-3">{item.number_of_days}</td>
                <td className="px-4 py-3">
                  <span className={`px-3 py-1 rounded-sm text-xs font-normal ${statusColorMap[capitalize(item.status)]}`}>
                    {capitalize(item.status)}
                  </span>
                </td>
                <td className="px-4 py-3">{item.reason || '-'}</td>
                <td className="px-4 py-3">{item.action_at ? formatDate(item.action_at) : ''}</td>
                <td className="px-4 py-3">{item.action_by || ''}</td>
              </tr>
            ))}
            </>

          ) : (
            <tr>
              <td colSpan={11} className="text-center py-10 text-gray-500">
                No leave requests found.
              </td>
            </tr>
          )}    
          </tbody>
        </table>
      </div>

    </div>
      <PaginationControls
                   currentPage={currentPage}
                   totalPages={totalPages}
                   nextPage={nextPage}
                   prevPage={prevPage}
                   goToPage={goToPage}
          />
          </>

  );
};

export default AllLeaveTable;
