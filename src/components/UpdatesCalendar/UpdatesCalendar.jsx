import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './UpdatesCalendar.css';
import Calendar from 'react-calendar';
const UpdatesCalendar = () => {
  const [hoveredDate, setHoveredDate] = useState(null);

  const events = [
    { date: '2024-12-15', title: 'Team Meeting', description: 'Discuss project updates' },
    { date: '2024-12-21', title: 'Conference', description: 'Attend the annual conference' },
    { date: '2024-12-02', title: 'Christmas Party', description: 'Holiday celebration with friends' },  
    { date: '2024-12-02', title: 'Christmas Party', description: 'Holiday celebration with friends' },  
  ];

  const getEventsForDate = (date) => {
    const formattedDate = date.toLocaleDateString('en-CA'); // Formats as YYYY-MM-DD in local time
    return events.filter((event) => event.date === formattedDate);
  };
  

  const handleMouseEnter = (date) => {
    setHoveredDate(date);
    
  };

  const handleMouseLeave = () => {
    setHoveredDate(null);
  };

  return (
    <div className="react-calendar-with-events">
      <Calendar
        onChange={() => {}} // You can leave this empty for now
        tileContent={({ date }) => {
          const eventsForDate = getEventsForDate(date);
          return (
            eventsForDate.length > 0 && (
              <div
                className="event-indicator"
                onMouseEnter={() => handleMouseEnter(date)}
                onMouseLeave={handleMouseLeave}
              >
              </div>
            )
          );
        }}
      />
      {hoveredDate && (
        <div className="hover-event-popup">
          <h4>Events on {hoveredDate.toDateString()}:</h4>
          {getEventsForDate(hoveredDate).map((event, index) => (
            <div key={index} className="event-item">
              <h5>{event.title}</h5>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UpdatesCalendar;
