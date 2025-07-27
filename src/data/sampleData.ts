export const sampleCases = [{
  id: 1,
  entity: 'John Smith',
  openedClosed: 'Opened',
  status: 'Needs Review',
  ageInDays: 5,
  alerts: ['red', 'orange'],
  caseId: 'P-JS001',
  lastUpdated: 'Jul 21, 2025',
  openedDate: 'Jul 21, 2025, 8:24 am',
  accountId: 'ACC001',
  currentBalance: 15420.75,
  transactionCount: 10,
  alertsTriggered: [{
    level: 'high',
    title: 'Large Cash Deposits',
    date: 'Jul 21, 2025 2:30 pm',
    amount: 8500
  }, {
    level: 'medium',
    title: 'Frequent International Transfers',
    date: 'Jul 20, 2025 10:15 am',
    amount: 3200
  }, {
    level: 'high',
    title: 'Unusual Transaction Pattern',
    date: 'Jul 19, 2025 4:45 pm',
    amount: 5000
  }],
  transactions: [
    { date: '2025-07-26', description: 'Cash Deposit', amount: 8500.0, balance: 15420.75 },
    { date: '2025-07-20', description: 'Wire Transfer - International', amount: -3200.0, balance: 6920.75 },
    { date: '2025-07-15', description: 'Check Deposit', amount: 5000.0, balance: 10120.75 },
    { date: '2025-07-10', description: 'Direct Deposit - Salary', amount: 4500.0, balance: 5120.75 },
    { date: '2025-07-05', description: 'ATM Withdrawal', amount: -500.0, balance: 620.75 },
    { date: '2025-06-28', description: 'Grocery Store', amount: -120.0, balance: 1120.75 },
    { date: '2025-06-15', description: 'Online Transfer', amount: -2000.0, balance: 1240.75 },
    { date: '2025-06-01', description: 'Rent Payment', amount: -1200.0, balance: 3240.75 },
    { date: '2025-05-20', description: 'Direct Deposit', amount: 3200.0, balance: 4440.75 },
    { date: '2025-04-28', description: 'Cash Deposit', amount: 2000.0, balance: 1240.75 }
  ]
}, {
  id: 2,
  entity: 'Alex Martinez',
  openedClosed: 'Opened',
  status: 'Needs Review',
  ageInDays: 1,
  alerts: ['red', 'orange'],
  caseId: 'P-AM001',
  lastUpdated: 'Jul 25, 2025',
  openedDate: 'Jul 25, 2025, 9:15 am',
  accountId: 'ACC007',
  currentBalance: 22500.40,
  transactionCount: 10,
  alertsTriggered: [{
    level: 'high',
    title: 'Suspicious Large Transfer',
    date: 'Jul 25, 2025 11:30 am',
    amount: 18000
  }, {
    level: 'medium',
    title: 'New High-Risk Payee',
    date: 'Jul 25, 2025 10:45 am',
    amount: 0
  }, {
    level: 'high',
    title: 'Rapid Sequential Transactions',
    date: 'Jul 25, 2025 2:20 pm',
    amount: 5500
  }],
  transactions: [
    { date: '2025-07-25', description: 'Large Wire Transfer In', amount: 18000.0, balance: 22500.40 },
    { date: '2025-07-22', description: 'Cash Deposit', amount: 5500.0, balance: 4500.40 },
    { date: '2025-07-18', description: 'International Wire Out', amount: -8000.0, balance: -1000.60 },
    { date: '2025-07-12', description: 'Check Deposit', amount: 7000.0, balance: 7000.60 },
    { date: '2025-07-08', description: 'ATM Withdrawal', amount: -500.0, balance: 0.60 },
    { date: '2025-06-25', description: 'Direct Deposit', amount: 3200.0, balance: 500.60 },
    { date: '2025-06-10', description: 'Online Transfer', amount: -2700.0, balance: -2699.40 },
    { date: '2025-05-28', description: 'Grocery Store', amount: -95.0, balance: -2604.40 },
    { date: '2025-05-15', description: 'Gas Station', amount: -60.0, balance: -2509.40 },
    { date: '2025-04-30', description: 'Restaurant', amount: -80.0, balance: -2449.40 }
  ]
}, {
  id: 3,
  entity: 'Rachel Kim',
  openedClosed: 'Opened',
  status: 'Needs Review',
  ageInDays: 1,
  alerts: ['red', 'yellow'],
  caseId: 'P-RK001',
  lastUpdated: 'Jul 25, 2025',
  openedDate: 'Jul 25, 2025, 2:30 pm',
  accountId: 'ACC008',
  currentBalance: 9875.25,
  transactionCount: 10,
  alertsTriggered: [{
    level: 'high',
    title: 'Structuring Activity Detected',
    date: 'Jul 25, 2025 3:45 pm',
    amount: 9900
  }, {
    level: 'low',
    title: 'Multiple ATM Transactions',
    date: 'Jul 25, 2025 4:15 pm',
    amount: 1500
  }, {
    level: 'high',
    title: 'Cross-Border Wire Transfer',
    date: 'Jul 25, 2025 5:00 pm',
    amount: 7200
  }],
  transactions: [
    { date: '2025-07-25', description: 'Cash Deposit', amount: 9900.0, balance: 9875.25 },
    { date: '2025-07-24', description: 'International Wire', amount: -7200.0, balance: -24.75 },
    { date: '2025-07-20', description: 'ATM Deposit', amount: 1500.0, balance: 7175.25 },
    { date: '2025-07-15', description: 'Check Deposit', amount: 4200.0, balance: 5675.25 },
    { date: '2025-07-08', description: 'Online Transfer', amount: -1525.0, balance: 1475.25 },
    { date: '2025-06-30', description: 'Direct Deposit', amount: 2800.0, balance: 3000.25 },
    { date: '2025-06-18', description: 'Grocery Store', amount: -110.0, balance: 200.25 },
    { date: '2025-06-05', description: 'Gas Station', amount: -55.0, balance: 310.25 },
    { date: '2025-05-22', description: 'ATM Withdrawal', amount: -150.0, balance: 365.25 },
    { date: '2025-05-10', description: 'Restaurant', amount: -90.0, balance: 515.25 }
  ]
}, {
  id: 4,
  entity: 'Sarah Johnson',
  openedClosed: 'Opened',
  status: 'Needs Review',
  ageInDays: 8,
  alerts: ['red', 'yellow'],
  caseId: 'P-SJ002',
  lastUpdated: 'Jul 18, 2025',
  openedDate: 'Jul 18, 2025, 11:15 am',
  accountId: 'ACC002',
  currentBalance: 8750.25,
  transactionCount: 10,
  alertsTriggered: [{
    level: 'high',
    title: 'Multiple High-Value Transactions',
    date: 'Jul 18, 2025 3:20 pm',
    amount: 12000
  }, {
    level: 'low',
    title: 'New Payee Added',
    date: 'Jul 17, 2025 9:45 am',
    amount: 0
  }, {
    level: 'medium',
    title: 'Cross-Border Payment',
    date: 'Jul 16, 2025 1:30 pm',
    amount: 4500
  }],
  transactions: [
    { date: '2025-07-26', description: 'Wire Transfer Out', amount: -12000.0, balance: 8750.25 },
    { date: '2025-07-22', description: 'Check Deposit', amount: 15000.0, balance: 20750.25 },
    { date: '2025-07-18', description: 'International Wire', amount: -4500.0, balance: 5750.25 },
    { date: '2025-07-12', description: 'ATM Deposit', amount: 2000.0, balance: 10250.25 },
    { date: '2025-07-05', description: 'Online Transfer', amount: -1500.0, balance: 8250.25 },
    { date: '2025-06-28', description: 'Direct Deposit', amount: 3200.0, balance: 9750.25 },
    { date: '2025-06-15', description: 'Credit Card Payment', amount: -800.0, balance: 6550.25 },
    { date: '2025-06-01', description: 'Mobile Deposit', amount: 1200.0, balance: 7350.25 },
    { date: '2025-05-18', description: 'Utility Bill', amount: -150.0, balance: 6150.25 },
    { date: '2025-05-05', description: 'Salary Deposit', amount: 4800.0, balance: 6300.25 }
  ]
}, {
  id: 5,
  entity: 'Michael Chen',
  openedClosed: 'Opened',
  status: 'Needs Review',
  ageInDays: 12,
  alerts: ['red', 'orange', 'yellow'],
  caseId: 'P-MC003',
  lastUpdated: 'Jul 14, 2025',
  openedDate: 'Jul 14, 2025, 2:45 pm',
  accountId: 'ACC003',
  currentBalance: 25680.90,
  transactionCount: 10,
  alertsTriggered: [{
    level: 'high',
    title: 'Structuring Pattern Detected',
    date: 'Jul 14, 2025 4:15 pm',
    amount: 9800
  }, {
    level: 'medium',
    title: 'Rapid Account Activity',
    date: 'Jul 13, 2025 11:30 am',
    amount: 0
  }, {
    level: 'low',
    title: 'New Device Login',
    date: 'Jul 12, 2025 8:20 am',
    amount: 0
  }, {
    level: 'high',
    title: 'High-Risk Jurisdiction Transfer',
    date: 'Jul 11, 2025 6:45 pm',
    amount: 7500
  }],
  transactions: [
    { date: '2025-07-26', description: 'Cash Deposit', amount: 9800.0, balance: 25680.90 },
    { date: '2025-07-20', description: 'Wire Transfer Out', amount: -15000.0, balance: 15880.90 },
    { date: '2025-07-15', description: 'Check Deposit', amount: 18000.0, balance: 30880.90 },
    { date: '2025-07-08', description: 'International Transfer', amount: -7500.0, balance: 12880.90 },
    { date: '2025-07-01', description: 'Cash Deposit', amount: 9500.0, balance: 20380.90 },
    { date: '2025-06-22', description: 'ATM Withdrawal', amount: -300.0, balance: 10880.90 },
    { date: '2025-06-10', description: 'Online Transfer', amount: -2000.0, balance: 11180.90 },
    { date: '2025-05-28', description: 'Direct Deposit', amount: 5200.0, balance: 13180.90 },
    { date: '2025-05-15', description: 'Business Payment', amount: 8500.0, balance: 7980.90 },
    { date: '2025-05-02', description: 'Cash Deposit', amount: 4800.0, balance: -520.10 }
  ]
}, {
  id: 6,
  entity: 'Lisa Rodriguez',
  openedClosed: 'Opened',
  status: 'Needs Review',
  ageInDays: 15,
  alerts: ['orange', 'yellow'],
  caseId: 'P-LR004',
  lastUpdated: 'Jul 11, 2025',
  openedDate: 'Jul 11, 2025, 9:30 am',
  accountId: 'ACC004',
  currentBalance: 12340.50,
  transactionCount: 10,
  alertsTriggered: [{
    level: 'medium',
    title: 'Unusual Payment Timing',
    date: 'Jul 11, 2025 1:45 pm',
    amount: 6500
  }, {
    level: 'low',
    title: 'Multiple Small Deposits',
    date: 'Jul 10, 2025 10:15 am',
    amount: 2800
  }, {
    level: 'medium',
    title: 'Weekend Large Transaction',
    date: 'Jul 09, 2025 7:20 pm',
    amount: 8900
  }],
  transactions: [
    { date: '2025-07-26', description: 'Weekend Wire Transfer', amount: 8900.0, balance: 12340.50 },
    { date: '2025-07-20', description: 'Multiple Small Deposits', amount: 2800.0, balance: 3440.50 },
    { date: '2025-07-15', description: 'Online Payment', amount: -6500.0, balance: 640.50 },
    { date: '2025-07-08', description: 'ATM Deposit', amount: 1500.0, balance: 7140.50 },
    { date: '2025-07-01', description: 'Check Deposit', amount: 3200.0, balance: 5640.50 },
    { date: '2025-06-25', description: 'Direct Transfer', amount: -2000.0, balance: 2440.50 },
    { date: '2025-06-12', description: 'Cash Withdrawal', amount: -800.0, balance: 4440.50 },
    { date: '2025-05-30', description: 'Salary Deposit', amount: 4500.0, balance: 5240.50 },
    { date: '2025-05-18', description: 'Utility Payment', amount: -180.0, balance: 740.50 },
    { date: '2025-05-05', description: 'Grocery Store', amount: -95.0, balance: 920.50 }
  ]
}, {
  id: 7,
  entity: 'David Wilson',
  openedClosed: 'Opened',
  status: 'Watchlist',
  ageInDays: 3,
  alerts: ['green'],
  caseId: 'P-DW007',
  lastUpdated: 'Jul 23, 2025',
  openedDate: 'Jul 23, 2025, 3:20 pm',
  accountId: 'ACC007',
  currentBalance: 5280.30,
  transactionCount: 10,
  alertsTriggered: [{
    level: 'low',
    title: 'Regular Activity Pattern',
    date: 'Jul 23, 2025 4:00 pm',
    amount: 0
  }],
  transactions: [
    { date: '2025-07-23', description: 'Direct Deposit', amount: 3200.0, balance: 5280.30 },
    { date: '2025-07-22', description: 'Grocery Store', amount: -120.0, balance: 2080.30 },
    { date: '2025-07-20', description: 'Gas Station', amount: -60.0, balance: 2200.30 },
    { date: '2025-07-18', description: 'ATM Withdrawal', amount: -200.0, balance: 2260.30 },
    { date: '2025-07-15', description: 'Online Shopping', amount: -180.0, balance: 2460.30 },
    { date: '2025-07-10', description: 'Restaurant', amount: -85.0, balance: 2645.30 },
    { date: '2025-07-05', description: 'Utility Bill', amount: -140.0, balance: 2730.30 },
    { date: '2025-06-28', description: 'Check Deposit', amount: 1800.0, balance: 2870.30 },
    { date: '2025-06-15', description: 'Phone Bill', amount: -95.0, balance: 1070.30 },
    { date: '2025-05-30', description: 'Salary Deposit', amount: 2400.0, balance: 1165.30 }
  ]
}, {
  id: 8,
  entity: 'Emma Thompson',
  openedClosed: 'Opened',
  status: 'Ops',
  ageInDays: 2,
  alerts: ['yellow'],
  caseId: 'P-ET008',
  lastUpdated: 'Jul 24, 2025',
  openedDate: 'Jul 24, 2025, 10:15 am',
  accountId: 'ACC008',
  currentBalance: 8950.75,
  transactionCount: 10,
  alertsTriggered: [{
    level: 'low',
    title: 'New Account Activity',
    date: 'Jul 24, 2025 11:30 am',
    amount: 0
  }],
  transactions: [
    { date: '2025-07-24', description: 'Initial Deposit', amount: 8950.75, balance: 8950.75 },
    { date: '2025-07-23', description: 'Wire Transfer', amount: 5000.0, balance: 3950.75 },
    { date: '2025-07-20', description: 'Check Deposit', amount: 2200.0, balance: -1049.25 },
    { date: '2025-07-15', description: 'Direct Deposit', amount: 3800.0, balance: -3249.25 },
    { date: '2025-07-10', description: 'ATM Withdrawal', amount: -300.0, balance: -7049.25 },
    { date: '2025-07-05', description: 'Online Transfer', amount: -1500.0, balance: -6749.25 },
    { date: '2025-06-28', description: 'Grocery Store', amount: -125.0, balance: -5249.25 },
    { date: '2025-06-15', description: 'Gas Station', amount: -75.0, balance: -5124.25 },
    { date: '2025-06-01', description: 'Restaurant', amount: -90.0, balance: -5049.25 },
    { date: '2025-05-20', description: 'Utility Payment', amount: -160.0, balance: -4959.25 }
  ]
}];

export default sampleCases;