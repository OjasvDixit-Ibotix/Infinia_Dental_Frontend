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
    <div className="flex justify-center items-center h-[150px] w-[170px]">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

const LeaveDistributionSection = () => {
  const { leaves, status, error } = useSelector((state) => state.leaveHistory);

  const leaveCounts = {
    paid: 0,
    sick: 0,
    unpaid: 0,
  };

  leaves?.forEach((leave) => {
    const type = leave.leave_type?.toLowerCase();
    if (leave?.number_of_days) {
      if (type === 'paid') leaveCounts.paid += leave.number_of_days;
      else if (type === 'sick') leaveCounts.sick += leave.number_of_days;
      else if (type === 'unpaid') leaveCounts.unpaid += leave.number_of_days;
    }
  });

  // Prepare chart data
  const chartData = {
    labels: [ 'Paid Leave', 'Sick Leave','Unpaid Leave'],
    datasets: [
      {
        label: 'Days Used',
        data: [leaveCounts.paid, leaveCounts.sick, leaveCounts.unpaid],
        backgroundColor: ['#a8a8a8', '#efcd78', '#dca314'],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const totalDays = chartData.datasets[0].data.reduce(
    (sum, current) => sum + current,
    0
  );

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Failed to load leave data: {error}</p>;

  return (
    <div className="flex flex-col gap-4 w-full self-stretch bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex items-center gap-4 self-stretch">
        <div className="h-[44px] w-[44px] flex-shrink-0 flex items-center justify-center bg-[#444444] p-2.5 rounded-lg">
          <div className="w-6 h-6">
            <LeaveDistriIcon />
          </div>
        </div>
        <span className="font-normal text-2xl leading-6 text-gray-800">
          Leave Distribution
        </span>
      </div>

      <div className="flex flex-col gap-4 self-stretch">
        <div className="w-full flex justify-center">
          <LeaveDistributionChart chartData={chartData} />
        </div>

        <div className="flex flex-col gap-2 self-stretch">
          {chartData.labels.map((label, index) => (
            <div
              key={label}
              className="flex justify-between items-center self-stretch"
            >
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-3xl"
                  style={{
                    backgroundColor: chartData.datasets[0].backgroundColor[index],
                  }}
                ></div>
                <div className="pl-2">
                  <span className="font-normal text-sm text-gray-600">
                    {label}
                  </span>
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
                <span className="font-normal text-sm text-gray-800">
                  Total Used
                </span>
              </div>
              <div>
                <span className="font-normal text-sm text-gray-800">
                  {totalDays} days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveDistributionSection;
