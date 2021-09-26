import * as React from 'react';
import {useState, useEffect} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBarDashboard from './modules/views/AppBarDashboard';
import {Link} from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
//import {app} from './index';
import { getAuth } from 'firebase/auth';


const style = { 
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
 
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

//const auth = getAuth();
export default function Dashboard(props) {

   return (
      <>

    <AppBarDashboard /> 
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {props.dataset.map((item, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <Item>
            <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {truncate(item.description, 50)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          By- {item.author}
        </Typography>
        <Typography variant="body2">
          {item.updated.slice(0,10)}
          <br />
          {item.tags.map((entry)=>{
            return entry+" ";
          })}
        </Typography>
      </CardContent>
      <CardActions style= { {position:"relative"}}>
        <Link to={`/dataset/${item.documentId}`} style={ {textDecoration: 'none'} }>
          <Button variant="outlined">Explore More</Button>
        </Link>
        <Typography style={ {position: "absolute", right: "10px" } }>
          <FavoriteIcon/> {item.likes}
        </Typography>
      </CardActions>
    </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box> 
  </>
  );
}