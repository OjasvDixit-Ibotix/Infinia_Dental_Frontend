import React, { useState, useEffect, useRef } from 'react';
import ClockIcon from '../../../assets/svgs/WelcomePage/ClockIcon';
import ClockInsvg from '../../../assets/svgs/EmpTimesheet/ClockInsvg';
import ClockOutSvg from '../../../assets/svgs/EmpTimesheet/ClockOutSvg';
import axios from 'axios';
import { toast } from 'sonner';

const ClockInOutComp = () => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const authHeader = {
    username: "a9a@gmail.com",
    password: "asdf1234",
  };

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, '0');
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const clockIn = async () => {
    try {
      const basicAuth = 'Basic ' + btoa(`${authHeader.username}:${authHeader.password}`);

    const res=   await axios.post(
        'https://3feb0b4cc6b5.ngrok-free.app/clock-in',
        {},
        {
          headers: {
            Authorization: basicAuth,
          },
        }
      );
      console.log(res.data)

      setIsClockedIn(true);
      toast.success(res.data.message)
      setSeconds(0);
      intervalRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    } catch (err) {
      console.error('Clock In Error:', err);
      toast.error(err.response.data.error)
    }
  };

  const clockOut = async () => {
    try {
      const basicAuth = 'Basic ' + btoa(`${authHeader.username}:${authHeader.password}`);

    const res=   await axios.post(
        'https://3feb0b4cc6b5.ngrok-free.app/clock-out',
        {},
        {
          headers: {
            Authorization: basicAuth,
          },
        }
      );
      toast.success(res.data.message)

      setIsClockedIn(false);

      clearInterval(intervalRef.current);
    } catch (err) {
      console.error('Clock Out Error:', err);
    }
  };

 useEffect(() => {
    const checkClockInStatus = async () => {
      try {
        const res = await axios.get('https://3feb0b4cc6b5.ngrok-free.app/time-entries', {
          headers: apiHeaders,
        });

        if (res.data && res.data.status === 'ongoing') {
          const clockInTime = new Date(res.data.clock_in);
          const now = new Date();
          const elapsedSeconds = Math.floor((now - clockInTime) / 1000);
          
          setIsClockedIn(true);
          startTimer(elapsedSeconds);
        }
      } catch (error) {
        // A 404 error is expected if the user is not clocked in.
        if (error.response && error.response.status === 404) {
          console.log('No active clock-in session found.');
        } else {
          console.error('Failed to check clock-in status:', error);
        }
      } finally {
        // Finished checking, so we can display the component
        setIsLoading(false);
      }
    };

    checkClockInStatus();

    // Cleanup function to stop the timer if the component is removed
    return () => stopTimer();
  }, []);

  return (
    <div className="commonCardCss p-8">
      <div className="flex flex-col gap-6 self-stretch">
        <div className="flex justify-center items-center gap-6 self-stretch">

          <button
            className={`h-16 flex justify-center items-center gap-2 px-5 py-2 rounded-xl transition-all duration-200 ${
              isClockedIn
                ? 'bg-[#01543A] cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-[#01543A]'
            }`}
            onClick={clockIn}
            disabled={isClockedIn}
          >
            <div className="h-4 w-7 flex flex-col pr-3">
              <div className="h-4 w-4 flex justify-center items-center grow">
                <ClockInsvg />
              </div>
            </div>
            <span className="font-normal text-lg text-white">Clock In</span>
          </button>

          {/* Clock Out Button */}
          <button
            className={`h-16 flex justify-center items-center gap-2 px-5 py-2 rounded-xl transition-all duration-200 ${
              !isClockedIn
                ? 'bg-[#B91C1C] cursor-not-allowed'
                : 'bg-red-500 hover:bg-[#EF4444]'
            }`}
            onClick={clockOut}
            disabled={!isClockedIn}
          >
            <div className="h-4 w-7 flex flex-col pr-3">
              <div className="h-4 w-4 flex justify-center items-center grow">
                <ClockOutSvg />
              </div>
            </div>
            <span className="font-normal text-lg text-white">Clock Out</span>
          </button>
        </div>

        <div className="text-center text-3xl font-medium text-gray-800">
          {formatTime(seconds)}
        </div>

        <div className="flex justify-center items-center self-stretch">
          <div className="flex items-center bg-gray-100 px-[17px] py-[9px] rounded-full border border-solid border-gray-200">
            <div className="h-4 w-6 flex flex-col pr-2">
              <div className="h-4 flex justify-center items-center grow w-4">
                <ClockIcon />
              </div>
            </div>
            <span className="font-normal text-sm text-[#444444]">
              {isClockedIn ? 'Clocked In' : 'Not Logged In'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockInOutComp;
