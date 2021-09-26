import Index from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import Dashboard from './Dashboard';
import Data from './Data';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
       <div className="App">
      <Switch>
        <Route path="/dataset/:id" component={Data} />  
        <Route path='/sign-in'> <SignIn/> </Route>
        <Route path='/sign-up'> <SignUp/> </Route>
        <Route path='/forgot-password'> <ForgotPassword/> </Route> 
        <Route path='/dashboard'> <Dashboard/> </Route>
        <Route path='/'>  <Index/> </Route>
      </Switch>
   
    </div>
    </Router>
   
  );
}

export default App;
