import { authApi } from "@/services/authService";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const REDIRECT_URI = `${import.meta.env.VITE_SERVICE_URL}/login/kakao`;
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_KAKAO_APP_KEY
  }&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = kakaoAuthUrl;
  };

  return { onLogin: handleKakaoLogin };
};

export const useKakaoLogin = () => {
  const { setLogin } = useAuthStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.loginWithKakaoCode,
    onSuccess: (data) => {
      setLogin({ value: true, name: data.name });
      navigate(`/${data.link}`);
    },
    onError: () => {
      setLogin({ value: false, name: undefined });
    }
  });
};

export const useAuth = () => {
  const setLogin = useAuthStore((state) => state.setLogin);

  return useMutation({
    mutationFn: authApi.tokenRefresh,
    onSuccess: (data) => {
      setLogin({ value: true, name: data.owner });
    },
    onError: () => {
      setLogin({ value: false, name: undefined });
    }
  });
};

export const useIsLogin = () => {
  const { mutate } = useAuth();
  useEffect(() => {
    mutate();
  }, []);
};
