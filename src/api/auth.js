import { tokenUrl } from "./constants";
import axios from "axios";
import { isExpired } from "react-jwt";

/**
 * Used to get the access token from the server.
 * @param {Object} credentials An object containing username and password.
 */
export const getAccessToken = async (credentials) => {
  const response = await axios.post(tokenUrl, credentials, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

/**
 * Used to clear the access token from local storage.
 */
export const clearAccessToken = () => {
  localStorage.clear();
};

/**
 * Check if the user is authenticated
 */
export const isAuthenticated = () => {
  const access_token = localStorage.getItem("access_token");
  if (!access_token) {
    return false;
  }
  if (isExpired(access_token) === true) {
    clearAccessToken();
    return false;
  }
  return true;
};
