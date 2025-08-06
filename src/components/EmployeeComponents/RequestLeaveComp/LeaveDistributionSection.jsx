import React from 'react'; // 1. Removed duplicate React import
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import LeaveDistriIcon from '../../../assets/svgs/EmpLeaveBalance/LeaveDistriIcon';

// It's necessary to register the components you want to use
ChartJS.register(ArcElement, Tooltip, Legend);

// Chart data remains the same
const data = {
  labels: [
    'Annual Leave', 
    'Sick Leave', 
    'Casual Leave', 
    'Emergency Leave', 
    'Compensatory Off'
  ],
  datasets: [
    {
      label: 'Days Used',
      data: [8, 3, 5, 1, 2],
      backgroundColor: [
        '#efcd78',
        '#a8a8a8',
        '#dca314',
        '#6f675f',
        '#efd8a0',
      ],
      borderColor: '#ffffff',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '47%',
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
};

function LeaveDistributionChart() {
  return (
    <div className="flex justify-center items-center h-33 w-33">
      <Doughnut data={data} options={options} />
    </div>
  );
}

const LeaveDistributionSection = () => {
  // 4. (Improvement) Calculate the total dynamically
  const totalDays = data.datasets[0].data.reduce((sum, current) => sum + current, 0);

  return (
    // 2. Replaced all 'class' attributes with 'className'
    <div className="flex flex-col gap-4 w-full max-w-sm self-stretch bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex items-center gap-4 self-stretch">
        <div className="h-[44px] w-[44px] flex-shrink-0 flex items-center justify-center bg-[#444444] p-2.5 rounded-lg">
          <div className="w-6 h-6"><LeaveDistriIcon/></div> 
        </div>
        <span className="font-normal text-2xl leading-6 text-gray-800">Leave Distribution</span>
      </div>

      <div className="flex flex-col gap-4 self-stretch">
        <div className="w-full flex justify-center">
           <LeaveDistributionChart />
        </div>

        <div className="flex flex-col gap-2 self-stretch">

          {data.labels.map((label, index) => (
            <div key={label} className="flex justify-between items-center self-stretch">
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-3xl"
                  style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                ></div>
                <div className="pl-2">
                  <span className="font-normal text-sm text-gray-600">{label}</span>
                </div>
              </div>
              <div>
                <span className="font-normal text-sm text-gray-800">
                  {data.datasets[0].data[index]} days
                </span>
              </div>
            </div>
          ))}

          {/* Total Section */}
          <div className="flex flex-col self-stretch pt-2.5 mt-2 border-t border-solid border-gray-200">
            <div className="flex justify-between items-center self-stretch">
              <div>
                <span className="font-normal text-sm text-gray-800">Total Used</span>
              </div>
              <div>
                <span className="font-normal text-sm  text-gray-800">
                  {totalDays} days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaveDistributionSection;