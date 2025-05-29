import React from 'react';
import BodyOverview from './dashboard/AnatomySection';
import WeekCalendar from './Dashboard/CalenderView';
import NextAppointments from './Dashboard/UpcomingScedule';
import ActivityOverview from './Dashboard/ActivityChart';
import { calendarData, specialAppointments, upcomingAppointments, activityData } from './Data/AppointmentsData';
import { healthIndicators } from './Data/healthData';

const DashboardContent = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <BodyOverview healthIndicators={healthIndicators} />
          <ActivityOverview activityData={activityData} />
        </div>
        <div className="space-y-6">
          <WeekCalendar 
            calendarData={calendarData} 
            specialAppointments={specialAppointments}
          />
          <NextAppointments appointments={upcomingAppointments} />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;