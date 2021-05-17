import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/nav/nav';
import Home from './pages/home/home';
import Admin from './pages/Admin/Admin';
import './App.css';

function App() {
  return (
    <Router className="App">
      <Nav></Nav>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
      <Route exact path={process.env.PUBLIC_URL + '/admin'} component={Admin} />
    </Router>
  );
}

export default App;
