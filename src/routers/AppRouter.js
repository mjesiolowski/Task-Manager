import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import EditTask from '../components/EditTask';
import DoneTask from '../components/DoneTask';


const AppRouter = ({ hideLoader }) => {
  useEffect(() => hideLoader(), []);

  return (
    <BrowserRouter >
      <div className="container app">
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/edit/:id" component={EditTask} />
          <Route path="/done/:id" component={DoneTask} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>

    </BrowserRouter >
  )
}

export default AppRouter;
