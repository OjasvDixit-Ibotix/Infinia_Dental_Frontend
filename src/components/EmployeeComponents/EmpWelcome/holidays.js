// src/utils/holidays.js
import { getYear, getMonth, getDate, eachDayOfInterval, getDay, format } from 'date-fns';

// Helper to find the Nth specific weekday in a month
// E.g., the 4th Thursday of November
const findNthWeekday = (year, month, weekday, n) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = eachDayOfInterval({ start: firstDay, end: lastDay });
  
  const weekdays = daysInMonth.filter(day => getDay(day) === weekday);
  return weekdays[n - 1];
};

export const getHolidaysForMonth = (date) => {
  const year = getYear(date);
  const month = getMonth(date); 
  const holidays = {};

  if (month === 0) {
    holidays[1] = "New Year's Day";
  }
  if (month === 6) { 
    holidays[4] = "Independence Day";
  }
  if (month === 11) { // December
    holidays[25] = "Christmas Day";
  }

  // --- Floating Holidays ---
  if (month === 4) { // May
    const memorialDay = findNthWeekday(year, 4, 1, 5) || findNthWeekday(year, 4, 1, 4); // Last Monday
    if (memorialDay) holidays[getDate(memorialDay)] = "Memorial Day";
  }
  if (month === 8) { // September
    const laborDay = findNthWeekday(year, 8, 1, 1); // First Monday
    if (laborDay) holidays[getDate(laborDay)] = "Labor Day";
  }
  if (month === 10) { // November
    const thanksgiving = findNthWeekday(year, 10, 4, 4); // Fourth Thursday
    if (thanksgiving) holidays[getDate(thanksgiving)] = "Thanksgiving";
  }

  return holidays;
};