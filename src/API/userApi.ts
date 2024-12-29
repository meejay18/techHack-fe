import axios from "axios";
import { data } from "react-router-dom";

const URL: string = "https://techhackbe.onrender.com";

export const createAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/create-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
export const logInUser = async (data: any) => {
  try {
    return await axios.post(`${URL}/login`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
export const verifyUser = async (userID: any) => {
  try {
    return await axios.post(`${URL}/verifyUser/${userID}`, data).then((res) => {
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
