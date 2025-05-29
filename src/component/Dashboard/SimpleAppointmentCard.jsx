import React from 'react';
import PropTypes from 'prop-types';
import * as LucideIcons from 'lucide-react';

function SimpleAppointmentCard(props) {
  const title = props.title;
  const time = props.time;
  const icon = props.icon;
  const type = props.type;

  const IconComponent = LucideIcons[icon.charAt(0).toUpperCase() + icon.slice(1)];

  function getColor() {
    switch (type) {
      case 'checkup':
        return 'text-pink-500 bg-pink-50';
      case 'eye':
        return 'text-blue-500 bg-blue-50';
      case 'heart':
        return 'text-red-500 bg-red-50';
      case 'brain':
        return 'text-indigo-500 bg-indigo-50';
      default:
        return 'text-gray-500 bg-gray-100';
    }
  }

  return (
    <div className="bg-gray-100 bg-opacity-50 p-4 rounded-xl">
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-lg ${getColor()} flex items-center justify-center mr-3`}>
          {IconComponent ? <IconComponent className="w-4 h-4" /> : null}
        </div>
        <div>
          <h3 className="font-medium text-sm">{title}</h3>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
    </div>
  );
}

SimpleAppointmentCard.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SimpleAppointmentCard;