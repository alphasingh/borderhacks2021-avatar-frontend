import * as React from 'react';
import {useState} from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth';


//export const app = initializeApp(firebaseConfig);

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DataInfo({dataset}) {

  const[likes,setLikes]=useState(dataset.likes);
  const[isLiked, setIsLiked] = useState(false);

  const[comment,setComment] = useState('');



  console.log("dataset", dataset);
  const auth = getAuth();
  
  //console.log("token",token);
  const url_like="https://avatar21backend.herokuapp.com/datasets/"+dataset.documentId+"/likes";


  const handleLike=async ()=>{
   
    const token =  await auth.currentUser.getIdToken(true).then(function (idtoken) {
      return idtoken;
    });
  
    setIsLiked(true);
    if(!isLiked){
      setLikes((likes+1));
      // await axios.post(url,{headers: {
      //   'Authorization': 'bearer '+ token
      // }});
      //setIsLiked(false);
      const post = await axios.put(url_like,{} ,{
        headers: {
          'Authorization': 'bearer ' + token
        }
      });
      }
  }

  const url_comment="https://avatar21backend.herokuapp.com/datasets/"+dataset.documentId+"/comments";
  const handleComment=async ()=>{
   
    const token =  await auth.currentUser.getIdToken(true).then(function (idtoken) {
      return idtoken;
    });
  
    
      const post = await axios.post(url_comment,{description:JSON.stringify(comment)} ,{
        headers: {
          'content-type': 'application/json',
          'Authorization': 'bearer ' + token
        }
      });
      
  }
  return (
    <div>
      {/* <Stack direction="column" spacing={2}> */}
        <Item style={{display:'inline', paddingLeft:"2px",paddingRight:"2px"}}>
            <Button variant="outlined" onClick={handleLike}><ThumbUpIcon/>Like {likes}</Button>
            </Item>
            <br/>
            
            
            <Item>
              {dataset.download_links.map((entry)=>{
                  const links= entry.split('/')
                  return <a href={entry}><DownloadIcon/>{links[links.length-1]}<br/></a>
              })}
            
            </Item>
      {/* </Stack> */}
      <TextField
          margin="normal"
          value={comment}
          onChange= {(e)=>setComment(e.target.value)}
          id="outlined-multiline-static"
          label="Comment box"
          multiline
          rows={4}
          defaultValue="Add comment here..."
          fullWidth
        />
        <Stack direction="row" spacing={2}>
         <Item><Button variant="outlined" onClick={handleComment}><CommentIcon/>Click to Add Comment</Button></Item>
         </Stack>

         <div style={{ padding: 14 }}>
      <h1>Comments</h1>
      {dataset.comments.map((item)=>{
          console.log("item",item);
          return (<Paper style={{ padding: "10px 5px" }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>{item.userName}</h4>
              <p style={{ textAlign: "left" }}>
                  {item.description}
              </p>
              <p style={{ textAlign: "left", color: "gray" }}>
                posted on {item.created.slice(0,10)}
              </p>
            </Grid>
          </Grid>
          {/* <Divider variant="fullWidth" style={{ margin: "10px 0" }} /> */}
           </Paper>)
      })}
      
    </div> 
    </div>
    
  );
}
