import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { motion } from 'framer-motion';
import {} from 'lucide-react';
import { API_URL } from '../config';

const Events = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    // Fetch events from backend
    fetch(`${API_URL}/events`)
      .then(res => res.json())
      .then((data: any[]) => setEvents(data.map((event: any) => ({
        title: event.title,
        date: event.date.split('T')[0],
        id: event._id,
        color: '#10B981', // Tailwind emerald-500
      }))))
      .catch(err => {
        console.error("Failed to fetch events:", err);
        // Fallback dummy events for UI demonstration
        setEvents([
          { title: 'DSA Mega Hackathon', date: new Date().toISOString().split('T')[0], id: '1', color: '#10B981' },
          { title: 'React 19 Workshop', date: new Date(Date.now() + 86400000).toISOString().split('T')[0], id: '2', color: '#3B82F6' }
        ]);
      });
  }, []);

  const handleEventClick = (info: any) => {
    alert(`Event Details\nTitle: ${info.event.title}\nDate: ${info.event.startStr}`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-48 pb-24 font-sans overflow-hidden text-slate-900 text-slate-900">
      <div className="container mx-auto px-6 max-w-6xl relative">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24 relative z-10"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 text-[10px] font-black rounded-full mb-8 uppercase tracking-[0.2em] shadow-sm">
            <span>RIT Records</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Hackathons</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
            Stay updated with our upcoming coding contests, immersive workshops, and tech talks.
          </p>
        </motion.div>

        <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50">
          <div className="calendar-container rounded-[2rem] overflow-hidden">
            <style>
              {`
                .fc { font-family: inherit; }
                .fc-toolbar-title { font-weight: 900 !important; color: #0f172a; font-size: 1.5rem !important; }
                .fc-button-primary { background-color: #10b981 !important; border: none !important; font-weight: 800 !important; border-radius: 0.75rem !important; text-transform: uppercase !important; font-size: 0.75rem !important; padding: 0.7rem 1.2rem !important; }
                .fc-button-primary:hover { background-color: #059669 !important; }
                .fc-button-active { background-color: #064e3b !important; }
                .fc-daygrid-day-number { color: #475569; font-weight: 700; padding: 12px !important; }
                .fc-col-header-cell { background-color: #f8fafc; padding: 16px 0; color: #64748b; font-weight: 800; text-transform: uppercase; font-size: 0.75rem; border-bottom: 2px solid #e2e8f0; }
                .fc-day-today { background-color: #f0fdf4 !important; }
                .fc-event { border-radius: 8px; padding: 4px 8px; border: none !important; font-weight: 700; font-size: 0.7rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); transition: transform 0.2s; }
                .fc-event:hover { transform: scale(1.03); cursor: pointer; }
              `}
            </style>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              eventClick={handleEventClick}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek'
              }}
              height="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;