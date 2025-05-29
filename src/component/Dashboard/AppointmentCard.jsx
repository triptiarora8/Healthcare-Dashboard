import React from 'react';
import PropTypes from 'prop-types';
import * as LucideIcons from 'lucide-react';

const AppointmentCard = ({ id, title, time, doctor, icon }) => {
  const IconComponent = LucideIcons[icon.charAt(0).toUpperCase() + icon.slice(1)];
  const getBgColor = () => {
    if (id === 'dentist') return 'bg-indigo-600 text-white';
    if (id === 'physio') return 'bg-white border border-gray-100 text-gray-800';
    return 'bg-white border border-gray-100 text-gray-800';
  };
  const getIconBgColor = () => {
    if (id === 'dentist') return 'bg-indigo-500 text-white';
    if (id === 'physio') return 'bg-orange-100 text-orange-500';
    return 'bg-gray-100 text-gray-600';
  };

  return (
    <div className={`p-4 rounded-xl shadow-sm ${getBgColor()}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-md ${getIconBgColor()} flex items-center justify-center mr-3`}>
            {IconComponent && <IconComponent className="w-4 h-4" />}
          </div>
          <h3 className="font-medium text-sm">{title}</h3>
        </div>
      </div>
      <div className="text-xs ml-11">
        <p className="mb-1">{time}</p>
        <p className={id === 'dentist' ? 'text-blue-200' : 'text-gray-500'}>
          {doctor}
        </p>
      </div>
    </div>
  );
};

AppointmentCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  doctor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default AppointmentCard;