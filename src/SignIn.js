import React, {useState} from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import { required } from './modules/form/validation';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import withRoot from './modules/withRoot';
import {Link as Direct, useHistory} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function SignIn() {
  const [email, setEmailValue] = useState('');
  const [password, setPasswordValue] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const history = useHistory();

  const validate = (values) => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }
    return errors;
  };

  const handleSubmit = async() => {
    const auth = getAuth();
    try{
      setSent(true);
      await signInWithEmailAndPassword(auth,email, password);
      history.push('/dashboard');
    }
    catch(e) {
    alert('Email or password is wrong! Try Again');
    setSent(false);
    }

  };

 const signInWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try{
     await signInWithPopup(auth, provider);
     history.push('/dashboard');
    }
    catch(e){
      alert(e);
    }

}

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Direct to="/sign-up" style={ {textDecoration: 'none', color:'white'} }>
            <Link
              align="center"
              underline="always"
            >
              Sign Up here
            </Link>
            </Direct>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        > 
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>    
                    <TextField fullWidth label="Email" name='email'
                      value = {email}
                      onChange = {(e) => setEmailValue(e.target.value)}>
              
                    </TextField>

                    <TextField type='password' fullWidth label="Password" margin="normal" name='password' value = {password}
                      onChange = {(e) => setPasswordValue(e.target.value)}>
                    </TextField>
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
                onClick={handleSubmit}
              >
                {submitting || sent ? 'In progress…' : 'Sign In'}
              </FormButton>

              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
                onClick={signInWithGoogle}
              >
                {'Sign In With Google'}
              </FormButton>

            </Box>
          )}
        </Form>
        <Typography align="center">
        <Direct to="/forgot-password" style={ {textDecoration: 'none', color:'white'} }>
          <Link underline="always" href="/premium-themes/onepirate/forgot-password/">
            Forgot password?
          </Link>
          </Direct>
        </Typography>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignIn);
