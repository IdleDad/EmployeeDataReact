import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import SpaIcon from '@mui/icons-material/Spa';


export default function MediaCard() {
  return (

        <Card sx={{ maxWidth: 345,  margin:5, padding:2 }}>

      <Box sx={{ paddingTop:2 }}>
      <CardMedia
        sx={{ height: 300,width:300, backgroundSize:"contain", margin:"auto"   }}
        image="profile2.png"
        title="profile image"
      />
      </Box>

      <CardContent>
        <SpaIcon />
        <Typography gutterBottom variant="h5" component="div">
          Rupa Samyukta
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Department: UX/UI Design
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Position: UX Researcher
        </Typography>
        <Stack direction="row" spacing={1} sx={{marginTop:2, justifyContent:"center"}}>
      <Chip label="Research" />
      <Chip label="Figma" />
      <Chip label="Sketch" />
    </Stack>
    <Stack direction="row" spacing={2} sx={{marginTop:1, justifyContent:"center"}}>
      <Chip label="Active" variant="outlined"/>
      <Chip label="Hours:20" variant="outlined" />
    </Stack>
      </CardContent>
    </Card>
  );
}
