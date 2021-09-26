import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Link as Direct, useHistory } from "react-router-dom";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import Button from '@mui/material/Button';
import { getAuth, signOut } from "firebase/auth";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppBarDashboard() {
  const history = useHistory();
  const signOutFun = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        alert("There is some error while logout");
      });
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Direct to="/" style={{ textDecoration: "none", color: "white" }}>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              sx={{ fontSize: 24 }}
            >
              {"Get Quality Data"}
            </Link>
          </Direct>

          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              to="/"
              sx={rightLink}
              onClick={signOutFun}
            > 
             <Button variant="primary">Sign Out</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppBarDashboard;
