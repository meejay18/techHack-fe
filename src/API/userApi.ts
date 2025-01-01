import axios from "axios";
// import { data } from "react-router-dom";

const URL: string = "https://techhackbe.onrender.com";

export const createAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/api/create-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
export const logInUser = async (data: any) => {
  try {
    return await axios.post(`${URL}/api/login`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
export const verifyUser = async (userID: any) => {
  try {
    return await axios.post(`${URL}/api/verifyUser/${userID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
export const readOneUser = async (data: any) => {
  try {
    return await axios.post(`${URL}/read-one`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
