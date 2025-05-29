import React from 'react';
import PropTypes from 'prop-types'
import * as LucideIcons from 'lucide-react';

const SideMenu = ({ navigationItems }) => {
  const generalLinks = navigationItems.filter(item => item.category === 'general');
  const toolLinks = navigationItems.filter(item => item.category === 'tools');
  
  const renderNavItem = (item) => {
    const IconComponent = LucideIcons[item.icon.charAt(0).toUpperCase() + item.icon.slice(1).replace(/-([a-z])/g, g => g[1].toUpperCase())];
    return (
      <li key={item.id} className={`mb-2 ${item.active ? 'relative' : ''}`}>
        <a 
          href="#" 
          className={`flex items-center p-3 rounded-lg ${
            item.active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          {item.active && (
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-indigo-600 rounded-r-md"></span>
          )}
          {IconComponent && <IconComponent className={`w-5 h-5 ${item.active ? 'text-indigo-600' : 'text-gray-500'}`} />}
          <span className={`ml-3 hidden md:block ${item.active ? 'font-medium' : ''}`}>{item.label}</span>
        </a>
      </li>
    );
  };

  return (
    <aside className="fixed  md:w-[20%] w-[20%] min-h-screen bg-white border-r border-gray-100 flex flex-col z-30 overflow-y-auto srcollbar-hide">
      <div className="p-4 flex-1">
        <div className="mt-6 mb-8">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">General</h2>
          <ul>
            {generalLinks.map(renderNavItem)}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Tools</h2>
          <ul>
            {toolLinks.map(renderNavItem)}
          </ul>
        </div>
      </div>
    </aside>
  );
};

SideMenu.propTypes = {
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      category: PropTypes.oneOf(['general', 'tools']).isRequired,
      active: PropTypes.bool,
    })
  ).isRequired,
};

export default SideMenu;