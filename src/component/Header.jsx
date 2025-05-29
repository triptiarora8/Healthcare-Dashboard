import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 p-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold flex items-center">
        <span className="text-cyan-500 font-bold hidden md:block">Health</span>
        <span className="text-cyan-500 font-bold md:hidden block">H</span>
        <span className='hidden md:block'>care</span>
        <span className="">.</span>
      </h1>
      
      <div className="flex-1 md:mx-12 mx-4">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 rounded-full py-2 px-4 pl-10 w-full text-sm focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 relative">
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full"></span>
        </button>
        
        <div className="flex items-center">
          <div className="w-9 h-9 rounded-xl bg-cyan-100 flex items-center justify-center ">
            <img 
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="User" 
              className="w-8 h-8 rounded-xl object-cover"
            />
          </div>
        </div>
        
        <button className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;