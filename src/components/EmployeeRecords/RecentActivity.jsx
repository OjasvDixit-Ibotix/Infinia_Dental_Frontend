import React from 'react';

const users = [
  { initials: 'DSJ', name: 'Dr. Sarah Johnson', role: 'Senior Dentist' },
  { initials: 'MC', name: 'Michael Chen', role: 'Dental Hygienist' },
  { initials: 'JW', name: 'James Wilson', role: 'Dental Assistant' },
  { initials: 'DRT', name: 'Dr. Robert Taylor', role: 'Orthodontist' },
];

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-xl border border-[#F3C85C] shadow-md p-5 w-full sm:max-w-sm mb-4">
      <div className="flex items-center gap-2 mb-4">
        <svg
          className="w-5 h-5 text-[#EFCD78]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-base font-medium text-[#444]">Recent Activity</h2>
      </div>

      <ul className="space-y-4">
        {users.map((user, idx) => (
          <li key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#EFCD78] text-[#444] rounded-full flex items-center justify-center font-medium text-sm">
                {user.initials}
              </div>
              <div>
                <p className="text-sm font-medium text-[#111827]">{user.name}</p>
                <p className="text-xs text-[#6B7280]">{user.role}</p>
              </div>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
