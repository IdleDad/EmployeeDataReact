import { useState } from 'react'
import Title from './components/title.jsx'
import data from'./data/data.js'
import MediaCard from'./components/employeecard.jsx'
import './App.css'
import Container from '@mui/material/Container';

function App() { 
  return (
    <Container fixed>
    <MediaCard />
    <MediaCard />
    <MediaCard />
    <MediaCard />
  </Container>
    
  )
}

export default App
