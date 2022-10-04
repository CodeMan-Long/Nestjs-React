import React, { useState } from 'react';
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

export default function SaveForm() {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [views, setViews] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [cost, setCost] = useState(0);

  const handleViewsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setViews(parseInt(e.target.value));
  }

  const handleClicksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClicks(parseInt(e.target.value));
  }

  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCost(parseInt(e.target.value));
  }

  const handleSubmit = async () => {
    if (date === null) return;

    setLoading(true);

    const strDate = date.format('YYYY-MM-DD').toString();
    const payload = {
      date: strDate,
      views, clicks, cost,
    };

    await axios.post(`${process.env.REACT_APP_API_URL}/api/statistics`, payload);

    setLoading(false);
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
              label="Event Date"
              inputFormat="YYYY-MM-DD"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>

        <TextField
          label="Views"
          type="number"
          value={views}
          onChange={handleViewsChange}
          sx={{ m: 0.5 }}
        />

        <TextField
          label="Clicks"
          type="number"
          value={clicks}
          onChange={handleClicksChange}
          sx={{ m: 0.5 }}
        />

        <TextField
          label="Cost"
          type="number"
          value={cost}
          onChange={handleCostChange}
          sx={{ m: 0.5 }}
        />

        <LoadingButton
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          sx={{ m: 0.5 }}
          onClick={handleSubmit}
        >
          Submit
        </LoadingButton>
      </Box>
    </div>
  );
}
