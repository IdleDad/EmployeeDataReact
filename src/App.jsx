import { useState } from 'react'
import Title from './components/title.jsx'
import data from'./data/data.js'
import MediaCard from'./components/employeecard.jsx'
import './App.css'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';



const label = { inputProps: { 'aria-label': 'Switch demo' } }

function App() { 
  const [onLeave, setLeave] = useState(false)
  const filteredData = onLeave ? data.filter((data)=> data.onLeave) : data;

  const handleToggle = (event) => {
  setLeave(event.target.checked)
  console.log(event.target.checked)
  }
  console.log(onLeave)
  return (
    <Container fixed>
<Typography variant="h3" component="h3">
  Employee Dashboard
</Typography>

      <FormControlLabel control={<Switch {...label} onClick={handleToggle} />} label="On Leave" />
  <Stack spacing={2} direction="row">

      <Button variant="contained">Active</Button>
      <Button variant="outlined">On Leave</Button>
      </Stack>
    <MediaCard data= {filteredData}/>
  </Container>
    
  )
}

export default App
