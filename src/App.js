import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/layout/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './components/NotFound';
import AddUser from './components/employees/AddUser';
import EditUser from './components/employees/EditUser';
import ViewEmployee from './components/employees/ViewEmployee';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/employees/add" component={AddUser} />
            <Route exact path="/employees/edit/:id" component={EditUser} />
            <Route exact path="/employees/:id" component={ViewEmployee} />
            <Route component={NotFound} />
          </Switch>
      </div>
    </Router>

  );
}

export default App;
