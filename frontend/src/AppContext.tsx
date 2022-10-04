import { createContext } from 'react';

export interface Statistic {
  date: string;
  views: number;
  clicks: number;
  cost: number;
}

interface StatisticContext {
  statistics: Statistic[];
  setStatistics: (statistics: Statistic[]) => void;
}

export const defaultStatistics: StatisticContext = {
  statistics: [],
  setStatistics: (statistics: Statistic[]) => {},
};

export const StatisticsContext = createContext(defaultStatistics);
