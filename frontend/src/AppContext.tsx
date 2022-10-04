import { createContext } from 'react';

export const defaultStatistics = {
  statistics: [],
  setStatistics: (statistics: []) => {},
};
export const StatisticsContext = createContext(defaultStatistics);
