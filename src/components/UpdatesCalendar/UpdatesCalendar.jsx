import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './UpdatesCalendar.css';
import Calendar from 'react-calendar';
const UpdatesCalendar = () => {
    const [date, setDate] = useState(new Date());

  return (
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
  );
}

export default UpdatesCalendar;
