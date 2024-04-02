import axios from "axios";

export const mockApi = axios.create({
  baseURL: "https://boxing-one.vercel.app/mock",
  headers: {
    "Content-type": "application/json",
  },
});
