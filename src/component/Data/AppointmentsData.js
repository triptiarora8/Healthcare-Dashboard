export const upcomingAppointments = [
  {
    id: 'app1',
    title: 'Health checkup complete',
    time: '11:00 AM',
    day: 'Thursday',
    type: 'checkup',
    icon: 'stethoscope',
  },
  {
    id: 'app2',
    title: 'Ophthalmologist',
    time: '14:00 PM',
    day: 'Thursday',
    type: 'eye',
    icon: 'eye',
  },
  {
    id: 'app3',
    title: 'Cardiologist',
    time: '12:00 AM',
    day: 'Saturday',
    type: 'heart',
    icon: 'heart',
  },
  {
    id: 'app4',
    title: 'Neurologist',
    time: '16:00 PM',
    day: 'Saturday',
    type: 'brain',
    icon: 'brain',
  },
];

export const calendarData = {
  month: 'October',
  year: 2021,
  days: [
    { dayOfWeek: 'Mon', date: 25, appointments: ['10:00', '11:00', '12:00'] },
    { dayOfWeek: 'Tues', date: 26, appointments: ['08:00', '09:00', '10:00'] },
    { dayOfWeek: 'Wed', date: 27, appointments: ['12:00', '', '13:00'] },
    { dayOfWeek: 'Thurs', date: 28, appointments: ['10:00', '11:00', ''] },
    { dayOfWeek: 'Fri', date: 29, appointments: ['', '14:00', '16:00'] },
    { dayOfWeek: 'Sat', date: 30, appointments: ['12:00', '14:00', '15:00'] },
    { dayOfWeek: 'Sun', date: 31, appointments: ['09:00', '10:00', '11:00'] },
  ],
};

export const specialAppointments = [
  {
    id: 'dentist',
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: 'tooth',
  },
  {
    id: 'physio',
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    icon: 'bone',
  },
];

export const activityData = [
  { day: 'Mon', appointments: [1, 2, 0, 1] },
  { day: 'Tues', appointments: [0, 1, 2, 1] },
  { day: 'Wed', appointments: [1, 0, 1, 0] },
  { day: 'Thurs', appointments: [0, 2, 1, 0] },
  { day: 'Fri', appointments: [1, 0, 2, 1] },
  { day: 'Sat', appointments: [0, 2, 0, 1] },
  { day: 'Sun', appointments: [1, 0, 0, 2] },
];