import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import LeaveDistriIcon from '../../../assets/svgs/EmpLeaveBalance/LeaveDistriIcon';
import { useSelector } from 'react-redux';
ChartJS.register(ArcElement, Tooltip, Legend);

const LeaveDistributionChart = ({ chartData }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '47%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="flex justify-center items-center h-33 w-33">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

const LeaveDistributionSection = () => {
  // Step 1: Count days for each leave type
  const {leaves, status, error}= useSelector((state) => state.leaveHistory)
  const leaveCounts = {
    annual: 0,
    sick: 0,
    casual: 0,
    emergency: 0,
    compensatory: 0,
  };

  leaves?.forEach((leave) => {
    const type = leave.leave_type?.toLowerCase();
    if (type === 'annual') leaveCounts.annual += leave.number_of_days;
    else if (type === 'sick') leaveCounts.sick += leave.number_of_days;
    else if (type === 'casual') leaveCounts.casual += leave.number_of_days;
    else if (type === 'emergency') leaveCounts.emergency += leave.number_of_days;
    else if (type === 'compensatory') leaveCounts.compensatory += leave.number_of_days;
  });

  // Step 2: Prepare chart data
  const chartData = {
    labels: [
      'Annual Leave',
      'Sick Leave',
      'Casual Leave',
      'Emergency Leave',
      'Compensatory Off',
    ],
    datasets: [
      {
        label: 'Days Used',
        data: [
          leaveCounts.annual,
          leaveCounts.sick,
          leaveCounts.casual,
          leaveCounts.emergency,
          leaveCounts.compensatory,
        ],
        backgroundColor: ['#efcd78', '#a8a8a8', '#dca314', '#6f675f', '#efd8a0'],
        borderColor: '#ffffff',
      },
    ],
  };

  const totalDays = chartData.datasets[0].data.reduce((sum, current) => sum + current, 0);
  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Failed to load leave data</p>;

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm self-stretch bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex items-center gap-4 self-stretch">
        <div className="h-[44px] w-[44px] flex-shrink-0 flex items-center justify-center bg-[#444444] p-2.5 rounded-lg">
          <div className="w-6 h-6">
            <LeaveDistriIcon />
          </div>
        </div>
        <span className="font-normal text-2xl leading-6 text-gray-800">Leave Distribution</span>
      </div>

      <div className="flex flex-col gap-4 self-stretch">
        <div className="w-full flex justify-center">
          <LeaveDistributionChart chartData={chartData} />
        </div>

        <div className="flex flex-col gap-2 self-stretch">
          {chartData.labels.map((label, index) => (
            <div key={label} className="flex justify-between items-center self-stretch">
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-3xl"
                  style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}
                ></div>
                <div className="pl-2">
                  <span className="font-normal text-sm text-gray-600">{label}</span>
                </div>
              </div>
              <div>
                <span className="font-normal text-sm text-gray-800">
                  {chartData.datasets[0].data[index]} days
                </span>
              </div>
            </div>
          ))}

          <div className="flex flex-col self-stretch pt-2.5 mt-2 border-t border-solid border-gray-200">
            <div className="flex justify-between items-center self-stretch">
              <div>
                <span className="font-normal text-sm text-gray-800">Total Used</span>
              </div>
              <div>
                <span className="font-normal text-sm text-gray-800">{totalDays} days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveDistributionSection;
