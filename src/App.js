import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import VolunteerOption from "./components/vulanteerOptions/VolunteerOption";

function App() {
  return (
    <div>
    <Header></Header>
    <VolunteerOption></VolunteerOption>
      
    </div>
  );
}

export default App;
