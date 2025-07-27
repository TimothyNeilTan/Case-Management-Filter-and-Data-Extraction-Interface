export const sampleCases = [{
  id: 1,
  entity: 'First Last Name',
  openedClosed: 'Opened',
  status: 'Needs Review',
  ageInDays: 31,
  alerts: ['red', 'orange', 'yellow', 'green'],
  caseId: 'P-1e8e0S...',
  lastUpdated: 'Jul 16, 2023',
  openedDate: 'Jan 11, 2023, 8:24 am',
  accountId: 'J321',
  currentBalance: 219.84,
  transactionCount: 43,
  alertsTriggered: [{
    level: 'high',
    title: 'Spike in Payments',
    date: 'Jan 15, 2023 4:30 pm',
    amount: 2500
  }, {
    level: 'medium',
    title: 'Posted Multiple Recent Large Payments',
    date: 'Jan 10, 2023 4:30 pm',
    amount: 2500
  }, {
    level: 'medium',
    title: 'Posted High Risk Jurisdiction - International PEP',
    date: 'Jan 05, 2023 4:30 pm',
    amount: 2500
  }],
  transactions: [{
    date: '2023-06-15',
    description: 'Direct Deposit - ACME Inc',
    amount: 2450.0,
    balance: 2669.84
  }, {
    date: '2023-06-20',
    description: 'ATM Withdrawal',
    amount: -200.0,
    balance: 2469.84
  }, {
    date: '2023-06-25',
    description: 'Online Transfer',
    amount: -1500.0,
    balance: 969.84
  }, {
    date: '2023-06-28',
    description: 'Grocery Store',
    amount: -150.0,
    balance: 819.84
  }, {
    date: '2023-07-01',
    description: 'Phone Bill',
    amount: -100.0,
    balance: 719.84
  }, {
    date: '2023-07-05',
    description: 'Utility Bill',
    amount: -200.0,
    balance: 519.84
  }, {
    date: '2023-07-10',
    description: 'Restaurant',
    amount: -80.0,
    balance: 439.84
  }, {
    date: '2023-07-12',
    description: 'Gas Station',
    amount: -45.0,
    balance: 394.84
  }, {
    date: '2023-07-14',
    description: 'Online Shopping',
    amount: -175.0,
    balance: 219.84
  }]
}, {
  id: 2,
  entity: 'First Last Name',
  openedClosed: 'Opened',
  status: 'Watchlist',
  ageInDays: 25,
  alerts: ['red', 'orange'],
  caseId: 'P-1e8e0S...',
  lastUpdated: 'Apr 17, 2023',
  openedDate: 'Jan 15, 2023, 9:30 am',
  accountId: 'J456',
  currentBalance: 1542.67,
  transactionCount: 28,
  alertsTriggered: [{
    level: 'high',
    title: 'Suspicious Activity',
    date: 'Apr 15, 2023 2:15 pm',
    amount: 1800
  }, {
    level: 'medium',
    title: 'Large Cash Deposit',
    date: 'Apr 10, 2023 11:45 am',
    amount: 3000
  }],
  transactions: [{
    date: '2023-03-20',
    description: 'Salary Deposit',
    amount: 3200.0,
    balance: 3200.0
  }, {
    date: '2023-03-25',
    description: 'Rent Payment',
    amount: -1200.0,
    balance: 2000.0
  }, {
    date: '2023-04-01',
    description: 'Grocery Store',
    amount: -180.0,
    balance: 1820.0
  }, {
    date: '2023-04-05',
    description: 'Online Purchase',
    amount: -120.0,
    balance: 1700.0
  }, {
    date: '2023-04-10',
    description: 'Cash Deposit',
    amount: 3000.0,
    balance: 4700.0
  }, {
    date: '2023-04-12',
    description: 'Wire Transfer',
    amount: -3000.0,
    balance: 1700.0
  }, {
    date: '2023-04-15',
    description: 'ATM Withdrawal',
    amount: -200.0,
    balance: 1500.0
  }, {
    date: '2023-04-17',
    description: 'Restaurant',
    amount: -57.33,
    balance: 1542.67
  }]
}, {
  id: 3,
  entity: 'First Last Name',
  openedClosed: 'Opened',
  status: 'Watchlist',
  ageInDays: 20,
  alerts: ['yellow', 'green'],
  caseId: 'P-1e8e0S...',
  lastUpdated: 'Mar 24, 2023',
  openedDate: 'Mar 04, 2023, 10:15 am',
  accountId: 'J789',
  currentBalance: 876.32,
  transactionCount: 15,
  alertsTriggered: [{
    level: 'low',
    title: 'Multiple Small Transactions',
    date: 'Mar 20, 2023 3:45 pm',
    amount: 950
  }],
  transactions: [{
    date: '2023-03-04',
    description: 'Initial Deposit',
    amount: 1500.0,
    balance: 1500.0
  }, {
    date: '2023-03-07',
    description: 'Grocery Store',
    amount: -85.43,
    balance: 1414.57
  }, {
    date: '2023-03-10',
    description: 'Gas Station',
    amount: -45.0,
    balance: 1369.57
  }, {
    date: '2023-03-15',
    description: 'Online Purchase',
    amount: -120.0,
    balance: 1249.57
  }, {
    date: '2023-03-18',
    description: 'Restaurant',
    amount: -65.25,
    balance: 1184.32
  }, {
    date: '2023-03-20',
    description: 'ATM Withdrawal',
    amount: -200.0,
    balance: 984.32
  }, {
    date: '2023-03-22',
    description: 'Mobile Payment',
    amount: -108.0,
    balance: 876.32
  }]
}, {
  id: 4,
  entity: 'First Last Name',
  openedClosed: 'Opened',
  status: 'Ops',
  ageInDays: 13,
  alerts: ['yellow'],
  caseId: 'P-1e8e0S...',
  lastUpdated: 'Feb 16, 2023',
  openedDate: 'Feb 03, 2023, 11:00 am',
  accountId: 'J101',
  currentBalance: 3245.18,
  transactionCount: 22,
  alertsTriggered: [{
    level: 'low',
    title: 'International Transaction',
    date: 'Feb 14, 2023 5:30 pm',
    amount: 450
  }],
  transactions: [{
    date: '2023-02-01',
    description: 'Salary Deposit',
    amount: 4200.0,
    balance: 4200.0
  }, {
    date: '2023-02-05',
    description: 'Rent Payment',
    amount: -1350.0,
    balance: 2850.0
  }, {
    date: '2023-02-08',
    description: 'Utility Bill',
    amount: -145.32,
    balance: 2704.68
  }, {
    date: '2023-02-10',
    description: 'Grocery Store',
    amount: -210.5,
    balance: 2494.18
  }, {
    date: '2023-02-12',
    description: 'Restaurant',
    amount: -85.0,
    balance: 2409.18
  }, {
    date: '2023-02-14',
    description: 'International Purchase',
    amount: -450.0,
    balance: 1959.18
  }, {
    date: '2023-02-15',
    description: 'Transfer From Savings',
    amount: 1500.0,
    balance: 3459.18
  }, {
    date: '2023-02-16',
    description: 'Online Subscription',
    amount: -14.0,
    balance: 3445.18
  }, {
    date: '2023-02-16',
    description: 'Mobile Payment',
    amount: -200.0,
    balance: 3245.18
  }]
}, {
  id: 5,
  entity: 'First Last Name',
  openedClosed: 'Opened',
  status: 'Needs Review',
  ageInDays: 10,
  alerts: ['red', 'orange'],
  caseId: 'P-1e8e0S...',
  lastUpdated: 'Jul 15, 2023',
  openedDate: 'Jul 05, 2023, 1:30 pm',
  accountId: 'J202',
  currentBalance: 752.91,
  transactionCount: 18,
  alertsTriggered: [{
    level: 'high',
    title: 'Multiple Large Withdrawals',
    date: 'Jul 12, 2023 10:15 am',
    amount: 1800
  }, {
    level: 'medium',
    title: 'Unusual Activity Pattern',
    date: 'Jul 10, 2023 3:45 pm',
    amount: 1200
  }],
  transactions: [{
    date: '2023-06-20',
    description: 'Direct Deposit',
    amount: 3500.0,
    balance: 3500.0
  }, {
    date: '2023-06-25',
    description: 'Mortgage Payment',
    amount: -1450.0,
    balance: 2050.0
  }, {
    date: '2023-06-28',
    description: 'Grocery Store',
    amount: -175.25,
    balance: 1874.75
  }, {
    date: '2023-07-01',
    description: 'Car Insurance',
    amount: -120.0,
    balance: 1754.75
  }, {
    date: '2023-07-05',
    description: 'Gas Station',
    amount: -55.84,
    balance: 1698.91
  }, {
    date: '2023-07-08',
    description: 'Restaurant',
    amount: -96.0,
    balance: 1602.91
  }, {
    date: '2023-07-10',
    description: 'ATM Withdrawal',
    amount: -500.0,
    balance: 1102.91
  }, {
    date: '2023-07-12',
    description: 'ATM Withdrawal',
    amount: -350.0,
    balance: 752.91
  }]
}];