import React, { useState, useRef, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import './UpdatesCalendar.css';
import Calendar from 'react-calendar';

const UpdatesCalendar = () => {
  const [hoveredDate, setHoveredDate] = useState(null);
  const [clickedDate, setClickedDate] = useState(null);
  const [eventsForClickedDate, setEventsForClickedDate] = useState([]);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [eventsForHoveredDate, setEventsForHoveredDate] = useState([]);

  const modalRef = useRef(null);

  const events = [
    { date: '2024-12-30', title: 'Team Meeting', description: 'Discuss project updates' },
    { date: '2025-01-21', title: 'Conference', description: 'Attend the annual conference' },
    { date: '2025-01-02', title: 'Christmas Party', description: 'Holiday celebration with friends' },
    { date: '2025-01-05', title: 'Christmas Party', description: 'Holiday celebration with friendsHoliday celebration with friendsHoliday celebration with friendsHoliday celebration with friendsHoliday celebration with friendsHoliday celebration with friends' },
  ];

  const getEventsForDate = (date) => {
    const formattedDate = date.toLocaleDateString('en-CA'); // Formats as YYYY-MM-DD in local time
    return events.filter((event) => event.date === formattedDate);
  };

  const handleMouseEnter = (date, event) => {
    const eventsForDate = getEventsForDate(date);
    if (eventsForDate.length > 0) {
      setHoveredDate(date);
      setEventsForHoveredDate(eventsForDate);

      const parentRect = event.target.closest('.react-calendar').getBoundingClientRect();
      const rect = event.target.getBoundingClientRect();

      setTooltipPosition({
        top: rect.top - parentRect.top - 25, // Relative to the calendar's parent
        left: rect.left - parentRect.left + rect.width / 2, // Centered horizontally
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredDate(null);
    setEventsForHoveredDate([]);
  };

  const handleDateClick = (date) => {
    const eventsForDate = getEventsForDate(date);
    setClickedDate(date);
    setEventsForClickedDate(eventsForDate);
  };

  const closeEventModal = () => {
    setClickedDate(null);
    setEventsForClickedDate([]);
  };

  // Detect clicks outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeEventModal();
      }
    };

    if (clickedDate) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [clickedDate]);

  return (
    <div className="react-calendar-with-events">
      <Calendar
        onChange={() => {}}
        onClickDay={handleDateClick}
        tileContent={({ date }) => {
          const eventsForDate = getEventsForDate(date);
          return (
            eventsForDate.length > 0 && (
              <div
                className="event-indicator"
                onMouseEnter={(e) => handleMouseEnter(date, e)}
                onMouseLeave={handleMouseLeave}
              />
            )
          );
        }}
      />
      {hoveredDate && (
        <div
          className="hover-event-popup tooltip"
          style={{
            position: 'absolute',
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left + 25}px`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <h4>Events on {hoveredDate.toDateString()}:</h4>
          {eventsForHoveredDate.map((event, index) => (
            <div key={index} className="event-item">
              <h5>{event.title}</h5>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      )}
      {clickedDate && (
        <div className="event-modal">
          <div className="event-modal-content" ref={modalRef}>
            <h4>Events on {clickedDate.toDateString()}:</h4>
            {eventsForClickedDate.length > 0 ? (
              eventsForClickedDate.map((event, index) => (
                <div key={index} className="event-item">
                  <h5>{event.title}</h5>
                  <p>{event.description}</p>
                </div>
              ))
            ) : (
              <p>No events for this date.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatesCalendar;
