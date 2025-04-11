import { isAxiosError } from "axios";
import { apiServiceAuth } from "../lib/axios"; 

export async function login(formData) {
  try {
    const { data } = await apiServiceAuth.post("Auth/login", formData);
    return data;
  } catch (error) {
    if(isAxiosError(error) && error.response){
      throw new Error(error.response.data);
    }
  }
}

export async function register(formData) {
  try {
    const { data } = await apiServiceAuth.post("Auth/Register", formData);
    return data;
  } catch (error) {
    if(isAxiosError(error) && error.response){
      throw new Error(error.response.data.errors);
    }
  }
}