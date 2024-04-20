import { useState } from 'react'
import Title from './components/title.jsx'
import data from'./data/data.js'
import MediaCard from'./components/employeecard.jsx'
import './App.css'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'

function App() { 
  const [onLeave, setLeave] = useState(true)
  console.log(onLeave)
  return (
    <Container fixed>
  
      <Button variant="contained">Active</Button>
      <Button variant="outlined">On Leave</Button>
    <MediaCard data= {data}/>
  </Container>
    
  )
}

export default App
