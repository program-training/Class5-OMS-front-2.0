import * as jwt from "jwt-decode";

export const setLocalStorageToken = (token: string) => {
  localStorage.setItem("token", token);
  console.log(jwt.jwtDecode(token));
};

export const getToken = () => {
  const check = localStorage.getItem("token");
  return check == null ? "loggedout" : "loggedin";
};
export const getRealToken = () => {
  const check = localStorage.getItem("token");
  return check == null ? "" : check;
};
export const deleteToken = () => {
  localStorage.removeItem("token");
};
