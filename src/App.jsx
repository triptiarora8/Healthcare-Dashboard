import React from 'react';
import Header from "./component/Header"
import Sidebar from './component/SideBar';
import DashboardContent from './component/DashboardContent';
import { navigationItems } from './component/Data/NavigationData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar navigationItems={navigationItems} />
      <div className="flex-1 flex flex-col pl-[20%]"> 
        <Header />
        <main className="flex-1 p-6 ">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}

export default App;