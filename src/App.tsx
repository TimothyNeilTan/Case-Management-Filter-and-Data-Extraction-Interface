import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import CaseManagement from './components/CaseManagement';
import CaseDetail from './components/CaseDetail';
export function App() {
  const [currentView, setCurrentView] = useState('caseManagement');
  const [selectedCase, setSelectedCase] = useState(null);
  const handleCaseClick = caseData => {
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
        {currentView === 'caseManagement' && <CaseManagement onCaseClick={handleCaseClick} />}
        {currentView === 'caseDetail' && selectedCase && <CaseDetail caseData={selectedCase} onBack={handleBackToCases} />}
      </div>
    </div>;
}