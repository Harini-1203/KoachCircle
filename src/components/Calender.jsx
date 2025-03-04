import React, { useState, useMemo } from 'react';

const Calendar = () => {
  const currentYear = new Date().getFullYear();
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedDate, setSelectedDate] = useState(null);

  // Generate years range (from 10 years ago to 10 years ahead)
  const yearRange = useMemo(() => {
    return Array.from(
      { length: 21 }, 
      (_, index) => currentYear - 10 + index
    );
  }, [currentYear]);

  // Month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Week day names
  const weekDays = ['Mo', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'];

  // Generate calendar data
  const generateCalendarData = useMemo(() => {
    const firstDay = new Date(selectedYear, selectedMonth, 1);
    const lastDay = new Date(selectedYear, selectedMonth + 1, 0);
    
    // Days to show from previous month
    const startingDayOfWeek = firstDay.getDay();
    
    const calendarDays = [];
    
    // Previous month's days
    for (let i = 0; i < startingDayOfWeek; i++) {
      const prevMonthDay = new Date(selectedYear, selectedMonth, -startingDayOfWeek + i + 1);
      calendarDays.push({
        date: prevMonthDay,
        isCurrentMonth: false
      });
    }
    
    // Current month's days
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const dayDate = new Date(selectedYear, selectedMonth, day);
      calendarDays.push({
        date: dayDate,
        isCurrentMonth: true
      });
    }
    
    // Next month's days to fill the grid
    const totalDays = calendarDays.length;
    const remainingDays = 42 - totalDays; // 6 rows * 7 days
    
    for (let i = 1; i <= remainingDays; i++) {
      const nextMonthDay = new Date(selectedYear, selectedMonth + 1, i);
      calendarDays.push({
        date: nextMonthDay,
        isCurrentMonth: false
      });
    }
    
    return calendarDays;
  }, [selectedYear, selectedMonth]);

  // Handle date selection
  const handleDateSelect = (day) => {
    setSelectedDate(day.date);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-[400px]">
      {/* Month and Year Dropdowns */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          {/* Month Dropdown */}
          <select 
            value={selectedMonth} 
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="p-1 shadow-md text-black rounded"
          >
            {monthNames.map((month, index) => (
              <option key={month} value={index} className='text-black'>
                {month}
              </option>
            ))}
          </select>

          {/* Year Dropdown */}
          <select 
            value={selectedYear} 
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="p-1 shadow-md text-black rounded"
          >
            {yearRange.map((year) => (
              <option key={year} value={year} className='text-black'>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 text-center mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-black font-semibold">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {generateCalendarData.map((day, index) => {
          const isSelected = selectedDate && 
            day.date.toDateString() === selectedDate.toDateString();
          
          return (
            <div 
              key={index}
              onClick={() => handleDateSelect(day)}
              className={`
                px-2 py-2 text-center cursor-pointer rounded-lg
                ${!day.isCurrentMonth ? 'text-gray-300' : 'text-gray-800'}
                ${isSelected ? 'p-2 border-4 -m-1 rounded-xl  border-[#0047AB] text-white' : ''}
                hover:bg-gray-100
              `}
            >
              {day.date.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;