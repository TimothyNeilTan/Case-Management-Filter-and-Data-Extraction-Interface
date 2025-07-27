import React, { useState } from 'react';
import { ChevronDownIcon, PlusIcon, SearchIcon } from 'lucide-react';
import { sampleCases } from '../data/sampleData';
import Breadcrumb from './Breadcrumb';
import { CaseItem } from '../types';

interface Filters {
  status: string;
  alerts: string[];
  caseAge: {
    moreThan: number | '';
    lessThan: number | '';
  };
}

interface CaseManagementProps {
  onCaseClick: (caseItem: CaseItem) => void;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  showCaseAgeFilter: boolean;
  setShowCaseAgeFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const CaseManagement: React.FC<CaseManagementProps> = ({
  onCaseClick,
  filters,
  setFilters,
  showCaseAgeFilter,
  setShowCaseAgeFilter
}) => {
  const [activeTab, setActiveTab] = useState('allCases');
  const [showAlertsDropdown, setShowAlertsDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showCaseAgeDropdown, setShowCaseAgeDropdown] = useState(false);
  const [showPlusDropdown, setShowPlusDropdown] = useState(false);

  const handleFilterChange = (filterType: keyof Filters, value: string | string[] | {moreThan: number | '', lessThan: number | ''}) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };

  const handleCaseAgeChange = (type: 'moreThan' | 'lessThan', value: string) => {
    const numValue = value === '' ? '' : parseInt(value);
    handleFilterChange('caseAge', {
      ...filters.caseAge,
      [type]: numValue
    });
  };

  const handleAlertToggle = (alertType: string) => {
    const updatedAlerts = [...filters.alerts];
    const alertIndex = updatedAlerts.indexOf(alertType);
    if (alertIndex >= 0) {
      updatedAlerts.splice(alertIndex, 1);
    } else {
      updatedAlerts.push(alertType);
    }
    handleFilterChange('alerts', updatedAlerts);
    setShowAlertsDropdown(false);
  };

  const handlePlusClick = () => {
    setShowPlusDropdown(!showPlusDropdown);
    setShowStatusDropdown(false);
    setShowAlertsDropdown(false);
    setShowCaseAgeDropdown(false);
  };

  const handleCaseAgeSelect = () => {
    setShowCaseAgeFilter(true);
    setShowPlusDropdown(false);
  };

