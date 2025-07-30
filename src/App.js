
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import About from './About';
import Contact from './Contact';
import Welcome from './Welcome';
import NewEmp from './NewEmp';
import TestParam from './TestParam';

function App() {
  return (
    <div className="App">
      <img src='slide-1.jpg'  width="100%"  height="250px" alt="Image Not Found " />
      <hr />
      <BrowserRouter>
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/login" exact Component={Login} />
        <Route path="/about" exact Component={About} />
        <Route path="/contact" exact Component={Contact} />
        <Route path="/welcome" exact Component={Welcome} />
        <Route path="/empinfo" exact Component={NewEmp} />
        <Route path="/test/:personName" exact Component={TestParam} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
