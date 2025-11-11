import React, { useContext, useState } from 'react';
import './UpdatesElement.css';
import UpdatesCalendar from '../UpdatesCalendar/UpdatesCalendar';
import { dataContext } from '../../data/Data';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const UpdatesElement = () => {
  const { events } = useContext(dataContext);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const categories = ['all', ...new Set(events.map(e => e.category).filter(Boolean))];

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(e => e.category === selectedCategory);

  const sortedEvents = filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

  const handleDateSelect = (eventsForDate, date) => {
    setSelectedDateEvents(eventsForDate);
    setSelectedDate(date);
  };

  return (
    <div className='updates-section'>
      <div className='updates-container'>
        <div className='updates-header'>
          <div className='header-content'>
            <h1 className='section-title'>
              <span className='title-icon'>
                <FaCalendarAlt />
              </span>
              EVENTS & CALENDAR
            </h1>
            <p className='section-subtitle'>Stay updated with our latest events and activities</p>
          </div>
        </div>

        <div className='updates-grid'>
          {/* Calendar Section */}
          <div className='calendar-container'>
            <div className='calendar-card'>
              <div className='card-header'>
                <h2 className='card-title'>Calendar</h2>
                <div className='header-decoration'></div>
              </div>
              <div className='calendar-wrapper'>
                <UpdatesCalendar onDateSelect={handleDateSelect} />
              </div>
            </div>
          </div>

          {/* Events Section */}
          <div className='events-container'>
            <div className='events-card'>
              <div className='card-header'>
                <h2 className='card-title'>Upcoming Events</h2>
                <div className='header-decoration'></div>
              </div>

              {/* Category Filter */}
              {categories.length > 1 && (
                <div className='category-filter'>
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedCategory(category);
                        setSelectedDateEvents([]); // reset when changing category
                      }}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              )}

              {/* Events List */}
              <div className='events-list-container'>
                <div className='events-list'>
                  {selectedDateEvents.length > 0 ? (
                    <>
                      <h3 className='event-date-title'>
                        Events on{' '}
                        {selectedDate?.toLocaleDateString('en', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </h3>
                      {selectedDateEvents.map((event, index) => (
                        <div key={index} className='event-card'>
                          <div className='event-date-badge'>
                            <span className='date-day'>
                              {new Date(event.date).getDate()}
                            </span>
                            <span className='date-month'>
                              {new Date(event.date).toLocaleString('en', { month: 'short' })}
                            </span>
                          </div>
                          <div className='event-details'>
                            <h4 className='event-title'>{event.title}</h4>
                            <p className='event-description'>{event.description}</p>
                            {event.location && (
                              <div className='event-meta'>
                                <span className='meta-item'>
                                  <FaMapMarkerAlt /> {event.location}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </>
                  ) : sortedEvents && sortedEvents.length > 0 ? (
                    sortedEvents.map((event, index) => (
                      <div key={index} className='event-card'>
                        <div className='event-date-badge'>
                          <span className='date-day'>
                            {new Date(event.date).getDate()}
                          </span>
                          <span className='date-month'>
                            {new Date(event.date).toLocaleString('en', { month: 'short' })}
                          </span>
                        </div>
                        <div className='event-details'>
                          <h4 className='event-title'>{event.title}</h4>
                          <p className='event-description'>{event.description}</p>
                          {event.location && (
                            <div className='event-meta'>
                              <span className='meta-item'>
                                <FaMapMarkerAlt /> {event.location}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className='no-events'>
                      <div className='no-events-icon'>
                        <FaCalendarAlt />
                      </div>
                      <p className='no-events-text'>No events available</p>
                      <p className='no-events-subtext'>Check back later for upcoming events</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatesElement;
