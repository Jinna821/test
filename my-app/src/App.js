import './App.css';
import AddLead from './Components/CamPage/AddLead';
import Campaign from './Components/CamPage/Campaign';
import CampCustomize from './Components/CamPage/CampCustomize';
import Campleads from './Components/CamPage/Campleads';
import LogIn from './Components/LogIn';
import Signup from './Components/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/landing/addleads' Component={AddLead}/>
          <Route path='/landing/leads' Component={Campleads}/>
          <Route exact path='/landing/newCamp' Component={CampCustomize}/>
          <Route exact path='/landing' Component={Campaign} />
          <Route exact path='/signup' Component={Signup} />
          <Route path='/' Component={LogIn}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
