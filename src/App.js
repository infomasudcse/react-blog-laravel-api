import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Details from './pages/Details';
import Form from './pages/Form';
import Home from './pages/Home';
import List from './pages/List';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/details'>
            <Details />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/form'>
            <Form />
          </Route>
          <Route path='/list'>
            <List />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </>
  );
}

export default App;
