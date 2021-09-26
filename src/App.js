import Index from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard';
import Data from './Data';
import axios from 'axios';
//import {app} from './index';
import { getAuth } from 'firebase/auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const firebaseConfig = {
  apiKey: "AIzaSyBzoZ2KetMByRQ-F1xAl-RtfHkjnAHfw_g",
  authDomain: "fir-db-for-spring-boot-30cac.firebaseapp.com",
  projectId: "fir-db-for-spring-boot-30cac",
  storageBucket: "fir-db-for-spring-boot-30cac.appspot.com",
  messagingSenderId: "921032801974",
  appId: "1:921032801974:web:4cec6b4d8f47c03bf1b017",
  measurementId: "G-SHJ62VWKCH"
};

// Initialize Firebase



export const app = initializeApp(firebaseConfig);
function App() {



  // Your web app's Firebase configuration


  const [loggedIn, setLoggedIn] = useState(null);
  console.log(app);
  const [dataset, setDataset] = useState([]);
  let history2 = useHistory();

  const url = "https://avatar21backend.herokuapp.com/datasets";

  const fetchDatasets = () => {
    let fetchData = async () => {
      const auth = getAuth();
      // if (!auth.currentUser) {
      // setLoggedIn(false);
      // } else {
      //   setLoggedIn(true);
      // }

      // if (loggedIn) {

      const token = await auth.currentUser.getIdToken(true).then(function (idtoken) {
        return idtoken;
      });

      const request = await axios.get(url, {
        headers: {
          'Authorization': 'bearer ' + token
        }
      });

      console.log(request.data);
      // auth.currentUser.getIdToken(true);
      console.log(app);
      auth.currentUser && auth.currentUser.getIdToken(true).then(function (idToken) {
        console.log("Token", idToken);
      });
      setDataset(request.data);
      return request;
      // }
    }

    fetchData();
  }
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route path="/dataset/:documentId" component={({match}) => {
            return <Data dataset={dataset} match={match} />
          }} />
          <Route path='/sign-in'> <SignIn fetchDatasets={fetchDatasets} /> </Route>
          <Route path='/sign-up'> <SignUp /> </Route>
          <Route path='/forgot-password'> <ForgotPassword /> </Route>
          <Route path='/dashboard'> <Dashboard dataset={dataset} /> </Route>
          <Route path='/'>  <Index /> </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
