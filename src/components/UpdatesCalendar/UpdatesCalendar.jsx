import React, { useState, useContext } from 'react';
import 'react-calendar/dist/Calendar.css';
import './UpdatesCalendar.css';
import Calendar from 'react-calendar';
import { dataContext } from '../../data/Data';

const UpdatesCalendar = ({ onDateSelect }) => {
  const { events } = useContext(dataContext);
  const [currentDate, setCurrentDate] = useState(new Date());

  const getEventsForDate = (date) => {
    const formattedDate = date.toLocaleDateString('en-CA');
    return events.filter((event) => event.date === formattedDate);
  };

  const handleDateClick = (date) => {
    const dayEvents = getEventsForDate(date);
    // Send selected date events to parent
    onDateSelect(dayEvents, date);
  };

  return (
    <div className="calendar-component">
      <Calendar
        value={currentDate}
        onChange={setCurrentDate}
        onClickDay={handleDateClick}
        tileContent={({ date }) => {
          const dayEvents = getEventsForDate(date);
          return (
            dayEvents.length > 0 && (
              <div className="tile-content">
                <div className="event-dot"></div>
              </div>
            )
          );
        }}
      />
    </div>
  );
};

export default UpdatesCalendar;
