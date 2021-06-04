//"use strict";

import axios from "axios";
import useAuth from "hooks/useAuth";
import { useCallback } from "react";
import { trackPromise } from 'react-promise-tracker';

export default function useAPI() {
  const { authToken } = useAuth();
  console.log(authToken)

  const getCurrentUser = useCallback(() => {
    return axios.get(`${process.env.REACT_APP_API}/current_user`, {
      headers: {
        Authorization: authToken,
      },
    });
  }, [authToken]);

  const getProjects = useCallback((id) => {
    return axios.get(`${process.env.REACT_APP_API}/projects_by_user_id/${id}`, {
      headers: {
        Authorization: authToken,
      },
    });
  }, [authToken]);

  const getProject = useCallback((id) => {
    return trackPromise( axios.get(`${process.env.REACT_APP_API}/projects/${id}`, {
      headers: {
        Authorization: authToken,
      },
    }));
  }, [authToken]);

  const createProject = useCallback((data) => {
    return trackPromise( axios.post(`${process.env.REACT_APP_API}/projects`, data, {
      headers: {
        Authorization: authToken,
      },
    }));
  }, [authToken]);

  const getLeads = useCallback((id) => {
    return trackPromise( axios.get(`${process.env.REACT_APP_API}/leads_by_project_id/${id}`));
  }, []);

  return { getProject, getProjects, getLeads, createProject, getCurrentUser };
}
