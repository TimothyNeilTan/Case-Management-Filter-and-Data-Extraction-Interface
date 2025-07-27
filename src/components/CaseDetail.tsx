import React, { useState, useEffect } from 'react';
import { CalendarIcon, LockIcon } from 'lucide-react';
import Breadcrumb from './Breadcrumb';
import { CaseItem, Transaction } from '../types';

interface CaseDetailProps {
  caseData: CaseItem;
  onBack: () => void;
}

const CaseDetail: React.FC<CaseDetailProps> = ({
  caseData,
  onBack
}) => {
  const [dateRange, setDateRange] = useState('30');
  const [transactions, setTransactions] = useState<Transaction[]>(caseData.transactions || []);

  const breadcrumbItems = [
    { label: 'Alloy' },
    { label: 'Cases', onClick: onBack },
    { label: caseData.entity, isActive: true }
  ];

  // Function to filter transactions based on date range
  const filterTransactionsByDate = (transactions: Transaction[], days: number) => {
    const today = new Date('2025-07-26'); // Current date
    const cutoffDate = new Date(today);
    cutoffDate.setDate(today.getDate() - days);
    
    return transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      return transactionDate >= cutoffDate && transactionDate <= today;
    });
  };

  // Update transactions when date range changes
  useEffect(() => {
    const filteredTransactions = filterTransactionsByDate(caseData.transactions || [], parseInt(dateRange));
    setTransactions(filteredTransactions);
  }, [dateRange, caseData.transactions]);

  // Function to format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };
  return <div className="p-6 w-full bg-gray-50">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{caseData.entity}</h1>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-200">
            {/* Icon placeholder */}
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <LockIcon size={20} />
          </button>
        </div>
      </div>
      {/* Case info */}
      <div className="bg-white p-4 border-t-2 border-blue-500 rounded-b-md shadow mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-500">Status</div>
            <div className="font-medium">{caseData.status}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Case Opened</div>
            <div className="font-medium">{caseData.openedDate}</div>
          </div>
        </div>
      </div>
      {/* Overview section */}
      <div className="bg-white p-4 rounded-md shadow mb-4">
        <h2 className="text-lg font-semibold mb-4">OVERVIEW</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-md p-4">
            <div className="text-sm text-gray-500">CARD NAME HERE</div>
            <div className="text-sm text-gray-500">
              Account #{caseData.accountId}
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-500">CURRENT BALANCE</div>
              <div className="text-xl font-bold">
                ${caseData.currentBalance.toFixed(2)}
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-500">TRANSACTIONS</div>
              <div className="text-xl font-bold">
                {transactions.length} / {caseData.transactionCount}
              </div>
              <div className="text-xs text-gray-500">
                (Filtered / Total)
              </div>
            </div>
          </div>
          <div className="border rounded-md p-4">
            <h3 className="font-semibold mb-2">Alerts Triggered</h3>
            {caseData.alertsTriggered.map((alert: any, index: number) => <div key={index} className="mb-3">
                <div className="flex items-center">
                  <div className={`h-4 w-4 rounded-sm mr-2 ${alert.level === 'high' ? 'bg-red-600' : alert.level === 'medium' ? 'bg-orange-500' : 'bg-yellow-400'}`}></div>
                  <div className="font-medium">{alert.title}</div>
                </div>
                <div className="text-xs text-gray-500 ml-6">
                  {alert.date} • ${alert.amount.toLocaleString()}
                </div>
              </div>)}
          </div>
        </div>
      </div>
      {/* Transactions section */}
      <div className="bg-white p-4 rounded-md shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Transactions</h2>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Date Range</span>
            <div className="relative">
              <select className="border rounded px-3 py-1 pr-8 appearance-none" value={dateRange} onChange={e => setDateRange(e.target.value)}>
                <option value="7">Last 7 days</option>
                <option value="14">Last 14 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
              </select>
              <CalendarIcon size={16} className="absolute right-2 top-2 pointer-events-none" />
            </div>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Balance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction: Transaction, index: number) => <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatDate(transaction.date)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.description}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${transaction.balance.toFixed(2)}
                </td>
              </tr>)}
          </tbody>
        </table>
        <div className="mt-4 text-center text-sm text-gray-500">
          Showing {transactions.length} transactions from the last {dateRange} days
          {transactions.length !== caseData.transactionCount && ` (${caseData.transactionCount} total)`}
        </div>
      </div>
    </div>;
};
export default CaseDetail;