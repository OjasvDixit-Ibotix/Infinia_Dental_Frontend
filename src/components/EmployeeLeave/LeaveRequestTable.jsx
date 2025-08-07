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
             
              <th className="px-4 py-2"> Req ID</th>
              <th className="px-4 py-2">Leave Type</th>
              <th className="px-4 py-2">From</th>
              <th className="px-4 py-2">To</th>


              <th className="px-4 py-2">Days</th>
              <th className="px-4 py-2">Applied On</th>
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
                <td className="px-4 py-3">LV{String(item.id).padStart(5, '0')}</td>
                <td className="px-4 py-3">{capitalize(item.leave_type)}</td>
                <td className="px-4 py-3">{formatDate(item.from_date)}</td> 
                <td className="px-4 py-3"> {formatDate(item.to_date)}</td>
                <td className="px-4 py-3">{item.number_of_days}</td>
                <td className="px-4 py-3">--</td>


              <td className="px-1 py-3">
                <div className="relative w-44 h-9">
                  <select
                    onChange={(e) => handleStatusChange(e, item.id)}
                    className="w-full h-full appearance-none cursor-pointer bg-white border border-[#d9d9d9]   px-3 pr-8 py-[6px] rounded"
                    defaultValue={item.status}
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M6.399 7.57309L11.973 0.436638C11.9876 0.417991 11.9968 0.39558 11.9993 0.371981C12.0018 0.348381 11.9976 0.32455 11.9872 0.303224C11.9768 0.281898 11.9606 0.263942 11.9404 0.251418C11.9202 0.238895 11.897 0.232311 11.8732 0.232423L10.6495 0.232423C10.572 0.232423 10.4975 0.268834 10.4501 0.32899L6.00007 6.02802L1.55008 0.32899C1.50258 0.267251 1.42818 0.232423 1.35061 0.232423L0.126901 0.232423C0.0208359 0.232423 -0.0377378 0.354319 0.0271683 0.436638L5.60113 7.57309C5.64845 7.63374 5.70897 7.68281 5.7781 7.71656C5.84723 7.75031 5.92314 7.76785 6.00007 7.76785C6.07699 7.76785 6.15291 7.75031 6.22203 7.71656C6.29116 7.68281 6.35168 7.63374 6.399 7.57309Z" fill="#D9D9D9"/>
                    </svg>
                  </div>
                </div>
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