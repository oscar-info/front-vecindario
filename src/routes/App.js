import React from 'react'
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from '../containers/Home'
import Cms from '../containers/Cms'
import CreateProject from '../containers/CreateProject'
import DetailProject from '../containers/DetailProject'
import Leads from '../containers/Leads'
import '../assets/styles/App.scss'
import { ToastProvider } from 'react-toast-notifications';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <>
      <RecoilRoot>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={6000}
        placement="bottom-center"
      >
        <Router>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/auth/login' component={ Home } />
            <Route path='/registrarse' component={ Home } />
            <Route path='/leads/:projectId' component={ Home } />
            <Route exact path='/cms' component={ Cms } />
            <Route  exact path='/cms/create_project' component={ CreateProject }/>
            <Route  exact path='/cms/detail_project' component={ DetailProject }/>
            <Route  exact path='/cms/leads' component={ Leads }/>
            <Redirect to='/' />
          </Switch>
        </Router>
    </ToastProvider>
    </RecoilRoot>
    </>
  );
}

export default App;
