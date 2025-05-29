import React from 'react';
import PropTypes from 'prop-types';
import SimpleAppointmentCard from './SimpleAppointmentCard';

function NextAppointments(props) {
  const appointments = props.appointments;
  let appointmentsByDay = {};

  // group by day
  for (let i = 0; i < appointments.length; i++) {
    let appt = appointments[i];
    if (!appointmentsByDay[appt.day]) {
      appointmentsByDay[appt.day] = [];
    }
    appointmentsByDay[appt.day].push(appt);
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">The Upcoming Schedule</h2>
      {Object.keys(appointmentsByDay).map((day, idx) => (
        <div key={day} className="mb-6 last:mb-0">
          <h3 className="text-sm text-gray-500 mb-3">On {day}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {appointmentsByDay[day].map((appointment, i) => (
              <SimpleAppointmentCard
                key={appointment.id}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
                type={appointment.type}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

NextAppointments.propTypes = {
  appointments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NextAppointments;