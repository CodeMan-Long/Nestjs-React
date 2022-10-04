import React, { useState, ReactNode } from "react";

import { StatisticsContext } from "./AppContext";
import { Statistic } from './AppContext';

interface Props {
  children?: ReactNode;
}
const { Provider } = StatisticsContext;

export const StatisticsProvider = ({ children }: Props) => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);

  return (
    <Provider value={{ statistics, setStatistics }}>
      {children}
    </Provider>
  )
}
