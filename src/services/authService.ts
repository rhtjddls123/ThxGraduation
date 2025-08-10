import { instance } from "@/lib/axios";
import type { LoginResponse } from "@/types/type";
import axios from "axios";

export const authApi = {
  login: async () => {
    const res = await instance.get(`/oauth/kakao/login`);
    return res.data;
  },

  loginWithKakaoCode: async (code: string) => {
    const res = await axios.get<LoginResponse>(
      "https://thinkboo.duckdns.org/oauth/kakao/callback",
      {
        params: { code },
        withCredentials: true
      }
    );

    return res.data;
  },

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
