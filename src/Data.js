import React from 'react';
import AppAppBar from './modules/views/AppAppBar';
import DataInfo from './modules/components/DataInfo'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Data = ({match}) => {
   console.log(match.params.id);
    return (
        <>
     <AppAppBar></AppAppBar>
     <React.Fragment>
      <CssBaseline />
      <Container maxWidth="bg" >
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
        <Typography variant="h1" component="h2" >
  h1. Heading
</Typography>
<Typography variant="h5" component="h2">
  Dscription
</Typography>
<Typography variant="h5" component="h2">
  h1. Heading
</Typography>
<Typography variant="h5" component="h2">
  h1. Heading
</Typography>
        <DataInfo></DataInfo>
        </Box>
      </Container>
    </React.Fragment>
     
        </>


    )
}  
export default Data;