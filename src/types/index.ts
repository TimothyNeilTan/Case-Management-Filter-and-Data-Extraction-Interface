export interface AlertTriggered {
  level: string;
  title: string;
  date: string;
  amount: number;
}

export interface Transaction {
  date: string;
  description: string;
  amount: number;
  balance: number;
}

export interface CaseItem {
  id: number;
  entity: string;
  openedClosed: string;
  status: string;
  ageInDays: number;
  alerts: string[];
  caseId: string;
  lastUpdated: string;
  openedDate: string;
  accountId: string;
  currentBalance: number;
  transactionCount: number;
  alertsTriggered: AlertTriggered[];
  transactions: Transaction[];
} 