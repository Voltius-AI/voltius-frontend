import axios from "axios";

export const APIInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
