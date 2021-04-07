import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import EventTask from "./components/EventTask/EventTask";
import Header from './components/header/Header';
import Login from "./components/login/Login";
import Nomatch from "./components/Nomatch/Nomatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/register/Register";
import VolunteerOption from "./components/vulanteerOptions/VolunteerOption";


export const SelectContext = createContext();
export const UserContext = createContext()

function App() {
  const [select, setSelect] = useState({});
  const [loggedUser, setLoggedUser] = useState({})
  return (
    <div>
    <SelectContext.Provider value={[select, setSelect]}>
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
           <Header></Header>
          <VolunteerOption></VolunteerOption>

        </Route>
        <Route path='/home'>
           <Header></Header>
          <VolunteerOption></VolunteerOption>

        </Route>
        <Route path='/event'>
         <EventTask></EventTask>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path='/register'>
          <Register></Register>
        </PrivateRoute>
        <Route path='*'>
          <Nomatch></Nomatch>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
    
    </SelectContext.Provider>
    </div>
  );
}

export default App;
