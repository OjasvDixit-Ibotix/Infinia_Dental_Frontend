import React, { useState, useEffect, useRef, useMemo } from 'react';
import ClockIcon from '../../../assets/svgs/WelcomePage/ClockIcon';
import ClockInsvg from '../../../assets/svgs/EmpTimesheet/ClockInsvg';
import ClockOutSvg from '../../../assets/svgs/EmpTimesheet/ClockOutSvg';
import { toast } from 'sonner';
import apiClient from '../../../utils/api/api';

const ClockInOutComp = () => {
  const [isClockedIn, setIsClockedIn] = useState('Not Logged In');
  const [seconds, setSeconds] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef(null);


  // const authHeader = {
  //   username: "a34a@gmail.com",
  //   password: "asdf1234",
  // };

  // const apiConfig = useMemo(() => {
  //   const basicAuth = 'Basic ' + btoa(`${authHeader.username}:${authHeader.password}`);
  //   return {
  //     headers: {
  //       "ngrok-skip-browser-warning": "true",
  //       Authorization: basicAuth,
  //     },
  //   };
  // }, []);

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, '0');
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    console.log(h,m,s);
    
    return `${h}:${m}:${s}`;
  };

  const startTimer = (startTime = 0) => {
    stopTimer(); 
    setSeconds(startTime);
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const clockIn = async () => {
    try {
      const res = await apiClient.post('/clock-in');
        
      setIsClockedIn(true);
      toast.success(res.data.message);
      startTimer();
    } catch (err) {
      console.error('Clock In Error:', err);
      toast.error(err.response?.data?.error || 'Failed to clock in.');
    }
  };

  const clockOut = async () => {
    try {
      const res = await apiClient.post('/clock-out');
      toast.success(res.data.message);
      setIsClockedIn(false);
      stopTimer();
    } catch (err) {
      console.error('Clock Out Error:', err);
      toast.error(err.response?.data?.error || 'Failed to clock out.');
    }
  };

  const checkClockInStatus = async () => {
    setIsLoading(true);
    try {
      const res = await apiClient.get('/time-entries');
      console.log('jifj',res);
      

      if (
        res.data &&
        Array.isArray(res.data.time_entries) &&
        res.data.time_entries.length > 0
      ) {
        const latestEntry = res.data.time_entries[0];
        console.log(latestEntry);
        

        if (latestEntry.status === 'ongoing' && latestEntry.clock_in ) {
          const clockInTime = latestEntry.clock_in.endsWith('Z')
            ? new Date(latestEntry.clock_in)
            : new Date(latestEntry.clock_in + 'Z');

          const now = new Date();
          const elapsedSeconds = Math.floor((now - clockInTime) / 1000);

          console.log('Elapsed time:', elapsedSeconds);

          setIsClockedIn(true);
          startTimer(elapsedSeconds);
        } else {
          setIsClockedIn(false);
          stopTimer();
        }
      } else {
        setIsClockedIn(false);
        stopTimer();
      }
    } catch (error) {
      console.error('Failed to check clock-in status:', error);
      toast.error('Could not fetch your current status.');
      setIsClockedIn(false);
      stopTimer();
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
   checkClockInStatus();
    return () => {
      stopTimer(); // Clean up timer
    };
  }, []);

  if (isLoading) {
    return (
      <div className="commonCardCss p-8 flex justify-center items-center h-48">
        <div className="text-center text-xl font-medium text-gray-800">
          Checking status...
        </div>
      </div>
    );
  }

  return (
    <div className="commonCardCss p-8">
      <div className="flex flex-col gap-6 self-stretch">
        <div className="flex justify-center items-center gap-6 self-stretch">
          <button
            className={`h-16 flex justify-center items-center gap-2 px-5 py-2 rounded-xl transition-all duration-200 ${
              isClockedIn
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-700'
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

          <button
            className={`h-16 flex justify-center items-center gap-2 px-5 py-2 rounded-xl transition-all duration-200 ${
              isClockedIn
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-gray-400 cursor-not-allowed'
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

        <div className="text-center text-4xl font-medium text-gray-800 tracking-wider">
          {formatTime(seconds)}
         { console.log('seconds',seconds)}
          
        </div>

        <div className="flex justify-center items-center self-stretch">
          <div className="flex items-center bg-gray-100 px-[17px] py-[9px] rounded-full border border-solid border-gray-200">
            <div className="h-4 w-6 flex flex-col pr-2">
              <div className="h-4 flex justify-center items-center grow w-4">
                <ClockIcon />
              </div>
            </div>
            <span className="font-normal text-sm text-[#444444]">
              {isClockedIn ? 'Clocked In' : 'Clocked Out'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockInOutComp;
