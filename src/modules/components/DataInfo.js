import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import TextField from '@mui/material/TextField';

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
            <Button variant="outlined"><ThumbUpIcon/> Like</Button>
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

         
    </div>
  );
}
