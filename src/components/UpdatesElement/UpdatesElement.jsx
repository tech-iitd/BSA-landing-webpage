import React, { useContext } from 'react';
import './UpdatesElement.css';
import UpdatesCalendar from '../UpdatesCalendar/UpdatesCalendar';
import { dataContext } from '../../data/Data';

const UpdatesElement = () => {
  const { events } = useContext(dataContext);

  return (
    <div className='updates-element'>
      <div className='updates-element-first-container'>
        <h1>CALENDAR</h1>
        <div className='calendar-section'>
          <UpdatesCalendar />
        </div>
      </div>
      
      <div className='updates-element-second-container'>
        <h2>EVENTS</h2>
        <div className='events-box'>
          <div className='events-list'>
            {events && events.length > 0 ? (
              events.map((event, index) => (
                <div key={index} className='event-item-display'>
                  <div className='event-date'>{event.date}</div>
                  <div className='event-content'>
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className='no-events'>No events available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatesElement;