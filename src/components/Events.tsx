import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Events = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    // Fetch events from backend
    fetch('http://localhost:5000/api/events')
      .then(res => res.json())
      .then((data: any[]) => setEvents(data.map((event: any) => ({
        title: event.title,
        date: event.date.split('T')[0],
        id: event._id
      }))));
  }, []);

  const handleEventClick = (info: any) => {
    alert(`Event: ${info.event.title}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Events</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventClick={handleEventClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;