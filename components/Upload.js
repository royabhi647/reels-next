import { Button } from '@mui/material'
import React from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';

function Upload() {
  return (
    <div className='upload-btn'>
         <Button variant="outlined" fullWidth component="label" startIcon={<MovieIcon/>} style={{marginTop:'1rem'}}>
            Upload
         <input hidden accept="image/*" multiple type="file" />
        </Button>
        <LinearProgress variant="determinate" value={50} style={{marginTop:'0.2rem'}} />
    </div>
  )
}

export default Upload