  const filteredCases = sampleCases.filter(caseItem => {
    if (filters.status && caseItem.status !== filters.status) return false;
    
    // Case age filtering - with debug logging
    if (filters.caseAge.moreThan !== '') {
      console.log(`Checking ${caseItem.entity}: ageInDays=${caseItem.ageInDays}, moreThan=${filters.caseAge.moreThan}, condition: ${caseItem.ageInDays} <= ${filters.caseAge.moreThan} = ${caseItem.ageInDays <= filters.caseAge.moreThan}`);
      if (caseItem.ageInDays <= filters.caseAge.moreThan) return false;
    }
    if (filters.caseAge.lessThan !== '') {
      console.log(`Checking ${caseItem.entity}: ageInDays=${caseItem.ageInDays}, lessThan=${filters.caseAge.lessThan}, condition: ${caseItem.ageInDays} >= ${filters.caseAge.lessThan} = ${caseItem.ageInDays >= filters.caseAge.lessThan}`);
      if (caseItem.ageInDays >= filters.caseAge.lessThan) return false;
    }
    
    if (filters.alerts.length > 0) {
      const hasMatchingAlert = filters.alerts.some(alertType => caseItem.alerts.includes(alertType));
      if (!hasMatchingAlert) return false;
    }
    return true;
  });
  return <div className="p-6 w-full">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[
        { label: 'Alloy' },
        { label: 'Cases', isActive: true }
      ]} />
      
      <h1 className="text-2xl font-bold mb-4">Case Management</h1>
      {/* Search bar */}
      <div className="flex mb-6">
        <div className="relative flex-1 mr-2">
          <input type="text" placeholder="Search or Filter Results" className="w-full border border-gray-300 rounded p-2 pl-10" />
          <SearchIcon size={18} className="absolute left-3 top-2.5 text-gray-400" />
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded">
          <SearchIcon size={18} />
        </button>
      </div>
      {/* Filters */}
      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-2">Filter by</div>
        <div className="flex flex-wrap gap-2">
          {/* Status Filter */}
          <div className="relative">
            <button 
              className="flex items-center border border-gray-300 rounded px-3 py-1.5 text-sm bg-white" 
              onClick={() => {
                setShowStatusDropdown(!showStatusDropdown);
                setShowAlertsDropdown(false);
                setShowCaseAgeDropdown(false);
                setShowPlusDropdown(false);
              }}
            >
              Status
              <ChevronDownIcon size={16} className="ml-1" />
            </button>
            {showStatusDropdown && <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg p-2 z-10">
                <div className="px-3 py-1.5 cursor-pointer hover:bg-gray-100 text-sm" onClick={() => {
                  handleFilterChange('status', '');
                  setShowStatusDropdown(false);
                }}>
                  Clear
                </div>
                <div className="px-3 py-1.5 cursor-pointer hover:bg-gray-100 text-sm" onClick={() => {
                  handleFilterChange('status', 'Needs Review');
                  setShowStatusDropdown(false);
                }}>
                  Needs Review
                </div>
                <div className="px-3 py-1.5 cursor-pointer hover:bg-gray-100 text-sm" onClick={() => {
                  handleFilterChange('status', 'Ops');
                  setShowStatusDropdown(false);
                }}>
                  Ops
                </div>
                <div className="px-3 py-1.5 cursor-pointer hover:bg-gray-100 text-sm" onClick={() => {
                  handleFilterChange('status', 'Watchlist');
                  setShowStatusDropdown(false);
                }}>
                  Watchlist
                </div>
              </div>}
          </div>

          {/* Alerts Filter */}
          <div className="relative">
            <button 
              className="flex items-center justify-between border border-gray-300 rounded px-3 py-1.5 text-sm bg-white" 
              onClick={() => {
                setShowAlertsDropdown(!showAlertsDropdown);
                setShowStatusDropdown(false);
                setShowCaseAgeDropdown(false);
                setShowPlusDropdown(false);
              }} 
              style={{minWidth: '80px'}}
            >
              <span>Alerts</span>
              <ChevronDownIcon size={16} className="ml-1" />
            </button>
            {showAlertsDropdown && <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg p-2 z-10 w-48">
                <div className="px-3 py-1.5 cursor-pointer hover:bg-gray-100 text-sm" onClick={() => {
              handleFilterChange('alerts', []);
              setShowAlertsDropdown(false);
            }}>
                  Clear All
                </div>
                <div className="flex items-center px-3 py-1.5 cursor-pointer hover:bg-gray-100 text-sm">
                  <input type="checkbox" className="mr-2" checked={filters.alerts.includes('red')} onChange={() => handleAlertToggle('red')} />
                  <div className="h-3 w-3 rounded-sm bg-red-600 mr-2"></div>
                  High Priority
                </div>
                <div className="flex items-center px-3 py-1.5 cursor-pointer hover:bg-gray-100 text-sm">
                  <input type="checkbox" className="mr-2" checked={filters.alerts.includes('orange')} onChange={() => handleAlertToggle('orange')} />
                  <div className="h-3 w-3 rounded-sm bg-orange-500 mr-2"></div>
                  Medium Priority
                </div>
                <div className="flex items-center px-3 py-1.5 cursor-pointer hover:bg-gray-100 text-sm">
                  <input type="checkbox" className="mr-2" checked={filters.alerts.includes('yellow')} onChange={() => handleAlertToggle('yellow')} />
                  <div className="h-3 w-3 rounded-sm bg-yellow-400 mr-2"></div>
                  Low Priority
                </div>
                <div className="flex items-center px-3 py-1.5 cursor-pointer hover:bg-gray-100 text-sm">
                  <input type="checkbox" className="mr-2" checked={filters.alerts.includes('green')} onChange={() => handleAlertToggle('green')} />
                  <div className="h-3 w-3 rounded-sm bg-green-500 mr-2"></div>
                  No Issues
                </div>
              </div>}
          </div>

          {/* Plus Button */}
          <div className="relative">
            <button 
              className="flex items-center border border-gray-300 rounded px-3 py-1.5 text-sm bg-white hover:bg-gray-50" 
              onClick={handlePlusClick}
            >
              <PlusIcon size={16} />
            </button>
            {showPlusDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg p-2 z-10 w-32">
                <div 
                  className="px-3 py-1.5 cursor-pointer hover:bg-gray-100 text-sm" 
                  onClick={handleCaseAgeSelect}
                >
                  Case Age
                </div>
              </div>
            )}
          </div>

          {/* Case Age Filter - only show when activated */}
          {showCaseAgeFilter && (
            <div className="relative">
              <button 
                className="flex items-center border border-gray-300 rounded px-3 py-1.5 text-sm bg-white" 
                onClick={() => {
                  setShowCaseAgeDropdown(!showCaseAgeDropdown);
                  setShowStatusDropdown(false);
                  setShowAlertsDropdown(false);
                  setShowPlusDropdown(false);
                }}
              >
                Case Age
                <ChevronDownIcon size={16} className="ml-1" />
              </button>
              {showCaseAgeDropdown && <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg p-3 z-10 w-64">
                  <div className="mb-2">
                    <label className="block text-xs font-medium text-gray-700 mb-1">More than (days)</label>
                    <input 
                      type="number" 
                      min="0"
                      value={filters.caseAge.moreThan} 
                      onChange={(e) => handleCaseAgeChange('moreThan', e.target.value)} 
                      placeholder="Enter number" 
                      className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-xs font-medium text-gray-700 mb-1">Less than (days)</label>
                    <input 
                      type="number" 
                      min="0"
                      value={filters.caseAge.lessThan} 
                      onChange={(e) => handleCaseAgeChange('lessThan', e.target.value)} 
                      placeholder="Enter number" 
                      className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <button 
                      className="px-3 py-1 text-xs text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded"
                      onClick={() => {
                        handleFilterChange('caseAge', { moreThan: '', lessThan: '' });
                        setShowCaseAgeDropdown(false);
                      }}
                    >
                      Clear
                    </button>
                    <button 
                      className="px-3 py-1 text-xs bg-blue-600 text-white hover:bg-blue-700 rounded"
                      onClick={() => setShowCaseAgeDropdown(false)}
                    >
                      Apply
                    </button>
                  </div>
                </div>}
            </div>
          )}

          {/* Applied filters */}
          {filters.status && <div className="flex items-center bg-gray-100 rounded px-3 py-1.5 text-sm">
              Status: {filters.status}
              <button className="ml-2 text-gray-500" onClick={() => handleFilterChange('status', '')}>
                ×
              </button>
            </div>}
          {filters.alerts.length > 0 && <div className="flex items-center bg-gray-100 rounded px-3 py-1.5 text-sm">
              Alerts: {filters.alerts.length} selected
              <button className="ml-2 text-gray-500" onClick={() => handleFilterChange('alerts', [])}>
                ×
              </button>
            </div>}
          {(filters.caseAge.moreThan !== '' || filters.caseAge.lessThan !== '') && <div className="flex items-center bg-gray-100 rounded px-3 py-1.5 text-sm">
              Case Age: 
              {filters.caseAge.moreThan !== '' && filters.caseAge.lessThan !== '' 
                ? `${filters.caseAge.moreThan}-${filters.caseAge.lessThan} days`
                : filters.caseAge.moreThan !== '' 
                  ? `>${filters.caseAge.moreThan} days`
                  : `<${filters.caseAge.lessThan} days`
              }
              <button className="ml-2 text-gray-500" onClick={() => handleFilterChange('caseAge', { moreThan: '', lessThan: '' })}>
                ×
              </button>
            </div>}
        </div>
      </div>
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-4">
        <div className="flex">
          <div className={`px-6 py-2 text-sm cursor-pointer relative ${activeTab === 'allCases' ? 'text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('allCases')}>
            All Cases
            {activeTab === 'allCases' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600"></div>}
          </div>
          <div className={`px-6 py-2 text-sm cursor-pointer relative ${activeTab === 'needsReview' ? 'text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('needsReview')}>
            Needs Review
            {activeTab === 'needsReview' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600"></div>}
          </div>
          <div className={`px-6 py-2 text-sm cursor-pointer relative ${activeTab === 'ops' ? 'text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('ops')}>
            Ops
            {activeTab === 'ops' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600"></div>}
          </div>
          <div className={`px-6 py-2 text-sm cursor-pointer relative ${activeTab === 'watchlist' ? 'text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('watchlist')}>
            Watchlist
            {activeTab === 'watchlist' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600"></div>}
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="border rounded-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Entity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Opened/Closed
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Case Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Alerts
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Case ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Updated
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCases.map(caseItem => <tr key={caseItem.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => onCaseClick(caseItem)}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="h-4 w-4 text-blue-600" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {caseItem.entity}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-teal-700 text-white">
                    {caseItem.openedClosed}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{caseItem.status}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm ${caseItem.ageInDays > 10 ? 'text-red-600' : 'text-gray-900'}`}>
                    {caseItem.ageInDays} days
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex">
                    {caseItem.alerts.map((alert, index) => <div key={index} className={`h-4 w-4 rounded-sm mr-1 ${alert === 'red' ? 'bg-red-600' : alert === 'orange' ? 'bg-orange-500' : alert === 'yellow' ? 'bg-yellow-400' : 'bg-green-500'}`}></div>)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {caseItem.caseId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {caseItem.lastUpdated}
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};
export default CaseManagement;