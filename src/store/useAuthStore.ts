import { create } from "zustand";

interface AuthState {
  name?: string;
  isLogin: boolean;
  setLogin: ({ name, value }: { name?: string; value: boolean }) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLogin: false,
  setLogin: ({ name, value }) => set({ name, isLogin: value })
}));
