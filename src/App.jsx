import axios from "axios";
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

/* Components */
import { Header } from './components/Header';
import { Main } from './components/Main';


/* Pages */
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

function App() {
  const [countries, setCountries] = useState([]);
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/countries-flags/">
            <HomePage countries={countries} setCountries={setCountries} />
          </Route>
          <Route path="/country/:name" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </>
  );
}

export default App;
