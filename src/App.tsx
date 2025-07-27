import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import CaseManagement from './components/CaseManagement';
import CaseDetail from './components/CaseDetail';
import { CaseItem } from './types';

interface Filters {
  status: string;
  alerts: string[];
  caseAge: {
    moreThan: number | '';
    lessThan: number | '';
  };
}

export function App() {
  const [currentView, setCurrentView] = useState('caseManagement');
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  const [showCaseAgeFilter, setShowCaseAgeFilter] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    status: '',
    alerts: [],
    caseAge: {
      moreThan: '',
      lessThan: ''
    }
  });

  const handleCaseClick = (caseData: CaseItem) => {
    setSelectedCase(caseData);
    setCurrentView('caseDetail');
  };

  const handleBackToCases = () => {
    setCurrentView('caseManagement');
    setSelectedCase(null);
  };

  return <div className="flex h-screen w-full bg-gray-50">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-1 overflow-auto">
        {currentView === 'caseManagement' && (
          <CaseManagement 
            onCaseClick={handleCaseClick} 
            filters={filters}
            setFilters={setFilters}
            showCaseAgeFilter={showCaseAgeFilter}
            setShowCaseAgeFilter={setShowCaseAgeFilter}
          />
        )}
        {currentView === 'caseDetail' && selectedCase && (
          <CaseDetail caseData={selectedCase} onBack={handleBackToCases} />
        )}
      </div>
    </div>;
}