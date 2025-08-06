// LeaveRequestTable.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaves} from '../../slices/leaveSlice';
import { toast } from 'sonner';
import apiClient from '../../utils/api/api';

const LeaveRequestTable = () => {
  const dispatch = useDispatch();
  const { leaves, loading, error } = useSelector((state) => state.leave);

  useEffect(() => {
    dispatch(fetchLeaves());
  }, [dispatch]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const capitalize = (str) => typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : '';

  const handleStatusChange = async (e, id) => {
    const newStatus = e.target.value;
    try {
     await apiClient.put(`/admin-leaves/${id}`, {
        status: newStatus,
      });
      toast.success('Status updated successfully');
    } catch (err) {
      console.error(err);
      toast.error('Failed to update status');
    }
  };

  return (
    <div className="w-full bg-[#FFFFFF99] rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Leave Requests</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="px-4 py-2">S. No</th>
              <th className="px-4 py-2">Leave Req No</th>
              <th className="px-4 py-2">Employee</th>
              <th className="px-4 py-2">Leave Type</th>
              <th className="px-4 py-2">Dates</th>
              <th className="px-4 py-2">Total Days</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
             {loading ? (
            <p>Loading...</p>
          )
           : leaves.length > 0 ? (
            <>
            {leaves.map((item, index) => (
              <tr key={item.id} className="border-b last:border-none">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">LV{String(item.id).padStart(5, '0')}</td>
                <td className="px-4 py-3">{item.user_id}</td>
                <td className="px-4 py-3">{capitalize(item.leave_type)}</td>
                <td className="px-4 py-3">{formatDate(item.from_date)} - {formatDate(item.to_date)}</td>
                <td className="px-4 py-3">{item.number_of_days}</td>
                <td className="px-4 py-3">
                  <select
                    onChange={(e) => handleStatusChange(e, item.id)}
                    className="w-[99px] h-[22px] bg-transparent text-[#333] text-[14px] leading-[22px] font-normal appearance-none focus:outline-none border border-gray-300 rounded px-1"
                    defaultValue={item.status}
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
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
  );
};

export default LeaveRequestTable;