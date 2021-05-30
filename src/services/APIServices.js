//"use strict";

import axios from "axios";

const token = localStorage.getItem("auth_token");

const getCurrentUser = () => {
  return axios.get("http://localhost:3000/current_user", {
    headers: {
      Authorization: token,
    },
  });
};

const getProjects = (id) => {
  return axios.get(`http://localhost:3000/projects_by_user_id/${id}`, {
    headers: {
      Authorization: token,
    },
  });
};

const getProject = (id) => {
  return axios.get(`http://localhost:3000/projects/${id}`, {
    headers: {
      Authorization: token,
    },
  });
};

const createProject = (data) => {
  return axios.post('http://localhost:3000/projects', data, {
    headers: {
      Authorization: token,
    },
  });
};

const getLeads = (id) => {
  return axios.get(`http://localhost:3000/leads_by_project_id/${id}`);
};

export { getCurrentUser, getProjects, createProject, getLeads, getProject };
