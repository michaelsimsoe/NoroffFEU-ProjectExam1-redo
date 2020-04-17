import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { MobileMenu } from 'components/mobileMenu';
import { SkipToContent } from 'components/skiptToContent';
import { TimeTable } from 'pages/timetable';
import { JoinPage } from 'pages/join';
import { JoinSuccessPage } from 'pages/success';
import { SingleEvent } from 'pages/single';

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
        <Route exact path="/single/:id">
          <SingleEvent />
        </Route>
        <Route exact path="/timetable">
          <TimeTable />
        </Route>
        <Route exact path="/join">
          <JoinPage />
        </Route>
        <Route exact path="/join/success">
          <JoinSuccessPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
