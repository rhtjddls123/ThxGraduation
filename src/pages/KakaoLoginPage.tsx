import { useKakaoLogin } from "@/hooks/useAuth";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const KakaoLoginPage = () => {
  const [searchParams] = useSearchParams();
  const hasCalled = useRef(false);
  const code = searchParams.get("code");
  const { mutate } = useKakaoLogin();

  useEffect(() => {
    if (hasCalled.current) return;
    hasCalled.current = true;

    if (code) {
      mutate(code);
    }
  }, [code, mutate]);
  return null;
};

export default KakaoLoginPage;
