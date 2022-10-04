import React from 'react';
import Box from '@mui/material/Box';

import { Statistic } from '../AppContext';

export default function StatisticItem(props: Statistic) {
  const { date, views, clicks, cost } = props;
  const cpc = cost / clicks;
  const cpm = cost / views * 1000;

  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
    >
      <Box>Date: { date.split('T')[0] }</Box>
      <Box>Views: { views }</Box>
      <Box>Clicks: { clicks }</Box>
      <Box>Cost: { cost }</Box>
      <Box>Cpc: { cpc ? cpc : 0 }</Box>
      <Box>Cpm: { cpm ? cpm : 0 }</Box>
    </Box>
  );
}
