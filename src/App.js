import './App.css';
import Breeds from './components/screens/Breeds';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Dogs from './components/screens/Dogs';
import Gallery from './components/screens/Gallery';
import Search from './components/screens/Search';
import Uploads from './components/screens/Uploads';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';





function App() {
  return (
    <>
    <Router>
       <Route path="/" exact component={Dogs}/>
            <Switch>
                <Route path="/breeds"  component={Breeds}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path ="/search" component={Search}/>
                <Route path="/uploads" component={Uploads}/>
                <Route path ="/login" component={Login}/>
                <Route path ="/signup" component={Signup}/>
            </Switch>
    </Router>
    </>
  );
};

export default App;
