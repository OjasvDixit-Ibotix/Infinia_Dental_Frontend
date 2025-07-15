import React from 'react';

const TableWrapper = ({ title, columns, rows, statusColorMap = {} }) => {
  return (
    <div className="w-full bg-gray-100 rounded-2xl p-6 shadow-sm">
      {title && <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>}

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="text-gray-500 border-b">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="px-4 py-2">
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rIdx) => (
              <tr key={rIdx} className="border-b last:border-none">
                {columns.map((col, cIdx) => {
                  const key = Object.keys(row)[cIdx];
                  const value = row[key];

                  if (key === 'status' && statusColorMap[value]) {
                    return (
                      <td key={cIdx} className="px-4 py-3">
                        <span className={`px-3 py-1 rounded-xl text-xs font-medium ${statusColorMap[value]}`}>
                          {value}
                        </span>
                      </td>
                    );
                  }

                  return (
                    <td key={cIdx} className="px-4 py-3">
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableWrapper;
