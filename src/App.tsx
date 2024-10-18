import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AppBar from './components/MyAppBar';
import { Box } from '@mui/material';
import MyAppBar from './components/MyAppBar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Box sx={{ width: '100%'}}>
    <MyAppBar></MyAppBar>
    </Box>
    </>
  )
}

export default App
