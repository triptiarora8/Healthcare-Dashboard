import React from 'react';
import PropTypes from 'prop-types';

function HealthStatusCard(props) {
  const name = props.name;
  const status = props.status;
  const date = props.date;
  const progress = props.progress;
  const color = props.color;

  return (
    <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-50">
      <div className="flex items-center mb-2">
        <div
          className="w-5 h-5 rounded-md mr-2 flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          {status === 'healthy'
            ? <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            : null}
        </div>
        <h3 className="font-medium text-sm">{name}</h3>
      </div>
      {date ? <p className="text-xs text-gray-500 mb-2">{date}</p> : null}
      <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: progress + '%', backgroundColor: color }}
        />
      </div>
    </div>
  );
}

HealthStatusCard.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['healthy', 'warning', 'critical']).isRequired,
  date: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default HealthStatusCard;