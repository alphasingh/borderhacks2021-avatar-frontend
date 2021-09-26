import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import DownloadIcon from '@mui/icons-material/Download';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DataInfo() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Item>
            <Button variant="outlined"><ThumbUpIcon/>Like</Button>
            </Item>
            <Item>
            <Button variant="outlined"><DownloadIcon/>Download</Button>
            </Item>
      </Stack>
      <TextField
          margin="normal"
          id="outlined-multiline-static"
          label="Comment box"
          multiline
          rows={4}
          defaultValue="Add comment here..."
          fullWidth
        />
        <Stack direction="row" spacing={2}>
         <Item><Button variant="outlined"><CommentIcon/>Click to Add Comment</Button></Item>
         </Stack>

         <div style={{ padding: 14 }}>
      <h1>Comments</h1>
      <Paper style={{ padding: "10px 5px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
            <p style={{ textAlign: "left" }}>
                This is the test comment{" "}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p>
          </Grid>
        </Grid>
        {/* <Divider variant="fullWidth" style={{ margin: "10px 0" }} /> */}
         </Paper>
    </div> 
    </div>
  );
}
