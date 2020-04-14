import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { MobileMenu } from 'components/mobileMenu';
import { SkipToContent } from 'components/skiptToContent';

function App() {
  return (
    <Router>
      <Header />
      <SkipToContent />>
      <MobileMenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
