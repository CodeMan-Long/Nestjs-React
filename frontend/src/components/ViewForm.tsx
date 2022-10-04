import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';
import dayjs, { Dayjs } from 'dayjs';
import { StatisticsContext } from "../AppContext";
import StatisticItem from './StatisticItem';

export default function SaveForm() {
  const [ loadingView, setLoadingView ] = useState(false);
  const [ loadingReset, setLoadingReset ] = useState(false);
  const [ dateFrom, setDateFrom ] = useState<Dayjs | null>(dayjs());
  const [ dateTo, setDateTo ] = useState<Dayjs | null>(dayjs());
  const { statistics, setStatistics } = useContext(StatisticsContext);

  const handleView = async () => {
    if (dateFrom === null || dateTo === null) return;
    if (dateFrom > dateTo) return;

    setLoadingView(true);

    const strDateFrom = dateFrom.format('YYYY-MM-DD').toString();
    const strDateTo = dateTo.format('YYYY-MM-DD').toString();

    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/statistics?from=${strDateFrom}&to=${strDateTo}`);
    setStatistics(data);

    setLoadingView(false);
  }

  const handleReset = async () => {
    setLoadingReset(true);

    await axios.delete(`${process.env.REACT_APP_API_URL}/api/statistics`);

    setLoadingReset(false);
  }

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          m: 2,
          bgcolor: 'background.paper',
          borderRadius: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Button component={Link} to="/" variant="contained" sx={{ m: 0.5 }}>
          Home
        </Button>

        <Box sx={{ m: 0.5 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Event Date From"
              inputFormat="YYYY-MM-DD"
              value={dateFrom}
              onChange={(newValue) => {
                setDateFrom(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <DesktopDatePicker
              label="Event Date To"
              inputFormat="YYYY-MM-DD"
              value={dateTo}
              onChange={(newValue) => {
                setDateTo(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'flex-start',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          {
            statistics.map((ele) => <StatisticItem date={ele.date} views={ele.views} clicks={ele.clicks} cost={ele.cost}></StatisticItem>)
          }
        </Box>

        <LoadingButton
          loading={loadingView}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          sx={{ m: 0.5 }}
          onClick={handleView}
        >
          View
        </LoadingButton>

        <LoadingButton
          loading={loadingReset}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          sx={{ m: 0.5 }}
          onClick={handleReset}
        >
          Reset
        </LoadingButton>
      </Box>
    </div>
  );
}
