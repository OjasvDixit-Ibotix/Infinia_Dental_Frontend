import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Calendar from 'react-calendar';
import apiClient from '../../../utils/api/api';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';

const generateNumericOptions = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => ({
    value: start + i,
    label: (start + i).toString(),
  }));
};

const monthOptions = [
  { value: 0, label: 'Jan' }, { value: 1, label: 'Feb' }, { value: 2, label: 'Mar' },
  { value: 3, label: 'Apr' }, { value: 4, label: 'May' }, { value: 5, label: 'Jun' },
  { value: 6, label: 'Jul' }, { value: 7, label: 'Aug' }, { value: 8, label: 'Sep' },
  { value: 9, label: 'Oct' }, { value: 10, label: 'Nov' }, { value: 11, label: 'Dec' },
];

const SelectDropdown = ({ options, value, onChange, placeholder, className }) => (
  <div className={`relative ${className}`}>
    <select
      value={value}
      onChange={onChange}
      className="w-full appearance-none cursor-pointer px-4 py-2 rounded-[8px] border-[0.2px] border-[#444] opacity-80 shadow-[0_4px_12px_0_rgba(239,205,120,0.20)] bg-white text-gray-700 text-sm focus:outline-none focus:border-amber-400"
    >
      <option value="" disabled hidden>{placeholder}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-500">
      <ChevronDown className="w-4 h-4" />
    </div>
  </div>
);

const DateSelector = ({ date, onDateChange, minDate = new Date() }) => {
  const handleDayChange = (e) => {
    const newDate = new Date(date || new Date());
    newDate.setDate(parseInt(e.target.value, 10));
    if (newDate >= minDate) onDateChange(newDate);
  };

  const handleMonthChange = (e) => {
    const newDate = new Date(date || new Date());
    newDate.setMonth(parseInt(e.target.value, 10));
    if (newDate >= minDate) onDateChange(newDate);
  };

  const handleYearChange = (e) => {
    const newDate = new Date(date || new Date());
    newDate.setFullYear(parseInt(e.target.value, 10));
    if (newDate >= minDate) onDateChange(newDate);
  };

  // restrict day options based on minDate
  const dayStart =
    date?.getMonth() === minDate.getMonth() && date?.getFullYear() === minDate.getFullYear()
      ? minDate.getDate()
      : 1;

  return (
    <div className="flex gap-2">
      <SelectDropdown
        className="w-1/4"
        placeholder="Day"
        options={generateNumericOptions(dayStart, 31)}
        value={date ? date.getDate() : ''}
        onChange={handleDayChange}
      />
      <SelectDropdown
        className="w-1/2"
        placeholder="Month"
        options={monthOptions}
        value={date ? date.getMonth() : ''}
        onChange={handleMonthChange}
      />
      <SelectDropdown
        className="w-1/3"
        placeholder="Year"
        options={generateNumericOptions(minDate.getFullYear(), new Date().getFullYear() + 5)}
        value={date ? date.getFullYear() : ''}
        onChange={handleYearChange}
      />
    </div>
  );
};

const LeftArrowIcon = () => <ChevronLeft className="h-6 w-6 text-gray-700" />;
const RightArrowIcon = () => <ChevronRight className="h-6 w-6 text-gray-700" />;

