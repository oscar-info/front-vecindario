"use strict";

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

const createProject = (data) => {
  return axios.post('http://localhost:3000/', data, {
    headers: {
      Authorization: token,
    },
  });
};

export { getCurrentUser, getProjects, createProject };
