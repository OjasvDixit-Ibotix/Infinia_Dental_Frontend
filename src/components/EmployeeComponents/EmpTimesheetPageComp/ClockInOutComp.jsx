import React, { useState, useEffect, useRef } from 'react';
import ClockIcon from '../../../assets/svgs/WelcomePage/ClockIcon';
import ClockInsvg from '../../../assets/svgs/EmpTimesheet/ClockInsvg';
import ClockOutSvg from '../../../assets/svgs/EmpTimesheet/ClockOutSvg';
import { toast } from 'sonner';
import apiClient from '../../../utils/api/api';

const ClockInOutComp = () => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef(null);
  const clockInTimeRef = useRef(null); 

  const formatTime = (secs) => {

    // console.log('secs',secs);
    const h = String(Math.floor(secs / 3600)).padStart(2, '0');
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startTimer = () => {
    stopTimer();
    intervalRef.current = setInterval(() => {
      if (clockInTimeRef.current) {
        const now = new Date();
        const elapsed = Math.floor((now - clockInTimeRef.current) / 1000);
        // console.log(elapsed , 'yaha hai elapsed');
        
        setSeconds(elapsed );
      }
    }, 1000);
  };
  
  const clockIn = async () => {
    try {
      const res = await apiClient.post('/clock-in');
            clockInTimeRef.current = new Date();
            console.log('clock in',clockInTimeRef);
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
      setSeconds(0);
      clockInTimeRef.current = null;
    } catch (err) {
      console.error('Clock Out Error:', err);
      toast.error(err.response?.data?.error || 'Failed to clock out.');
    }
  };

  useEffect(() => {
    let isMounted = true;

    const checkClockInStatus = async () => {
      setIsLoading(true);
      try {
        const res = await apiClient.get('/time-entries');
        if (!isMounted) return;

        if (res.data?.time_entries?.length > 0) {
          const latestEntry = res.data.time_entries[0];
          console.log(res.data.time_entries[0], 'enteries yaha hai');
          
          if (latestEntry.status === 'ongoing' && latestEntry.clock_in) {

              const clockInTime = new Date(latestEntry.clock_in + 'Z'); 
              clockInTime.setTime(clockInTime.getTime() + (87 * 1000));
              {console.log('clockintime yaha hai',clockInTime);
              } 
            clockInTimeRef.current = clockInTime; 
            console.log('clockintime',clockInTimeRef.current);
            const now = new Date();
            console.log('now time is ',now);
            const initialElapsed = Math.floor((now - clockInTime) / 1000);
            console.log('intitialeplased',initialElapsed);        
            setSeconds(initialElapsed); 
            // console.log(seconds  , 'hours mai yaha hai');
            setIsClockedIn(true);
            startTimer();

          } else {
            setIsClockedIn(false);
            stopTimer();
          }
        } else {
          setIsClockedIn(false);
          stopTimer();
        }
      } catch (error) {
        if (!isMounted) return;
        console.error('Failed to check clock-in status:', error);
        toast.error('Could not fetch your current status.');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    checkClockInStatus();

    return () => {
      isMounted = false;
      stopTimer();
    };
  }, []); // The dependency array is empty, which is correct for a one-time check on mount.

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
        </div>

        <div className="flex justify-center items-center self-stretch">
          <div className="flex items-center bg-gray-100 px-[17px] py-[9px] rounded-full border border-solid border-gray-200">
            <div className="h-4 w-6 flex flex-col pr-2">
              <div className="h-4 flex justify-center items-center grow w-4">
                <ClockIcon />
              </div>
            </div>
            <span className="font-normal text-sm text-[#444444]">
              {isClockedIn ? 'Logged In' : 'Not Logged In'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockInOutComp;