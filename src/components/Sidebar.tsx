import React from 'react';
import { BarChart2Icon, UsersIcon, ClipboardListIcon, FolderIcon, WorkflowIcon, SettingsIcon } from 'lucide-react';
const Sidebar = ({
  currentView,
  setCurrentView
}) => {
  const menuItems = [{
    id: 'evaluations',
    icon: <BarChart2Icon size={18} />,
    label: 'Evaluations'
  }, {
    id: 'entities',
    icon: <UsersIcon size={18} />,
    label: 'Entities'
  }, {
    id: 'reviewQueue',
    icon: <ClipboardListIcon size={18} />,
    label: 'Review Queue'
  }, {
    id: 'caseManagement',
    icon: <FolderIcon size={18} />,
    label: 'Case Management'
  }, {
    id: 'workflows',
    icon: <WorkflowIcon size={18} />,
    label: 'Workflows'
  }, {
    id: 'settings',
    icon: <SettingsIcon size={18} />,
    label: 'Settings'
  }];
  return <div className="w-48 bg-gray-900 text-white">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xs font-semibold">
          Transaction Monitoring Overview
        </h1>
      </div>
      <nav className="mt-4">
        {menuItems.map(item => <div key={item.id} onClick={() => setCurrentView(item.id)} className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-800 ${currentView === item.id ? 'border-l-2 border-green-500 bg-gray-800' : ''}`}>
            <span className="mr-3 text-gray-400">{item.icon}</span>
            <span className={`text-sm ${currentView === item.id ? 'text-white' : 'text-gray-400'}`}>
              {item.label}
            </span>
          </div>)}
      </nav>
    </div>;
};
export default Sidebar;