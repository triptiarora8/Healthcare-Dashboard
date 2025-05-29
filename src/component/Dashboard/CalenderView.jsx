import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AppointmentCard from './AppointmentCard';

function WeekCalendar(props) {
  const cal = props.calendarData;
  const specials = props.specialAppointments;

  return (
    <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2">
        <span className="text-xs sm:text-sm text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full mr-2 whitespace-nowrap">
          This Week
        </span>
        <div className="flex items-center flex-wrap w-full sm:w-auto justify-between sm:justify-end">
          <h2 className="text-base sm:text-lg font-semibold mr-4 sm:mr-8 whitespace-nowrap">
            {cal.month} {cal.year}
          </h2>
          <div className="flex space-x-1">
            <button className="p-1 rounded-md bg-gray-100 text-gray-600">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1 rounded-md bg-gray-100 text-gray-600">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="min-w-[420px]">
          <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-1 sm:mb-2 text-center">
            {cal.days.map((d, idx) => (
              <div key={idx} className="text-[10px] sm:text-xs text-gray-500">
                {d.dayOfWeek}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-1 sm:mb-2 text-center">
            {cal.days.map((d, i) => (
              <div 
                key={i}
                className={`text-xs sm:text-sm font-medium ${d.date === 28 ? 'text-blue-600' : ''}`}
              >
                {d.date}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-1 sm:mb-2">
            {cal.days.map((d, dayIdx) => (
              <div key={dayIdx} className="space-y-1">
                {d.appointments.map((tm, j) => (
                  <div key={j} className="text-center">
                    {tm ? (
                      <div className={`text-[10px] sm:text-xs py-1 rounded-md ${
                        dayIdx === 5 && j === 0 ? 'bg-blue-100 text-blue-600' : 
                        dayIdx === 3 && j === 1 ? 'bg-blue-100 text-blue-600' : 
                        ''
                      }`}>
                        {tm}
                      </div>
                    ) : <div className="py-1">—</div>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
        {specials.map((item, idx) => (
          <AppointmentCard 
            key={item.id || idx}
            title={item.title}
            time={item.time}
            doctor={item.doctor}
            icon={item.icon}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

WeekCalendar.propTypes = {
  calendarData: PropTypes.shape({
    month: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    days: PropTypes.arrayOf(
      PropTypes.shape({
        dayOfWeek: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
        appointments: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
  }).isRequired,
  specialAppointments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      doctor: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WeekCalendar;