const EmpLeaveRequestForm = () => {
  const [displayDate, setDisplayDate] = useState(new Date());

  const [leaveType, setLeaveType] = useState('');
  const [fromDate, setFromDate] = useState(new Date()); // always today
  const [toDate, setToDate] = useState(null);
  const [reason, setReason] = useState('');
  const [numberOfDays, setNumberOfDays] = useState(0);

  const leaveTypeOptions = [
    { value: 'Sick Leave', label: 'Sick Leave' },
    { value: 'Paid Leave', label: 'Paid Leave' },
    { value: 'Unpaid Leave', label: 'Unpaid Leave' },
  ];

  useEffect(() => {
    if (fromDate && toDate && toDate >= fromDate) {
      const diffTime = Math.abs(toDate - fromDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      setNumberOfDays(diffDays - 1);
    } else {
      setNumberOfDays(0);
    }
  }, [fromDate, toDate]);

  const handleLeaveRequestForm = async () => {
    if (!leaveType || !fromDate || !toDate || !reason) {
      toast.error('Please fill all required fields.');
      return;
    }

    const leaveData = {
      leave_type: leaveType,
      from_date: fromDate.toISOString().split('T')[0],
      to_date: toDate.toISOString().split('T')[0],
      reason: reason,
    };

    try {
      const res = await apiClient.post('/apply/leaves', leaveData);
      toast.success('Leave submitted successfully!');
      console.log('Leave submitted:', res.data);
    } catch (err) {
      toast.error('Failed to submit leave. Please try again.');
      console.error('Error submitting leave:', err);
    }
  };

  const { user } = useSelector((state) => state.auth);

  return (
    <div className="w-full p-6 bg-white mt-5 rounded-2xl shadow-md">
      <span className="font-semibold text-xl text-[#444444]">Leave Request Form</span>
      <div className="flex flex-col lg:flex-row gap-9 mt-4">
        {/* Left Section */}
        <div className="w-full lg:w-[580px] mt-3 flex flex-col gap-4 rounded-lg border border-[#EFCD78] bg-[rgba(239,205,120,0.02)] p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-x-6 gap-y-4">
            <label className="text-[#3C3C3C] font-medium">Request By*</label>
            <div className="md:col-span-2">
              <input
                disabled
                className="w-full appearance-none px-4 py-2 rounded-[8px] border-[0.2px] border-[#444] opacity-80 shadow-[0_4px_12px_0_rgba(239,205,120,0.20)] bg-white text-gray-700 text-sm focus:outline-none"
                placeholder={user.name}
              />
            </div>

            <label className="text-[#3C3C3C] font-medium">Leave Type</label>
            <div className="md:col-span-2">
              <SelectDropdown
                placeholder="Select Leave Type"
                options={leaveTypeOptions}
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
              />
            </div>

            <label className="text-[#3C3C3C] font-medium">From</label>
            <div className="md:col-span-2">
              <DateSelector date={fromDate} onDateChange={setFromDate} minDate={new Date()} />
            </div>

            <label className="text-[#3C3C3C] font-medium">To</label>
            <div className="md:col-span-2">
              <DateSelector date={toDate} onDateChange={setToDate} minDate={fromDate || new Date()} />
            </div>

            <label className="text-[#3C3C3C] font-medium">No. of Days</label>
            <div className="md:col-span-2">
              <input
                type="number"
                readOnly
                value={numberOfDays}
                className="flex items-center px-4 py-2 rounded-[8px] border-[0.2px] border-gray-300 text-gray-500 w-full text-sm bg-gray-100"
              />
            </div>

            <label className="text-[#3C3C3C] font-medium self-start pt-2">Reason</label>
            <div className="md:col-span-2">
              <textarea
                placeholder="Type here..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full px-4 py-2 rounded-[8px] border-[0.2px] border-[#444] opacity-80 shadow-[0_4px_12px_0_rgba(239,205,120,0.20)] text-sm focus:outline-none focus:border-amber-400"
                rows={3}
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleLeaveRequestForm}
              className="bg-[#EFCD78] hover:bg-[#e6be63] px-6 py-2 rounded-md text-[#444] font-semibold text-sm transition-colors"
            >
              Save
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="pt-3 flex flex-col gap-5 flex-1">
          <span className="font-semibold text-xl text-[#444444]">Rules</span>
          <div className="flex flex-row gap-5">
            {[
              { label: 'Balance SL', count: 5, bg: '#EFCD78', text: '#444444' },
              { label: 'Balance PL', count: 2, bg: '#444444', text: 'white' },
              { label: 'Balance Unpaid Leave', count: '∞', bg: '#EFCD78', text: '#444444' },
            ].map((item, i) => (
              <div
                key={i}
                className="w-[140px] h-[100px] flex-shrink-0 rounded-lg flex flex-col items-center justify-between pb-2 text-center font-semibold bg-[#EFCD7866]"
              >
                <div
                  className="w-full h-[60px] flex items-center justify-center rounded-t-lg"
                  style={{ backgroundColor: item.bg, color: item.text }}
                >
                  {item.label}
                </div>
                {item.count}
              </div>
            ))}
          </div>

          <div className="w-full rounded-2xl border border-[#EFCD78] bg-white p-4 mt-4">
            <Calendar
              onChange={setDisplayDate}
              value={displayDate}
              prevLabel={<LeftArrowIcon />}
              nextLabel={<RightArrowIcon />}
              prev2Label={null}
              next2Label={null}
              minDate={new Date()} // calendar also blocks past dates
            />
          </div>

          <div className="flex flex-wrap gap-4 pl-4 mt-4 text-sm text-[#969696]">
            {[
              { label: 'Present', color: '#EFCD78' },
              { label: 'Holiday', color: '#FFEEC4' },
              { label: 'Absent', color: '#9A7FAC' },
              { label: 'Leave', color: '#668E8C' },
              { label: 'Week off', color: '#6CB6B2' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpLeaveRequestForm;
