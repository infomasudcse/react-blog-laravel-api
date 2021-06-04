import { Route, Switch } from "react-router";
import Contact from './pages/Contact';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <>
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
      </Switch>
    </>
  );
}

export default App;
