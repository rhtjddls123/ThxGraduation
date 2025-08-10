import { authApi } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
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
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.loginWithKakaoCode,
    onSuccess: (data) => {
      navigate(`/${data.link}`);
    },
    onError: () => {}
  });
};
