import React from "react";
import AppBarDashboard from "./modules/views/AppBarDashboard";
import DataInfo from "./modules/components/DataInfo";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Data = ({ match, dataset }) => {
  console.log(match.params.documentId);
  let final_result= dataset.map((item)=>{
    if(item.documentId==match.params.documentId){
      return item;
    }
  })
//   final_result = final_result.filter(function( element ) {
//     return element !== undefined;
//  });
  console.log("final result", final_result);
  return (
    <>
      <AppBarDashboard />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="bg">
          <Box sx={{ bgcolor: "#cfe8fc", padding:"15px", marginTop:"14px"}}>
            <Typography variant="h3" component="h2">
              {final_result[0].name}
            </Typography>
            <Typography variant="h6" component="h2">
              {final_result[0].description}
            </Typography>
            <Typography variant="h6" component="h2">
              <br/><strong><u>Attributes: </u></strong><br/><br/>{final_result[0].attributes.map((entry)=>{
                  return <Typography variant="p"><b>{entry.split(':')[0]+" : "}</b>{entry.split(':')[1]}<br/></Typography>
              })}
            </Typography>
            <Typography variant="h6" component="h2">
              <br/>Author: <b>{final_result[0].author}</b>
            </Typography>
            <br/>
            <DataInfo dataset={final_result[0]}></DataInfo>
            
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
};
export default Data;
