import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';
import HealthStatusCard from './HealthStatus';

const BodyOverview = ({ healthIndicators }) => {
  const cardIndicators = healthIndicators.filter(
    indicator => indicator.id !== 'heart' && indicator.id !== 'leg'
  );
  
  return (
    <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm relative">
      <div className="flex flex-col md:flex-row items-start gap-3 sm:gap-4 md:gap-8">
        <div className="flex-1 relative flex justify-center w-full mb-4 md:mb-0">
          <div className="relative w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64">
            <img
              src="./human_Anatomy.png"
              alt="Human Anatomy"
              className="w-full h-full object-contain opacity-80"
            />
            {healthIndicators.map((indicator) => (
              <div 
                key={indicator.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  left: indicator.positionX, 
                  top: indicator.positionY 
                }}
              >
                {(indicator.id === 'heart' || indicator.id === 'leg') ? (
                  <div 
                    className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg text-white text-xs sm:text-sm md:text-xs font-medium shadow-md"
                    style={{ backgroundColor: indicator.color }}
                  >
                    {indicator.name}
                  </div>
                ) : (
                  <div 
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" 
                    style={{ backgroundColor: indicator.color }}
                  />
                )}
              </div>
            ))}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 sm:space-x-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-base sm:text-lg">-</span>
              </div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-base sm:text-lg">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4 w-full md:w-48">
          {cardIndicators.map((indicator) => (
            <HealthStatusCard 
              key={indicator.id}
              name={indicator.name}
              status={indicator.status}
              date={indicator.date}
              progress={indicator.progress}
              color={indicator.color}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-3 md:absolute md:bottom-4 md:right-4 md:mt-0 items-center text-xs sm:text-sm md:text-xs text-indigo-600">
        <span>Details</span>
        <ChevronRight className="w-3 h-3 ml-1" />
      </div>
    </div>
  );
};

BodyOverview.propTypes = {
  healthIndicators: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['healthy', 'warning', 'critical']).isRequired,
      date: PropTypes.string.isRequired,
      positionX: PropTypes.string.isRequired,
      positionY: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BodyOverview;