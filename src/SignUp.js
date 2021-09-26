import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { Field, Form, FormSpy } from "react-final-form";
import Typography from "./modules/components/Typography";
import AppFooter from "./modules/views/AppFooter";
import AppAppBar from "./modules/views/AppAppBar";
import AppForm from "./modules/views/AppForm";
import { email, required } from "./modules/form/validation";
import RFTextField from "./modules/form/RFTextField";
import FormButton from "./modules/form/FormButton";
import FormFeedback from "./modules/form/FormFeedback";
import withRoot from "./modules/withRoot";
import validator from 'validator'
import { Link as Direct, useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [sent, setSent] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();

  const validateEmailPassword = (email, password) => {
    if (validator.isEmail(email) && password.length>=6) {
      return true;
    } else {
      return false;
    }
  }

  const handleSubmit = async () => {
     
     if(validateEmailPassword(email, password)){
      await createUser();
     }
     else{
       alert("Email or password is not valid");
     }
     

  };

  const createUser = async () => {
    const auth = getAuth();
    try{
     setSent(true); 
     await createUserWithEmailAndPassword(auth, email, password);
     history.push('/sign-in');
    }
    catch(e){
        alert("There is some error!");
        setSent(false);
    }
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Direct
              to="/sign-in"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Link
                underline="always"
              >
                Already have an account?
              </Link>
            </Direct>
          </Typography>
        </React.Fragment>
        <Form
        onSubmit= {handleSubmit}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box
              component="form"
              onSubmit={handleSubmit2}
              noValidate
              sx={{ mt: 6 }}
            >
              <TextField
                autoFocus
                fullWidth
                label="Full name"
                name="firstName"
                required
                margin="normal"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              ></TextField>

              <TextField
                fullWidth
                type='email'
                label="Email"
                name="email"
        
                required
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>

              <TextField
                fullWidth
                type = "password"
                margin="normal"
                label="Password"
                name="password"
                
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                color="secondary"
                fullWidth
                onClick={handleSubmit}
              >
                {submitting || sent ? "In progress…" : "Sign Up"}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignUp);
