import React from 'react';
import PropTypes from 'prop-types';

const ActivityOverview = ({ activityData }) => {
  const maxBarHeight = 160;
  const barColors = ['#4cc9f0', '#06d6a0', '#3b82f6', '#6366f1'];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Activity</h2>
        <p className="text-sm text-gray-500 whitespace-nowrap">3 appointment on this week</p>
      </div>
      <div className="flex justify-between h-44 items-end">
        {activityData.map((day, dayIndex) => (
          <div key={day.day} className="flex flex-col items-center">
            <div className="flex items-end h-36 space-x-1 mb-2">
              {day.appointments.map((value, i) => {
                const height = value === 0 ? 0 : (value === 1 ? maxBarHeight / 3 : maxBarHeight / 1.5);
                return value > 0 ? (
                  <div
                    key={`${day.day}-${i}`}
                    className="rounded-md w-2"
                    style={{
                      height: `${height}px`,
                      backgroundColor: barColors[i % barColors.length],
                    }}
                  ></div>
                ) : null;
              })}
            </div>
            <span className="text-xs text-gray-500">{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

ActivityOverview.propTypes = {
  activityData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      appointments: PropTypes.arrayOf(PropTypes.number).isRequired,
    })
  ).isRequired,
};

export default ActivityOverview;