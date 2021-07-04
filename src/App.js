import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About/About';
import CommunityPartners from './pages/CommunityPartners/CommunityPartners';
import Contact from './pages/Contact/Contact';
import GovernmentVending from './pages/GovernmentVending/GovernmentVending';
import Home from './pages/home/home';
import Admin from './pages/Admin/Admin';
import './App.css';


function App() {
  
  return (
    <Router className="App">
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
      <Route exact path={process.env.PUBLIC_URL + '/admin'} component={Admin} />
      <Route exact path={process.env.PUBLIC_URL + '/About'} component={About} />
      <Route exact path={process.env.PUBLIC_URL + '/CommunityPartners'} component={CommunityPartners} />
      <Route exact path={process.env.PUBLIC_URL + '/Contact'} component={Contact} />
      <Route exact path={process.env.PUBLIC_URL + '/GovernmentVending'} component={GovernmentVending} />

    </Router>
  );
}

export default App;
