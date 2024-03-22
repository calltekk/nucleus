import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar'; // Import the Calendar component
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const MyCalendar = () => {
  // Define state for logged activities
  const [loggedActivities, setLoggedActivities] = useState([]);

  // useEffect hook to fetch logged activities
  useEffect(() => {
    // Fetch logged activities from backend or local storage
    // For demonstration purposes, setting dummy data
    const dummyLoggedActivities = ['2024-03-15', '2024-03-20', '2024-03-25'];
    setLoggedActivities(dummyLoggedActivities);
  }, []);

  // Function to determine if a date has logged activity
  const hasLoggedActivity = (date) => {
    return loggedActivities.includes(formatDate(date));
  };

  // Function to format date as string (YYYY-MM-DD)
  const formatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  // Return JSX representing the calendar component
  return (
    <div className="calendar-container">
      <div className="calendar-wrapper">
        <Calendar
          className="w-full text-slate-200"
          tileContent={({ date, view }) =>
            view === 'month' && hasLoggedActivity(date) ? <div className="highlighted-day bg-blue-500 rounded-full"></div> : null
          }
          calendarType="gregory"
          prev2Label={null}
          next2Label={null}
        />
      </div>
    </div>
  );
};

export default MyCalendar; // Export the calendar component
