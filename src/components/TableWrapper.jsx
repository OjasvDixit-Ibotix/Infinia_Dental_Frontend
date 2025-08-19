// import React from 'react';
// import apiClient from '../utils/api/api';
// import { toast } from 'sonner';

// const TableWrapper = ({ title, columns, rows, statusColorMap = {} }) => {

//   const changeStatus = async (e, id) => {
//     const newStatus = e.target.value;

//     try {
//       const res = await apiClient.put(`/admin-leaves/${id}`, {
//         status: newStatus,
//       });
//       toast.success('Status updated successfully!');
//     } catch (err) {
//       console.error('Failed to update status:', err);
//       toast.error('Failed to update status');
//     }
//   };

//   return (
//     <div className="w-full bg-[#FFFFFF99] rounded-2xl p-6 shadow-sm">
//       {title && <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>}

//       <div className="overflow-x-auto">
//         <table className="min-w-full text-sm text-left text-gray-700">
//           <thead className="text-gray-500 border-b">
//             <tr>
//               {columns.map((col, idx) => (
//                 <th key={idx} className="px-4 py-2">{col}</th>
//               ))}
//             </tr>
//           </thead>

//           <tbody>
//             {rows && rows.length > 0 ? (
             
              
//               rows.map((row, rowIndex) => (
                
//                 <tr key={rowIndex} className="border-b last:border-none">
//                   {columns.map((col, colIndex) => {
//                     const key = Object.keys(row)[colIndex];
//                     const value = row[key];

//                     if (key === 'status') {
//                       // Render dropdown when total columns are 7 (editable version)
//                       if (columns.length === 7) {
//                         return (
//                           <td key={colIndex} className="px-4 py-3">
//                             <div className="w-44 h-9 flex items-center gap-[41px] bg-white px-3 py-[9px] rounded border border-solid border-[#d9d9d9]">
//                                  {console.log('jeifje',row.id)}
//                                {    console.log('row',row)
                                 
//                                    }
//                               <select
                         
//                                 onChange={(e) => changeStatus(e, row.id)}
//                                 className="w-[99px] h-[22px] bg-transparent text-[#d9d9d9] text-[14px] leading-[22px] font-normal appearance-none focus:outline-none"
//                                 defaultValue={value?.toLowerCase()}
//                               >
//                                 <option value="pending">Pending</option>
//                                 <option value="approved">Approved</option>
//                                 <option value="rejected">Rejected</option>
//                               </select>
//                               <svg
//                                 className="w-[7.5px] h-3 text-[#d9d9d9] pointer-events-none"
//                                 viewBox="0 0 10 6"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                               >
//                                 <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                               </svg>
//                             </div>
//                           </td>
//                         );
//                       } else if (statusColorMap[value]) {
//                         // Display colored badge version
//                         return (
//                           <td key={colIndex} className="px-4 py-3">
//                             <span className={`px-3 py-1 rounded-sm text-xs font-normal ${statusColorMap[value]}`}>
//                               {value}
//                             </span>
//                           </td>
//                         );
//                       }
//                     }

//                     // Default rendering
//                     return (
//                       <td key={colIndex} className="px-4 py-3">
//                         {value}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={columns.length} className="text-center py-10 text-gray-500">
//                   No leave requests found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TableWrapper;
