import React from "react";
import AppBarDashboard from "./modules/views/AppBarDashboard";
import DataInfo from "./modules/components/DataInfo";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Data = ({ match }) => {
  console.log(match.params.id);
  return (
    <>
      <AppBarDashboard/>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="bg">
          <Box sx={{ bgcolor: "#cfe8fc" }}>
            <Typography variant="h1" component="h2">
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
  );
};
export default Data;
