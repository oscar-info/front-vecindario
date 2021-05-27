import React from 'react'
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from '../containers/Home'
import Cms from '../containers/Cms'
import CreateProject from '../containers/CreateProject'
import '../assets/styles/App.scss'
import { ToastProvider } from 'react-toast-notifications';

const App = () => {
  return (
    <>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={6000}
        placement="bottom-center"
      >
        <Router>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/leads/:projectId' component={ Home } />
            <Route exact path='/cms' component={ Cms } />
            <Route  exact path='/cms/create_project' component={ CreateProject }/>
            <Redirect to='/' />
          </Switch>
        </Router>
    </ToastProvider>
    </>
  );
}

export default App;
