import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Button component={Link} to="/save" variant="contained" sx={{ m: 0.5 }}>
        Set Statistic
      </Button>

      <Button component={Link} to="/view" variant="contained" sx={{ m: 0.5 }}>
        View Statistic
      </Button>
    </div>
  );
}
