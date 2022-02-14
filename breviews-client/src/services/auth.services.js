import axios from "axios";

const API_URL = process.env.API_URL;

const options = {
  withCredentials: true,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

const signup = (data) => {
  return axios.post(API_URL + "/auth/signup", data, options);
};

const login = (data) => {
  return axios.post(API_URL + "/auth/login", data, options);
};

const logout = () => {
  return axios.get(API_URL + "/auth/logout", options);
};
const getCurrentUser = (user_id) => {
  let data = { user_id };
  return axios.post(API_URL + "/auth/user", data, options);
};
const AuthService = {
  signup,
  login,
  logout,
  getCurrentUser,
};
export default AuthService;
