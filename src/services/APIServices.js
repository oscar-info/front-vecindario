//"use strict";

import axios from "axios";
import useAuth from "hooks/useAuth";
import { useCallback } from "react";

export default function useAPI() {
  const { authToken } = useAuth();
  console.log(authToken)

  const getCurrentUser = useCallback(() => {
    return axios.get("http://localhost:3000/current_user", {
      headers: {
        Authorization: authToken,
      },
    });
  }, [authToken]);

  const getProjects = useCallback((id) => {
    return axios.get(`http://localhost:3000/projects_by_user_id/${id}`, {
      headers: {
        Authorization: authToken,
      },
    });
  }, [authToken]);

  const getProject = useCallback((id) => {
    return axios.get(`http://localhost:3000/projects/${id}`, {
      headers: {
        Authorization: authToken,
      },
    });
  }, [authToken]);

  const createProject = useCallback((data) => {
    return axios.post("http://localhost:3000/projects", data, {
      headers: {
        Authorization: authToken,
      },
    });
  }, [authToken]);

  const getLeads = useCallback((id) => {
    return axios.get(`http://localhost:3000/leads_by_project_id/${id}`);
  }, []);

  return { getProject, getProjects, getLeads, createProject, getCurrentUser };
}
