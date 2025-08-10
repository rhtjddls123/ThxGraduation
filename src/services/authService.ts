import { instance } from "@/lib/axios";
import axios from "axios";

export const authApi = {
  // login: async (data: LoginRequest) => {
  //   const res = await axios.post<LoginResponse>(
  //     `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/sign-in`,
  //     data,
  //     {
  //       withCredentials: true
  //     }
  //   );

  //   return res.data;
  // },

  logout: async () => {
    const res = await instance.post("/auth/logout");

    return res.data;
  },

  tokenRefresh: async () => {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/auth/token/refresh`,
      {},
      { withCredentials: true }
    );

    return res.data;
  }
};
