import React, { useEffect } from "react";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "../containers/Home";
import Cms from "../containers/Cms";
import CreateProject from "../containers/CreateProject";
import DetailProject from "../containers/DetailProject";
import Leads from "../containers/Leads";
import "../assets/styles/App.scss";
import { ToastProvider } from "react-toast-notifications";
import { useSetRecoilState } from "recoil";
import { currentUserState, projectsListState } from "../atoms/atoms";
import useAuth from "../hooks/useAuth";
import useAPI from "services/APIServices";


const PrivateRoute = (props) => {
  const { authToken } = useAuth();
  const Component = props.component;

  return (
    <Route
      {...props}
      component={() => {
        if (!authToken) return <Redirect to="/auth/login" />;
        return <Component />;
      }}
    />
  );
};

const App = () => {
  const { authToken } = useAuth();
  const setCurrentUser = useSetRecoilState(currentUserState);
  const setProjects = useSetRecoilState(projectsListState);
  const { getCurrentUser, getProjects } = useAPI();

  useEffect(() => {
    if (authToken) {
      
      async function fetchInitialData() {
        let currentUser = await getCurrentUser();
        setCurrentUser(currentUser.data);
        let userProjects = await getProjects(currentUser.data.id);
        setProjects(userProjects.data);
      }

      fetchInitialData();
    }
  }, [authToken, setCurrentUser, setProjects, getCurrentUser, getProjects]);

  return (
    <>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={6000}
        placement="bottom-center"
      >
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth/login" component={Home} />
            <Route path="/registrarse" component={Home} />
            <Route path="/leads/:projectId" component={Home} />
            <PrivateRoute exact path="/cms" component={Cms} />
            <PrivateRoute exact path="/cms/create_project" component={CreateProject} />
            <PrivateRoute exact path="/cms/update_project/:id" component={CreateProject} />
            <PrivateRoute exact path="/cms/detail_project/:id" component={DetailProject} />
            <PrivateRoute exact path="/cms/leads/:id" component={Leads} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </ToastProvider>
    </>
  );
};

export default App;
